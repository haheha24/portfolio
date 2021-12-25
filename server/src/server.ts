import Express from "express";
import router from "./router/index";
import path from "node:path";

const app = Express();

// Serve React static files
//Set the base url to serve static content in this directory
app.use(Express.static(path.join(__dirname, "../../../client/build")));

//a get request to serve the index.html file of the project
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

app.use("/router", router);

//Port
const port = 5000;
app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
