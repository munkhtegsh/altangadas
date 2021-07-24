import Form from './styles/Form';
import useForm from '../lib/useForm';
import { CURRENT_USER_QUERY } from './User';
import { gql, useMutation } from '@apollo/client';
import Error from './ErrorMessage';

const SIGNUP_MUTATION = gql`
  mutation($email: String!, $password: String!, $name: String!) {
    createUser(data: { email: $email, password: $password, name: $name}) {
      id
      email
      name
    }
  }
`
export default function SignUp() {
  const {inputs, handleChange, resetForm} = useForm({ email: '', password: '', name: ''})
  const [signup, { data, loading, error }] = useMutation(SIGNUP_MUTATION, {
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
      <h2>Sign Up for an account</h2>
      <Error error={error} />
      <fieldset>
        {data?.createUser && (<p>Signed up with {data.createUser.email} - Please go head and sign in</p>)}
        <label htmlFor="name">
          Your name
          <input type="name" name="name"
                placeholder="Your name" autoComplete="name"
                value={inputs.name}
                onChange={handleChange}
                />
        </label>
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
        <button type="Submit">Sign Up!</button>
      </fieldset>
    </Form>
  )
}