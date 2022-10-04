import { rest } from "msw";
import { GITHUB_PROFILE } from "../constants/testData";

export const handlers = [
  rest.get("https://api.github.com/users/*", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(GITHUB_PROFILE));
  }),
];
