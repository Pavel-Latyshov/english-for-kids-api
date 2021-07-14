import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import fileUpload from 'express-fileupload'
import userRouter from './Users/user-router.js';
import wordsRouter from './Words/wordsRouter.js';
import categoriesRouter from './Categories/categoriesRouter.js';
import postRouter from './Posts/posts-router.js';

const port = '5000'

const DB_URL = `mongodb+srv://user:user@cluster0.8vl8i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`



const app = express()

const Routers = [postRouter, categoriesRouter, wordsRouter, userRouter]
// console.log(myUrls);

app.use(express.json())
app.use(cors())
app.use(express.static('static'))
app.use(fileUpload({}))

app.use(`/api`, Routers)



async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    }).then((res) => {
      AuthData.db = res
      console.log('MongoDb connected')
    })
    app.listen(port, () => {
      console.log('port:', port);
    })

  } catch (error) {
    // console.log(error);
  }
}

startApp()



