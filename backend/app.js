import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

//  my imports
import dbConnect from "./database/mongoose.js";
// helpers
import allowedHeaders from "./utils/allowedHeaders.js";
import expressListRoutes from "express-list-routes";

//  import routes from middleware
import { userRoutes, websitesRoutes } from "./middleware/index.js";

const PORT = process.env.PORT || 3000;
//  app
const app = express();
//  for encoded requests && application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// express appliction settings
// app.set("port", PORT);
allowedHeaders(app);

//  helpers use
// expressListRoutes(app)

// express Application Routes
app.get("/", (req, res) => {
  res.send({
    message: "Application Works Fine",
    routes: expressListRoutes(app),
  });
});

app.use("/api", userRoutes);
app.use("/api", websitesRoutes);

(async () => {
  await dbConnect();
  app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
  });
})();
