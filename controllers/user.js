const db = require('../models')
  
const create = async (req, res) => {
    try {
      const user = await db.User.create(req.body);
      return res.status(201).json({ user });
    } catch (error) {
      if (error) {
        console.info('400 error @ POST /user', error);
        return res.status(400).send(error.message);
      }
      console.error('500 error @ POST /user', error);
      return res.status(500).send('Something went wrong');
    }
  };
  
  module.exports = { create };