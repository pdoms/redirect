import http from "../http-common";

const create = (data) => {
  return http.post("/products", data);
};

const update = (id, data) => {
  return http.put(`/products/${id}`, data);
};

const findByTerm = (term) => {
  return http.get(`/products?term=${term}`);
};

const remove = (id) => {
  return http.delete(`/products/${id}`);
};

const filterProduct = (category, fk_vendorcompanyname, brand) => {
  return http.get(
    `/productfilter?category=${category}&fk_vendorcompanyname=${fk_vendorcompanyname}&brand=${brand}`
  );
};

const removeAll = () => {
  return http.delete(`/products`);
};

const getAll = () => {
  return http.get("/products");
};

const get = (id) => {
  return http.get(`/products/${id}`);
};

const createV = (data) => {
  return http.post("/vendors", data);
};

const getallV = () => {
  return http.get("/vendors");
};

const getOneV = (vId) => {
  return http.get(`/vendors/${vId}`);
};

const updateV = (vId, data) => {
  return http.put(`/vendors/${vId}`, data);
};

const deleteV = (vId) => {
  return http.delete(`/vendors/${vId}`);
};

const createMeasurement = (data) => {
  return http.post("/measurements", data);
};

const getallM = () => {
  return http.get("/measurements");
};

const getOneM = (id) => {
  return http.get(`/measurements/${id}`);
};

const createRecipe = (data) => {
  return http.post("/recipes", data);
};

const getallR = () => {
  return http.get("/recipes");
};

const getOneR = (id) => {
  return http.get(`/recipes/${id}`);
};

const createIngredient = (data) => {
  return http.post("/ingredients", data);
};

const getallI = () => {
  return http.get("/ingredients");
};

const getOneI = (id) => {
  return http.get(`/ingredients/${id}`);
};

const deleteI = (id) => {
  return http.delete(`/ingredients/${id}`);
};

const createContainer = (data) => {
  return http.post("/container", data);
};

const getallC = () => {
  return http.get("/container");
};

const getOneC = (id) => {
  return http.get(`/container/${id}`);
};

export default {
  create,
  update,
  findByTerm,
  getAll,
  filterProduct,
  get,
  remove,
  removeAll,
  createV,
  getallV,
  getOneV,
  updateV,
  deleteV,
  createMeasurement,
  getallM,
  getOneM,
  createRecipe,
  getallR,
  getOneR,
  createIngredient,
  getallI,
  getOneI,
  deleteI,
  createContainer,
  getallC,
  getOneC,
};
