import { createApiClient, isProd } from "@faridsh69/react-utils";

const COMMON = "posts";

const TESTING_API_DOMAINS = {
  auth: "https://auth-testing.domain.com",
  base: "https://jsonplaceholder.typicode.com",
};

const PRODUCTION_API_DOMAINS = {
  auth: "https://auth.domain.com",
  base: "https://domain.com",
};

const isProduction = isProd();

export const API_ENDPOINTS = {
  base: isProduction ? PRODUCTION_API_DOMAINS.base : TESTING_API_DOMAINS.base,
  auth: isProduction ? PRODUCTION_API_DOMAINS.auth : TESTING_API_DOMAINS.auth,
};

export const BASE_API_CLIENT = createApiClient(API_ENDPOINTS.base);

export const getProductsApi = (filters: any) =>
  BASE_API_CLIENT.get({
    endpoint: `${COMMON}`,
    data: {
      page: filters.page,
      per_page: filters.perPage,
    },
  });

export const getProductApi = (entityId: number) => {
  return BASE_API_CLIENT.get({
    endpoint: `${COMMON}/${entityId}`,
  });
};

export const createProductApi = (data: any) =>
  BASE_API_CLIENT.post({
    endpoint: COMMON,
    data,
  });

export const updateProductApi = (data: any) =>
  BASE_API_CLIENT.put({
    endpoint: `${COMMON}/${data.id}`,
    data,
  });

export const deleteProductApi = (entityId: number) =>
  BASE_API_CLIENT.remove({
    endpoint: `${COMMON}/${entityId}`,
  });
