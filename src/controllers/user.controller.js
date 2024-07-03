import * as UserService from "../service/user.service.js";

/**
 * @param req
 * @param res
 * Login Controller
 */
const loginController = async (req, res) => {
  const result = await UserService.login();
  return res.status(result.code).send(result);
};

export { loginController };
