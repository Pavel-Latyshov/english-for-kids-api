import PostService from './PostService.js'

class PostCotroller {

  async create(req, res) {
    try {
      const post = await PostService.create(req.body, req.files)
      res.json(post)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }

  async getAll(req, res) {
    try {
      const posts = await PostService.getAll();
      return res.json(posts)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }

  async getOne(req, res) {
    try {
      const post = await PostService.getOne(req.params.id);
      return res.json(post)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }

  async update(req, res) {
    try {
      const updatedPost = await PostService.update(req.body)
      return res.json(updatedPost);
    } catch (error) {
      res.status(500).json(error.message)
    }
  }

  async delete(req, res) {
    try {
      const post = await PostService.delete(req.params.id)
      return res.json(post)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }

}

export default new PostCotroller();




// async create(req, res) {
//   try {
//     const { author, title, content, picture } = req.body
//     const post = await Post.create({
//       author, title, content, picture
//     })
//     res.json(post)
//   } catch (error) {
//     res.status(500).json(error)
//   }
// }

// async getAll(req, res) {
//   try {
//     const posts = await Post.find();
//     return res.json(posts)
//   } catch (error) {
//     res.status(500).json(error)
//   }
// }

// async getOne(req, res) {
//   try {
//     const { id } = req.params
//     if (!id) {
//       res.status(400).json({ messagge: 'id не найден' })
//     }
//     const post = await Post.findById(id);
//     return res.json(post)
//   } catch (error) {
//     res.status(500).json(error)
//   }
// }

// async update(req, res) {
//   try {
//     const post = req.body
//     if (!post._id) {
//       res.status(400).json(post)
//       // res.status(400).json({ messagge: 'id не найден' })
//     }
//     const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true })
//     return res.json(updatedPost);
//   } catch (error) {
//     res.status(500).json(error)
//   }
// }


// async delete(req, res) {
//   try {
//     const { id } = req.params
//     if (!id) {
//       res.status(400).json({ messagge: 'id не найден' })
//     }
//     const post = await Post.findByIdAndDelete(id)
//     return res.json(post)
//   } catch (error) {
//     res.status(500).json(error)
//   }
// }
