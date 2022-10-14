const express = require("express");
const app = express();
app.all("*", (_, res) => res.json({ ok: true, port: 8080 }));
app.listen(8080, () => console.log("listen 8080"));
