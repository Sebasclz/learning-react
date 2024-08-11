export const getProducts = async () => {
  try {
    const response = await fetch('https://api.escuelajs.co/api/v1/products');
    const data = await response.json();
    const transformedData = {
      products: data,
    };
    return transformedData;
  } catch (e) {
    throw new Error('Error fetching products');
  }
};
