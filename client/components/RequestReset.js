import Form from './styles/Form';
import useForm from '../lib/useForm';
import { CURRENT_USER_QUERY } from './User';
import { gql, useMutation } from '@apollo/client';
import Error from './ErrorMessage';

// sendUserPasswordResetLink will show up after add passwordResetLink in Back-End
const REQUEST_RESET_PASSWORD = gql`
  mutation($email: String!) {
    sendUserPasswordResetLink(email: $email) {
     code
     message
    }
  }
`
export default function RequestReset() {
  const {inputs, handleChange, resetForm} = useForm({ email: ''})
  const [signup, { data, loading, error }] = useMutation(REQUEST_RESET_PASSWORD, {
    variables: inputs,
    // refetchQueries: [{ query: CURRENT_USER_QUERY }]
  })

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(inputs)

    const res = await signup().catch(console.error); // you can get the data from line number 28 data variable
    // console.log(res)
    console.log('ERROR: ', error)

    resetForm();
  }

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h2>Request a Password Reset</h2>
      <Error error={error} />
      <fieldset>
        {data?.sendUserPasswordResetLink === null && (<p>Success! Check your email for a link!</p>)}
        <label htmlFor="email">
          Your email
          <input type="email" name="email"
                  placeholder="Your Email Address" autoComplete="email"
                  value={inputs.email}
                  onChange={handleChange}/>
        </label>
        <button type="Submit">Request Password</button>
      </fieldset>
    </Form>
  )
}