import Checkin from '../models/Checkin';
import Registration from '../models/Registration';
import { Op } from 'sequelize';
import { subDays, parseISO, endOfDay, startOfDay } from 'date-fns';

class CheckinController {
  async index(req, res) {
    const { id } = req.params;
    const where = {};

    const today = new Date();

    where.created_at = {
      [Op.between]: [subDays(startOfDay(today), 7), endOfDay(today)],
    };

    where.student_id = id;

    const checkinsCount = await Checkin.findAndCountAll({
      where,
      attributes: ['id', 'student_id', 'created_at'],
      order: [['created_at', 'DESC']],
    });

    res.status(200).json(checkinsCount);
  }

  async store(req, res) {
    const { id } = req.params;
    const today = new Date();

    const where = {};

    where.student_id = id;
    where.created_at = {
      [Op.between]: [subDays(startOfDay(today), 7), endOfDay(today)],
    };

    const student = await Registration.findOne({ where: { student_id: id } });

    if (!student.active) {
      return res.status(400).json({
        error: 'Não foi possível fazer checkin. Matrícula não está ativa',
      });
    }

    const checkins = await Checkin.findAndCountAll({
      where,
      attributes: ['id', 'student_id', 'created_at'],
      order: [['created_at', 'DESC']],
    });

    if (checkins.count > 4) {
      return res
        .status(400)
        .json({ error: 'Você já fez 5 checkins esta semana' });
    }

    const checkin = await Checkin.create({ student_id: id });

    res.status(200).json(checkin);
  }
}

export default new CheckinController();
