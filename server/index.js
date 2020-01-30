const express = require('express');

const head = {
  'Content-Type': 'text/event-stream',
  'Cache-Control': 'no-cache',
  'X-Content-Type-Options': 'nosniff'
};

const port = 3005;
const app = express();

app.get('/topics', (req, res) => {
  console.log("[GET] /topics");
  res.writeHead(200, head);

  let interval = setInterval(() => res.write(`data: ${JSON.stringify({ping: true})}\n\n`), 1000);


  res.on('close', () => {
    clearInterval(interval);
  });
})
;

app.listen(port, () => console.log(`api listening on ${port}`));

