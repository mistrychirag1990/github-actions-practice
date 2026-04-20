const http = require('http');

const port = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.end("Hello from CI/CD 🚀");
}).listen(port, () => {
  console.log(`Server running on port ${port}`);
});