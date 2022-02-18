import { FastifyPluginAsync } from "fastify";

import { makeSchemaObject } from "../../utils";
import {
  LoginInput,
  LoginInputSchema,
  LoginResponse,
  LoginResponseSchema,
  CommonErrorResponseSchema,
  CommonRequest,
} from "../../types";

const Routes: FastifyPluginAsync = async (fastify) => {
  fastify.get<CommonRequest<LoginResponse, LoginInput>>(
    "/",
    {
      schema: makeSchemaObject({
        response: [{
          status: 200,
          data: LoginResponseSchema,
        }, {
          status: [401, 403, 404, 500],
          data: CommonErrorResponseSchema,
        }],
        body: LoginInputSchema,
      }),
    },
    (req, res) => {
      const {
        email,
        password,
      } = req.body;
      res.send({
        status: "SUCCESS",
        data: {
          email,
          name: "",
          id: "",
          token: password,
        },
      });
    },
  );
};

export default Routes;
