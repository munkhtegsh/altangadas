import Form from './styles/Form';
import useForm from '../lib/useForm';
import { CURRENT_USER_QUERY } from './User';
import { gql, useMutation } from '@apollo/client';
import Error from './ErrorMessage';

const RESET_MUTATION = gql`
  mutation RESET_MUTATION($email: String!, $password: String!, $token: String!) {
    redeemUserPasswordResetToken(email: $email, token: $token, password: $password) {
     code
     message
    }
  }
`
export default function Reset({ token }) {
  const {inputs, handleChange, resetForm} = useForm({ email: '', password: '', token })
  const [reset, { data, loading, error }] = useMutation(RESET_MUTATION, {
    variables: inputs,
  })

  const successfulError = data?.redeemUserPasswordResetToken?.code
  ? data?.redeemUserPasswordResetToken
  : undefined;

  console.log(error)

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(inputs)

    const res = await reset().catch(console.error); // you can get the data from line number 28 data variable
    // console.log(res)
    console.log('ERROR: ', error)

    resetForm();
  }

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h2>Reset your password!</h2>
      <Error error={error || successfulError} />
      <fieldset>
        {data?.redeemUserPasswordResetToken === null && (<p>Success! You can sign in now</p>)}
        <label htmlFor="email">
          Your email
          <input type="email" name="email"
                  placeholder="Your Email Address" autoComplete="email"
                  value={inputs.email}
                  onChange={handleChange}/>
        </label>
        <label htmlFor="password">
          Your password
          <input type="password" name="password"
                placeholder="Your password" autoComplete="password"
                value={inputs.password}
                onChange={handleChange}
                />
        </label>
        <button type="Submit">Request Reset</button>
      </fieldset>
    </Form>
  )
}