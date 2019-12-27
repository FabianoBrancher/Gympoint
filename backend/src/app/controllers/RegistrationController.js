import Registration from '../models/Registration';
import * as yup from 'yup';
import { addMonths, parseISO, isBefore } from 'date-fns';
import Plan from '../models/Plan';
import Student from '../models/Student';

class RegistrationController {
  async index(req, res) {
    const query = {};
    const page = req.query.page || 1;

    const registrations = await Registration.findAll({
      attributes: ['id', 'start_date', 'end_date', 'price', 'active'],
      limit: 10,
      offset: 10 * page - 10,
    });

    return res.status(200).json(registrations);
  }

  async store(req, res) {
    const schema = yup.object().shape({
      student_id: yup.number().required(),
      plan_id: yup.number().required(),
      start_date: yup.date().required('Data de início é obrigatório'),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Validação falhou, verifique seus dados' });
    }

    const { plan_id, student_id, start_date } = req.body;

    const plan = await Plan.findByPk(plan_id);

    if (!plan) {
      return res.status(400).json({ error: 'Plano não existe' });
    }

    const student = await Student.findByPk(student_id);

    if (!student) {
      return res.status(400).json({ error: 'Estudante não existe' });
    }

    const past = isBefore(parseISO(start_date), new Date());

    if (past) {
      return res
        .status(400)
        .json({ error: 'A data de início não pode ser no passado.' });
    }

    const alreadyRegistered = await Registration.findOne({
      where: {
        student_id,
        plan_id,
      },
    });

    if (alreadyRegistered) {
      return res
        .status(400)
        .json({ error: 'Aluno já matriculado neste plano' });
    }

    const data = {
      student_id,
      plan_id,
      start_date,
      end_date: addMonths(parseISO(start_date), plan.duration),
      price: plan.price * plan.duration,
    };

    const registration = await Registration.create(data);

    // enviar email ao cliente

    return res.status(200).json(registration);
  }

  async update(req, res) {
    const schema = yup.object().shape({
      student_id: yup.number().required(),
      plan_id: yup.number().required(),
      start_date: yup.date().required('Data de início é obrigatório'),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Validação falhou, verifique seus dados' });
    }

    const { id } = req.params;
    const { plan_id, student_id, start_date } = req.body;

    const plan = await Plan.findByPk(plan_id);

    if (!plan) {
      return res.status(400).json({ error: 'Plano não existe' });
    }

    const student = await Student.findByPk(student_id);

    if (!student) {
      return res.status(400).json({ error: 'Estudante não existe' });
    }

    const past = isBefore(parseISO(start_date), new Date());

    if (past) {
      return res
        .status(400)
        .json({ error: 'A data de início não pode ser no passado.' });
    }

    const data = {
      student_id,
      plan_id,
      start_date,
      end_date: addMonths(parseISO(start_date), plan.duration),
      price: plan.price * plan.duration,
    };

    const registration = await Registration.update(data, { where: { id } });

    // enviar email ao cliente

    return res.status(200).json(registration);
  }

  async destroy(req, res) {
    const { id } = req.params;

    const registrationExists = await RegistrationfindByPk(id);

    if (!registrationExists) {
      return res.status(400).json({ error: 'Matrícula não existe' });
    }
    await Registration.destroy({ where: { id } });

    return res.status(200).json({ success: 'Matrícula excluída com sucesso!' });
  }
}

export default new RegistrationController();
