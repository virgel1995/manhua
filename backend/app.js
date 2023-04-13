import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from 'cors'
import morgan from "morgan"
dotenv.config();
// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);

// eslint-disable-next-line no-undef
const procc = process.env
//  my imports
import dbConnect from "./database/mongoose.js";
// helpers
import allowedHeaders from "./utils/allowedHeaders.js";
import swaggerConfig from "./utils/swagger.config.js";

import expressListRoutes from "express-list-routes";

import swaggerJsdoc from "swagger-jsdoc";
import { serve, setup } from "swagger-ui-express";
const specDoc = swaggerJsdoc(swaggerConfig);

//  import routes from middleware
import { userRoutes, websitesRoutes } from "./routes/index.js";

const PORT = procc.PORT || 3000;
//  app
const app = express();
//  for encoded requests && application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
app.use(morgan('dev'))
// express appliction settings
// app.set("port", PORT);
allowedHeaders(app);

//  helpers use
expressListRoutes(app)
// swagger ui
app.use("/", serve);
app.get("/", setup(specDoc, { explorer: true }));

// express Application Routes

app.use("/api", userRoutes);
app.use("/api", websitesRoutes);

(async () => {
  await dbConnect();
  app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
  });
})();
