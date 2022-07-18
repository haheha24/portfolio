import Express from "express";
import router from "./router/index";
import path from "node:path";

const app = Express();

// Routes index
app.use("/router", router);

// Serve React static files
// Set the base url to serve static content in this directory
app.use(Express.static(path.join(__dirname, "../../../client/build")));
app.use(Express.static(path.join(__dirname, "../../../client/public")));

if (process.env.NODE === "development") {
  // a wildcard for all get requests to serve the index.html file of the project
  //Only intercepting get requests incase development wants to test other requests.
  app.get("*", (req, res) => {
    if (
      req.url === "/" ||
      req.url === "/about" ||
      req.url === "/projects" ||
      req.url === "/contact"
    ) {
      res.sendFile(
        path.join(__dirname, "../../../client/build", "/index.html"),
        (err) => {
          if (err) {
            res.status(500).send(err);
          }
        }
      );
    } else {
      res.status(404).send("Error 404: Page does not exist.");
    }
  });
} else {
  // a wildcard for all requests to serve the index.html file of the project
  app.all("*", (req, res) => {
    if (
      req.url === "/" ||
      req.url === "/about" ||
      req.url === "/projects" ||
      req.url === "/contact"
    ) {
      res.sendFile(
        path.join(__dirname, "../../../client/build", "/index.html"),
        (err) => {
          if (err) {
            res.status(500).send(err);
          }
        }
      );
    } else {
      res.status(404).send("Error 404: Page does not exist.");
    }
  });
}

// Port
app.listen(5000);
