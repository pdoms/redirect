export default function validate(vendor) {
  let errors = {};
  if (!vendor.drinkname) {
    errors.drinkname = "Name is required.";
  }

  return errors;
}
