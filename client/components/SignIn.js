import Form from './styles/Form';
import useForm from '../lib/useForm';
import { CURRENT_USER_QUERY } from './User';
import { gql, useMutation } from '@apollo/client';
import Error from './ErrorMessage';

const SIGNIN_MUTATION = gql`
  mutation($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        sessionToken
        item {
          id
          name
          email
        }
      }

      ... on UserAuthenticationWithPasswordFailure {
        code
        message
      }
    }
  }
`
export default function SignIn() {
  const {inputs, handleChange, resetForm} = useForm({ email: '', password: ''})

  const [signin, { data, loading}] = useMutation(SIGNIN_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: CURRENT_USER_QUERY }]
  })

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(inputs)

    const res = await signin(); // you can get the data from line number 28 data variable
    console.log(res)

    resetForm();
  }

  const error = data?.authenticateUserWithPassword.__typename === "UserAuthenticationWithPasswordFailure"
    ? data?.authenticateUserWithPassword
    : undefined;

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h2>Sign into your account</h2>
      <Error error={error} />
      <fieldset>
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
        </label>>
        <button type="Submit">Sign In!</button>
      </fieldset>
    </Form>
  )

}