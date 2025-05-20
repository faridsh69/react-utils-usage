import { ApiKeyMapType, useCrud } from "@faridsh69/react-utils";
import {
  createProductApi,
  deleteProductApi,
  getProductApi,
  getProductsApi,
  updateProductApi,
} from "./crudConfig/productApis";

const QUERY_KEYS = {
  base: {
    products: "base products",
  },
};

export const UTILS_QUERY_KEY_APIS: ApiKeyMapType = {
  [QUERY_KEYS.base.products]: {
    listApi: getProductsApi,
    singleApi: getProductApi,
    createApi: createProductApi,
    updateApi: updateProductApi,
    deleteApi: deleteProductApi,
  },
};

export const useCrudProducts = () =>
  useCrud(UTILS_QUERY_KEY_APIS, QUERY_KEYS.base.products);
