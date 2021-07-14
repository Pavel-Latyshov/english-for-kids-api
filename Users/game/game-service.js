import Game from "./Game.js";

class GameService {
    async create(card) {
        const createdCard = await Game.create({ ...card });
        return createdCard
    }
    async getOne(id) {
        if (!id) {
          throw new Error('id не найден')
        }
        const card = await Game.findById(id);
        return card
      }
    async update(card) {
    if (!card._id) {
      throw new Error('id не найден')
    }
    const updatedCard = await Game.findByIdAndUpdate(card._id, card, { new: true })
    return updatedCard;
  }
  async getAll(id) {
    console.log(id);
    try {
      const Cards = await Game.find()
      const SingleIdCard = Cards.filter(item => {
        return item.user_id === id
      })
      return SingleIdCard
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

export default new GameService();