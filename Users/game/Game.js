import mongoose from 'mongoose'

const Game = new mongoose.Schema({
  image: { type: String, required: true },
  word: { type: String, required: true},
  translation: { type: String, required: true},
  sound: { type: String, required: true},
  set_id: {type: String, required: true},
  user_id: {type: String, required: true}
})

export default mongoose.model('Game', Game)