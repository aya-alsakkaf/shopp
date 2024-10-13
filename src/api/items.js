import instance from "./index";

const getAllItems = async () => {
  try {
    const response = await instance.get("/mini-project/api/items");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const getItemById = async (id) => {
  try {
    const response = await instance.get(`/mini-project/api/items/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const createItem = async (item) => {
  try {
    const response = await instance.post(`/mini-project/api/${category}`, item);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { getAllItems, getItemById, createItem };
