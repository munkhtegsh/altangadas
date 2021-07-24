import { useState, useEffect } from 'react';

// creating a customHook
export default function useForm(init = {}) {
  // create a state object for our inputs
  const [inputs, setInputs] = useState(init);
  const initialValues = Object.values(init).join('');

  useEffect(() => {
    // This function runs when the things we are watching change
    setInputs(init);

  }, [initialValues])

  function handleChange(e) {
    let { value, name, type } = e.target; // const makes it Read-Only
    if (type === 'number') {
      value = parseInt(value);
    }

    //for file uploads
    if (type === 'file') {
      [value] = e.target.files;
    }

    setInputs({
      // copy the existing state
      ...inputs,
      [name]: value
    })
  }

  function resetForm() {
    setInputs(init);
  }

  function clearForm() {
    const blankState = Object.fromEntries(Object.entries(inputs).map(([key, value]) =>
    [key, '']))

    setInputs(blankState);
  }

  // return the things we want to surface from this custom hook
  return {
    inputs,
    handleChange,
    resetForm,
    clearForm
  }
}