import express from "express";
import {
  Add,
  AllSites,
  Delete,
  Update,
  findSite,
} from "../controller/website.js";
const router = express.Router();
// post methods
router.post("/website/add", Add);
router.post("/website/:id/update", Update);
router.post("/website/:id/delete", Delete);
// get methods
router.get("/website/:id", findSite);
router.get("/website", AllSites);

export default router;
