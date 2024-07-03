import { ApiResponse } from "../utils/ApiResponse.js";

/**
 * User Login Service
 */
const login = async () => {
  return ApiResponse.success(
    {
      accessToken: "",
      refreshToken: "",
    },
    "User login success"
  );
};

export { login };
