import { useState } from "react";

export default function useForm(initial = {}) {
  // create a state object for our inputs
  const [inputs, setInputs] = useState(initial);

  function handleChange(e) {
    let {value, name, type} = e.target;
    if(type==='number') {
      value = parseInt(value);
    }
    if(type==='file') {
      // first thing from the files array goes into value
      [value] = e.target.files;
    }
    setInputs({
      ...inputs,  // copy existing state
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, '']));
    setInputs(blankState);
  }

  //returns things that have to surface from this custom hook
  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}