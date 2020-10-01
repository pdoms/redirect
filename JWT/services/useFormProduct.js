import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  const initialProductState = {
    id: null,
    item: "",
    category: "",
    brand: "",
    unit: "",
    gross_unit_price: "",
    tax_order_percent: 20,
    in_stock: "",
    fk_vendorcompanyname: "",
  };

  const [product, setProduct] = useState(initialProductState);

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [custom, setCustom] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
    console.log(product.fk_vendorcompanyname);
  };

  const handleCustom = () => {
    setCustom(true);
  };
  const handleCustom2 = () => {
    setCustom(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(product));

    setIsSubmitting(true);
  };

  const newProduct = () => {
    setProduct(initialProductState);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
    // eslint-disable-next-line
  }, [errors]);

  return {
    handleInputChange,
    handleCustom,
    handleCustom2,
    handleSubmit,

    newProduct,
    product,
    setProduct,
    errors,
    submitted,
    setSubmitted,
    custom,
  };
};

export default useForm;
