import express from 'express'
import cors from 'cors'
import { downloader } from './donwload-video.js'
import { createMP3 } from './create-mp3.js'

const app = express()
//cors libera o acesso de um server para outro
app.use(cors())

app.get('/audio', async (req, res) => {
  const videoId = req.query.v

  try {
    //download
    await downloader(videoId)
    //criar mp3
    await createMP3()

    return res.send('ok')
  } catch (error) {
    console.log(error)
    return res.send(error)
  }
})

app.listen(3333, () => console.log('server up'))