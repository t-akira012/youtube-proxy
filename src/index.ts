import { Hono } from "hono"
const app = new Hono()

app.get("/", (c) => {
  return c.html(`
    <body style="margin:0;padding:0">
      <div style="display:flex">
        <input type="text" id="url" style="flex:1;height:40px;font-size:20px">
        <button onclick="play()" style="width:80px;height:40px;font-size:20px">Play</button>
      </div>
      <iframe id="player" style="width:100vw;height:calc(90vh - 40px);border:0"></iframe>
      <script>
        function play() {
          const url = document.getElementById('url').value;
          let videoId;
          if (url.includes('youtu.be/')) {
            videoId = url.split('youtu.be/')[1].split('?')[0];
          } else {
            videoId = url.split('v=')[1].split('&')[0];
          }
          document.getElementById('player').src = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1';
        }
      </script>
    </body>
  `)
})

export default app
