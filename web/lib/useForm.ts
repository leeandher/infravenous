import { useEffect, useState } from "react";

export default function useForm(initialState) {
  const [inputs, setInputs] = useState(initialState);
  const initialValues = Object.values(initialState).join("");

  useEffect(() => {
    setInputs(initialState);
  }, [initialValues]);

  function handleChange(e) {
    let { value, name, type } = e.target;
    if (type === "number") {
      value = parseInt(value);
    }
    if (type === "file") {
      [value] = e.target.files;
    }
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initialState);
  }

  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, _value]) => [key, ""])
    );
    setInputs(blankState);
  }

  // Return hooked variables
  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}
