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
  try {
    // const yt = await Innertube.create({ cache: new UniversalCache(false), generate_session_locally: true });
    // const info = await yt.getStreamingData(req.params.id, {
    //   // client: "YTMUSIC",
    //   // itag: 18
    //   type: "video+audio",
    //   format: "mp4"
    // })
    // res.json({url: info.url}); 
    const info = await ytdl.getInfo(req.params.id);
    return res.json(info.formats.filter(item => item.hasAudio && item.hasVideo)?.[0]?.url ?? '');
  } catch (error) {
    res.json({error})
  }
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
