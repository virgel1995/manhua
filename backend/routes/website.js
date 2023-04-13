import { Router } from "express";
import {
  Add,
  AllSites,
  Delete,
  Update,
  findSite,
} from "../controller/website.js";
import isAuth from "../middleware/isAuth.mjs";
import isCreator from "../middleware/isCreator.mjs";
const router = Router();

// add
router.post("/website/add", isAuth, isCreator, Add);
// update
router.put("/website/:id", isAuth, isCreator, Update);
// delete
router.delete("/website/:id", isAuth, isCreator, Delete);
// get by id
router.get("/website/:id", findSite);
// get all records
router.get("/website", AllSites);

export default router;

/**
 * @swagger
 * /api/website/add :
 *    post:
 *      summary: Add new website Link
 *      requestBody:
 *        description: 
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                url:
 *                  type: string
 *                logo:
 *                  type: string
 *                langs:
 *                  type: array
 *                  items: 
 *                   type : string
 *                user:
 *                  type: string
 *      tags:
 *        - Website
 *      responses:
 *        "200":
 *          description: website add successfully.
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          data:
 *                              $ref: '#/components/schemas/Websites'
 *        "401":
 *          description: Invalid token.
 *        "500":
 *          description: An internal server error occurred, please try again.

 */

/**
 * @swagger
 * /api/website/:id :
 *    put:
 *      summary: Update website Link
 *      parameters:
 *        - in: params
 *          name: id
 *          schema:
 *            type: string
 *          description: Put website Id here
*      requestBody:
 *        description: 
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                url:
 *                  type: string
 *                logo:
 *                  type: string
 *                langs:
 *                  type: array
 *                  items: 
 *                   type : string
 *      tags:
 *        - Website
 *      responses:
 *        "200":
 *          description: website updated successfully.
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          data:
 *                              $ref: '#/components/schemas/Websites'
 *        "401":
 *          description: Invalid token.
 *        "500":
 *          description: An internal server error occurred, please try again.

 */

/**
 * @swagger
 * /api/website/:id :
 *    delete:
 *      summary: Deleted website Link
 *      parameters:
 *        - in: params
 *          name: id
 *          schema:
 *            type: string
 *          description: Put website Id here
 *      tags:
 *        - Website
 *      responses:
 *        "200":
 *          description: Deleted website successfully.
 *        "401":
 *          description: Invalid token.
 *        "500":
 *          description: An internal server error occurred, please try again.

 */

/**
 * @swagger
 * /api/website/:id :
 *    get:
 *      summary: get website by id
 *      parameters:
 *        - in: params
 *          name: id
 *          schema:
 *            type: string
 *          description: Put website Id here
 *      tags:
 *        - Website
 *      responses:
 *        "200":
 *          description: website updated successfully.
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          data:
 *                              $ref: '#/components/schemas/Websites'
 *        "401":
 *          description: Invalid token.
 *        "500":
 *          description: An internal server error occurred, please try again.

 */

/**
 * @swagger
 * /api/website :
 *    get:
 *      summary: get all websites links
 *      tags:
 *        - Website
 *      responses:
 *        "200":
 *          description: get website data successfully.
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          data:
 *                              $ref: '#/components/schemas/Websites'
 *        "401":
 *          description: Invalid token.
 *        "500":
 *          description: An internal server error occurred, please try again.

 */
