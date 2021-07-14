import GameService from "./game-service.js";

class GameController {

    async createCard(req, res) {
        try {
            const card = await GameService.create(req.body)
            res.json(card)
          } catch (error) {
            res.status(500).json(error.message)
          }
    }
    async getOne(req, res) {
      try {
        const card = await GameService.getOne(req.params.id);
        return res.json(card)
      } catch (error) {
        res.status(500).json(error.message)
      }
    }
  async update(req, res) {
    try {
      const updatedCard = await GameService.update(req.body)
      return res.json(updatedCard);
    } catch (error) {
      res.status(500).json(error.message)
    }
  }
  async getAll(req, res) {
    // console.log(req.params.userid);
    // console.log(req.params.setid);
    try {
      const cards = await GameService.getAll(req.params.userid);
      return res.json(cards)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }
}

export default new GameController();