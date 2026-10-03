const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    application: "DevOps Deployment Platform",
    status: "running",
    message: "Application is running successfully"
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "UP"
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;