// Import express
const express = require('express');
const { default: Innertube, UniversalCache } = require('youtubei.js');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Root route
app.get('/get-url/:id', async (req, res) => {
  try {
    const yt = await Innertube.create({ cache: new UniversalCache(false), generate_session_locally: true });
    const info = await yt.getStreamingData(req.params.id, {
      // client: "YTMUSIC",
      // itag: 18
      type: "video+audio",
      format: "mp4"
    })
    res.json({url: info.url}); 
  } catch (error) {
    res.json({error})
  }
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
