const test = require("node:test");
const assert = require("node:assert");
const http = require("node:http");
const app = require("../app/server");

test("health endpoint should return UP", async () => {
  const server = http.createServer(app);

  await new Promise((resolve) => {
    server.listen(0, resolve);
  });

  const port = server.address().port;

  try {
    const response = await fetch(`http://localhost:${port}/health`);

    assert.strictEqual(response.status, 200);

    const data = await response.json();

    assert.strictEqual(data.status, "UP");
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
});