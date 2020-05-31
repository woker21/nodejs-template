import * as Model from "../../models";
import { createToken } from "../../utils/access";
import { asyncHandler } from "../../middlewares/error-handler";
import restrictedAccess from "../../middlewares/restricted-access";

const StartApiServer = (app) => {
  /**
   * @swagger
   *
   * /:
   *   get:
   *     description: Test request
   *     tags:
   *       - Public
   *     responses:
   *       200:
   *         []
   *     security:
   *       - basicAuth
   */
  app.get("/", function (req, res) {
    res.send("va bien la cosa");
  });

  /**
   * @swagger
   *
   * /login:
   *   post:
   *     description: Login endpoint
   *     requestBody:
   *       description: User credentials (email, password)
   *       content:
   *         application/json:
   *           examples:
   *             Credentials exmaple:
   *               value:
   *                 mail: pp@pp.com
   *                 pass: pp
   *           schema:
   *             type: object
   *             properties:
   *               mail:
   *                 type: string
   *               pass:
   *                 type: string
   *     tags:
   *       - Public
   *     responses:
   *       200:
   *         []
   *     security:
   *       - basicAuth
   */
  app.post("/login", asyncHandler(async (req, res) => {
      const mail = req.body.mail;
      const pass = req.body.pass;

      if(!mail || !pass) return res.send(400);
      // const user = await Model.login(mail, pass);
      const user = { id: 5, name: 'maria' };

      const token = createToken({ id: user.id })

      res.send(token);
    })
  );

    /**
   * @swagger
   *
   * /restricted-path:
   *   get:
   *     description: Restricted path
   *     tags:
   *       - Restricted
   *     responses:
   *       200:
   *         []
   */
  app.get("/restricted-path", restrictedAccess, (req, res) => {
    res.send(`User id: ${req.userId}`);
  });
};

export default StartApiServer;
