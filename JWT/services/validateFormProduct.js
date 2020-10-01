export default function validate(product) {
  let errors = {};
  if (!product.item) {
    errors.item = "Name is required.";
  }

  if (!product.brand) {
    errors.brand = "Brand is required.";
  }

  if (isNaN(product.unit)) {
    errors.unit = "Unit volume must be a number.";
  }

  if (isNaN(product.in_stock)) {
    errors.in_stock = "Stock must be a number.";
  }

  if (!product.fk_vendorcompanyname) {
    errors.fk_vendorcompanyname = "Vendor is required.";
  }

  if (isNaN(product.gross_unit_price)) {
    errors.gross_unit_price = "Price must be a number.";
  }

  if (!product.category) {
    errors.category = "Category is required.";
  }
  return errors;
}

//category must be in the pop up as well
