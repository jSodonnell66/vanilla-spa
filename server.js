const express = require("express");
const path = require("path");

const app = express();

// Serve your static assets (including JavaScript files) with the correct MIME type
app.use(
  "/static",
  express.static(path.resolve(__dirname, "frontend", "static"), {
    setHeaders: (res, filePath) => {
      if (filePath.endsWith(".js")) {
        res.setHeader("Content-Type", "text/javascript");
      }
    },
  })
);

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(process.env.PORT || 5001, () => console.log("Server running..."));
