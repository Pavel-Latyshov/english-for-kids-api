import User from "./User.js";
import AuthData from "./../AuthData.js";



class UserService {

  async create(user) {
    const createdUser = await User.create({ ...user });
    AuthData.id = user._id
    return createdUser
  }

  async getOne(id) {
    if (!id) {
      throw new Error('id не найден')
    }
    const user = await User.findById(id);
    return user
  }

  async delete(id) {
    try {
      if (!id) {
        throw new Error('id не найден')
      }
      const user = await User.findByIdAndDelete(id)
      return user
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async getAll() {
    try {
      const Users = await User.find();
      return Users
    } catch (error) {
      res.status(500).json(error)
    }
  }

  // async update(user) {
  //   if (!user._id) {
  //     throw new Error('id не найден')
  //   }
  //   const updatedUser = await User.findByIdAndUpdate(user._id, user, { new: true })
  //   return updatedUser;
  // }




}

export default new UserService();