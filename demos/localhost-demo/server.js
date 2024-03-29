// Import dependencies
const bodyParser = require("body-parser");
const express = require("express");

// Configure the test server
const server = express();
const port = 2021;

// Add middleware to parse the form body
server.use(bodyParser.json());

// Register the test-server on the port
server.listen(port, () => {
  console.log(`Demo app running on Port:${port}`);
});

// Create an endpoint for the latency test
server.post("/latency-test", (req, res) => {
  console.log({
    confidence: req.body.result.confidence,
    isAuth: req.body.result.is_authenticated,
  });
  const resTime = Date.now();
  const mockResponse = {
    timestamp: resTime,
  };
  res.status(201).send(mockResponse);
});
