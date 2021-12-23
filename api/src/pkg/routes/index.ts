import express, { Router, Request, Response } from "express";

export const indexEntityRouter: Router = Router();

/* GET home page. */
indexEntityRouter.get("/", async (req: Request, res: Response) => {
  // return res.send(req.oidc.isAuthenticated() ? 'logged in' : 'logged out')

  return res.status(200).send({
    message: "Hello World!",
  });
});
