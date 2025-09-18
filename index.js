// Import express
const ytdl = require('@distube/ytdl-core');
const express = require('express');
// const { default: Innertube, UniversalCache } = require('youtubei.js');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Root route
app.get('/get-url/:id', async (req, res) => {
  // const info = await ytdl.getInfo(req.params.id);
  // res.json(info.formats.filter(item => item.hasAudio && item.hasVideo)?.[0]?.url ?? '');
  ytdl.getInfo(req.params.id)
    .then(info => {
      res.json(info.formats.filter(item => item.hasAudio && item.hasVideo)?.[0]?.url ?? '');
    })
    .catch(error => {
      console.log(error);
      res.send(error)
    });
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
