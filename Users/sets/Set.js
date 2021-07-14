import mongoose from 'mongoose'

const Set = new mongoose.Schema({
  set: { type: String, required: true },
  image: { type: String, required: true},
  user_id: {type: String, required: true}
})

export default mongoose.model('Set', Set)