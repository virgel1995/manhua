import { Router } from "express";
import { AllUsers, Login, Register, getUser } from "../controller/user.js";
import { deleteUser, updateUser } from "../database/models/User.js";
import isAuth from "../middleware/isAuth.mjs";
const router = Router();
// post routes
// sign in
router.post("/user/signin", Login);
// sign up
router.post("/user/signup", Register);
// update User
router.put("/user/:id", isAuth, updateUser);
//  delete User
router.delete("/user/:id", isAuth, deleteUser);
// get routes
// get all users
router.get("/users", AllUsers);
// get user by id
router.get("/user/:id", getUser);

export default router;

/**
 * @swagger
 * /api/user/signin:
 *    post:
 *      summary: Login
 *      requestBody:
 *        description: Email and password information to login
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                email:
 *                  type: string
 *                password:
 *                  type: string
 *      tags:
 *        - User
 *      responses:
 *        "200":
 *          description: You logged in successfully.
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          user:
 *                              $ref: '#/components/schemas/User'
 *        "401":
 *          description: Invalid token.
 *        "500":
 *          description: An internal server error occurred, please try again.
 */

/**
 * @swagger
 * /api/user/signup:
 *    post:
 *      summary: Register
 *      requestBody:
 *        description: Name,Email and password information to Register
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                email:
 *                  type: string
 *                password:
 *                  type: string
 *      tags:
 *        - User
 *      responses:
 *        "200":
 *          description:  successfully Register New User.
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          user:
 *                              $ref: '#/components/schemas/User'
 */

/**
 * @swagger
 * /api/user/:id :
 *    get:
 *      summary: Get User Info
 *      parameters:
 *        - in: params
 *          name: id
 *          schema:
 *            type: string
 *          description: Put User Id here
 *      tags:
 *        - User
 *      responses:
 *        "200":
 *          description: The user information has gotten successfully.
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          user:
 *                              $ref: '#/components/schemas/User'
 *        "401":
 *          description: Invalid token.
 *        "500":
 *          description: An internal server error occurred, please try again.

 */

/**
 * @swagger
 * /api/users :
 *    get:
 *      summary: Get All Users Data
 *      tags:
 *        - User
 *      responses:
 *        "200":
 *          description: The user information has gotten successfully.
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          user:
 *                              $ref: '#/components/schemas/User'
 *        "500":
 *          description: An internal server error occurred, please try again.

 */

/**
 *  user.name = data.name ?? user.name;
    user.email = data.email ?? user.email;
    user.password = data.password ?? user.password;
    user.username = data.username ?? user.username;
 */

/**
 * @swagger
 * /api/user/:id:
 *    put:
 *      summary: Update User
 *      parameters:
 *        - in: params
 *          name: id
 *          schema:
 *            type: string
 *          description: Put User Id here
 *      requestBody:
 *        description: Data to change
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                email:
 *                  type: string
 *                password:
 *                  type: string
 *                username:
 *                  type: string
 *      tags:
 *        - User
 *      responses:
 *        "200":
 *          description:  successfully Updated User.
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          user:
 *                              $ref: '#/components/schemas/User'
 */

/**
 * @swagger
 * /api/user/:id:
 *    delete:
 *      summary: Delete User
 *      parameters:
 *        - in: params
 *          name: id
 *          schema:
 *            type: string
 *          description: Put User Id here
 *      tags:
 *        - User
 *      responses:
 *        "200":
 *          description:  successfully Deleted User.
 */


