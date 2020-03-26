const connection = require('../database/connection');

module.exports = {
  async store(req, res) {
    const { id } = req.body;

    const ong = await connection('ongs')
      .where('id', id)
      .select('name')
      .first()

    if(!ong) {
      return res.status(401).json({error: 'Ong does not exist.'})
    }

    return res.json(ong);
  }
}