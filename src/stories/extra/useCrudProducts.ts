import { ApiKeyMapType, useCrud } from "@faridsh69/react-utils";
import {
  createProductApi,
  deleteProductApi,
  getProductApi,
  getProductsApi,
  updateProductApi,
} from "./crudConfig/productApis";
import {
  createProgramApi,
  deleteProgramApi,
  getProgramApi,
  getProgramsApi,
  updateProgramApi,
} from "../../services/programsApis";

export const TEST_QUERY_KEYS = {
  base: {
    products: "base_products",
  },
  gym: {
    programs: "gym_programs",
  },
};

// @ts-ignore
export const TEST_QUERY_KEY_APIS: ApiKeyMapType = {
  [TEST_QUERY_KEYS.base.products]: {
    listApi: getProductsApi,
    singleApi: getProductApi,
    createApi: createProductApi,
    updateApi: updateProductApi,
    deleteApi: deleteProductApi,
  },
  [TEST_QUERY_KEYS.gym.programs]: {
    listApi: getProgramsApi,
    singleApi: getProgramApi,
    createApi: createProgramApi,
    updateApi: updateProgramApi,
    deleteApi: deleteProgramApi,
  },
};

export const useCrudProducts = () =>
  useCrud(TEST_QUERY_KEY_APIS, TEST_QUERY_KEYS.base.products);
