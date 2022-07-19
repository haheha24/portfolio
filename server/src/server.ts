import Express from "express";
import router from "./router/index";

const app = Express();

// Routes index
app.use("/router", router);

// Port
app.listen(process.env.PORT || 5000);
