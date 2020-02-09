const Dev = require('../models/Dev')

module.exports = {
  async index(req, res) {
    const { user } = req.headers;

    const loggedDev = await Dev.findById(user);

    const matches = await Dev.find({
      $and: [
        { likes: { $in: loggedDev._id } },
        { _id: { $in: loggedDev.likes } }
      ]
    })

    return res.json(matches)
  }
}