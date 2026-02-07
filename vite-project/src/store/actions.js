import api from "../api/axios";

export const fetchProducts = () => async (dispatch) => {
  dispatch({ type: "PRODUCTS_REQUEST" });

  try {
    const res = await api.get("/products");
    dispatch({ type: "PRODUCTS_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({
      type: "PRODUCTS_FAIL",
      payload:
        err?.response?.data?.message ||
        err?.message ||
        "Ürünler yüklenirken bir hata oluştu.",
    });
  }
};

export const selectProduct = (product) => ({
  type: "PRODUCT_SELECT",
  payload: product,
});