import "../../envConfig";

const envVariables = {
  apiUrl: process.env.API_URL!,
};

const methods = {
  post: "POST",
  get: "GET",
  put: "PUT",
  delete: "DELETE",
  patch: "PATCH",
};

const urls = {
  test: "/test",
};

export { envVariables, methods, urls };
