export default function validate(vendor) {
  let errors = {};
  if (!vendor.companyname) {
    errors.companyname = "Name is required.";
  }

  return errors;
}
