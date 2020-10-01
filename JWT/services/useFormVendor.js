import { useState, useEffect } from "react";

const useFormVendor = (callback, validate) => {
  const initialVendor = {
    id: null,
    companyname: "",
    contact_first: "",
    contact_last: "",
    contact_telephone: "",
    contact_email: "",
    general_telephone: "",
    general_email: "",
    orders: "",
    comments: "",
  };

  const [vendor, setVendor] = useState(initialVendor);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVendor({ ...vendor, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(vendor));
    setIsSubmitting(true);
  };

  const newVendor = () => {
    setVendor(initialVendor);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return {
    handleInputChange,
    handleSubmit,
    newVendor,
    vendor,
    setVendor,
    errors,
    setErrors,
    submitted,
    setSubmitted,
  };
};

export default useFormVendor;
