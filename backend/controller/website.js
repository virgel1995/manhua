import {
  addSite,
  deleteSite,
  findById,
  getSites,
  updateSite,
} from "../database/models/Websites.js";

async function Add(req, res) {
  const data = req.body;
  const user = await addSite(data);
  res.status(200).send(user);
}

async function Update(req, res) {
  const id = req.params.id;
  const data = req.body;
  const site = await updateSite(id, data);
  res.status(200).send(site);
}

async function Delete(req, res) {
  const id = req.params.id;
  const site = await deleteSite(id);
  res.status(200).send(site);
}

async function findSite(req, res) {
  const id = req.params.id;
  const site = await findById(id);
  res.status(200).send(site);
}
async function AllSites(req, res) {
  const site = await getSites();
  res.status(200).send(site);
}

export { Add, Update, Delete, findSite, AllSites };
