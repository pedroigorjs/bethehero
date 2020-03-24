import connection from '../../database/connection';

class ProfileController {
  async index(req, res) {
    const ngo_id = req.headers.authorization;

    const incidents = await connection('incidents')
      .where('ngo_id', ngo_id)
      .select('*');

    return res.json(incidents);
  }
}

export default new ProfileController();
