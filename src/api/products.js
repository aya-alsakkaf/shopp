import instance from ".";
const getAllProducts = async () => {
  try {
    const response = await instance.get("/mini-project/api/items");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getAllProducts;
