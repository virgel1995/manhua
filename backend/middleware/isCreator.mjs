import { findUser } from "../database/models/User.js";

const isCreator = async (req, res, next) => {
  const id = req.body.user;
  const user = await findUser(id);
  if (user,type === "creator") {
    next()
  } else {
    res.status(401).send({ message: "Sorry But You Are Not Creator" });
  }
};

export default isCreator;
/**
 * @swagger
 * components:
 *     isCreator:
 *       type: object
 *       status : 'Failed'
 *       properties:
 *         message:
 *           type: string
 *           message: 'Invalid User'
 */
