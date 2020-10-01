import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  const initialRecipeState = {
    id: null,
    drinkname: "",
    drinkcategory: "",
    description: "",
    instructions: "",
    containerId: "",
  };

  const [recipe, setRecipe] = useState(initialRecipeState);

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(recipe));

    setIsSubmitting(true);
  };

  const newRecipe = () => {
    setRecipe(initialRecipeState);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
    // eslint-disable-next-line
  }, [errors]);

  return {
    handleInputChange,
    handleSubmit,
    newRecipe,
    recipe,
    setRecipe,
    errors,
    submitted,
    setSubmitted,
  };
};

export default useForm;
