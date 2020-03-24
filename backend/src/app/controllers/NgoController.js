import crypto from 'crypto';

import connection from '../../database/connection';

class NgoController {
  async index(req, res) {
    const ngos = await connection('ngos').select('*');

    return res.json(ngos);
  }

  async store(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    const id = crypto.randomBytes(8).toString('HEX');

    await connection('ngos').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return res.json({ id });
  }
}

export default new NgoController();
