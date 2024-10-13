import instance from "./index";

const getAllCategories = async () => {
  try {
    const response = await instance.get("/mini-project/api/categories");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const getCategoryById = async (id) => {
  try {
    const response = await instance.get(`/mini-project/api/categories/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const createCategory = async (category) => {
  try {
    const response = await instance.post(
      "/mini-project/api/categories",
      category
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { getAllCategories, getCategoryById, createCategory };
