import { FastifyPluginAsync } from "fastify";

import { makeSchemaObject } from "../../utils";
import {
  CommonRequest,
  CommonErrorResponseSchema,
  LoginResponse,
  LoginResponseSchema,
  SingUpInput,
  SingUpInputSchema,
} from "../../types";

const Routes: FastifyPluginAsync = async (fastify) => {
  fastify.post<CommonRequest<LoginResponse, SingUpInput>>(
    "/",
    {
      schema: makeSchemaObject({
        response: [{
          status: 200,
          data: LoginResponseSchema,
        }, {
          status: [400, 409, 500],
          data: CommonErrorResponseSchema,
        }],
        body: SingUpInputSchema,
      }),
    },
    (_req, res) => {
      res.send({
        status: "SUCCESS",
        data: {
          name: "",
          email: "",
          id: "",
          token: "",
        },
      });
    },
  );
};

export default Routes;
