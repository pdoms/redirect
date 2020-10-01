import { useState, useEffect } from "react";

const useFormIng = (callback) => {
  const initialIngredientState = {
    id: null,
    amount: "",
    recipeId: "",
    productId: "",
    measurementId: "",
  };

  const [ingredient, setIngredient] = useState(initialIngredientState);
  const [errors, setErrors] = useState({});
  const [submittedIngredient, setSubmittedIngredient] = useState(false);
  const [isSubmittingIngredient, setIsSubmittingIngredient] = useState(false);

  const handleInputChangeIngredient = (e) => {
    const { name, value } = e.target;
    setIngredient({ ...ingredient, [name]: value });
  };

  const handleSubmitIngredient = (e) => {
    e.preventDefault();

    setIsSubmittingIngredient(true);
  };

  const newIngredient = () => {
    setIngredient(initialIngredientState);
  };

  return {
    handleInputChangeIngredient,
    handleSubmitIngredient,
    newIngredient,
    ingredient,
    setIngredient,
    submittedIngredient,
    setSubmittedIngredient,
  };
};

export default useFormIng;
