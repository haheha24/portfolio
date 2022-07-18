import Express from "express";
import router from "./router/index";
import path from "node:path";

const app = Express();

if (process.env.NODE === "development") {
  // Serve React static files
  // Set the base url to serve static content in this directory
  app.use(Express.static(path.join(__dirname, "../../../client/build")));
  app.use(Express.static(path.join(__dirname, "../../../client/public")));

  // a wildcard get request to serve the index.html file of the project
  app.get("*", (req, res) => {
    res.sendFile(
      path.join(__dirname, "../../../client/build", "/index.html"),
      (err) => {
        if (err) {
          res.status(500).send(err);
        }
      }
    );
  });
}

// Routes index
app.use("/router", router);

// Port
app.listen(5000);
