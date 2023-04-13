const swaggerConfig = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Manhua  API",
      version: "0.0.01",
      description: "manhua api using Node.js, Express, and Mongoose.",
      license: {
        name: "MIT",
        url: "https://choosealicense.com/licenses/mit/",
      },
      contact: {
        name: "virus24",
        url: "https://github.com/virgel199",
        email: "kazouya25@gmail.com",
      },
    },
    basePath: "/",
    servers: [
      {
        url: "http://localhost:3000/",
        name: "Server1",
      },
      {
        url: "http://localhost:5000/",
        name: "Server2",
      },
    ],
  },
  tags: [
    {
      name: "User",
      description: "User routes",
    },
    {
      name: "Websites",
      description: "Websites Routes",
    },
  ],
  apis: [
    "middleware/*.js",
    "database/models/*.js",
    "utils/*.js",
    "routes/*.js",
  ],
};

export default swaggerConfig;
