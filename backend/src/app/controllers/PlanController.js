import * as yup from 'yup';
import Plan from '../models/Plan';

class PlanController {
  async index(req, res) {
    const page = req.query.page || 1;

    const plans = await Plan.findAll({
      order: [['created_at', 'DESC']],
      limit: 10,
      offset: 10 * page - 10,
    });

    return res.status(200).json(plans);
  }

  async store(req, res) {
    const schema = yup.object().shape({
      title: yup.string().required('Nome do plano é obrigatório'),
      duration: yup
        .number()
        .integer()
        .positive()
        .required('Duração do plano é obrigatório'),
      price: yup.number(10, 2).required('Preço do plano é obrigatório'),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Validação falhou, cheque seus dados' });
    }

    const { title } = req.body;

    const planExists = await Plan.findOne({ where: { title } });

    if (planExists) {
      return res.status(400).json({ error: 'Plano com este nome já existe' });
    }

    const plan = await Plan.create(req.body);

    return res.status(200).json(plan);
  }

  async update(req, res) {
    const schema = yup.object().shape({
      title: yup.string(),
      duration: yup
        .number()
        .integer()
        .positive(),
      price: yup.number(10, 2),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Validação falhou, cheque seus dados' });
    }

    const { id } = req.params;

    const planExists = await Plan.findByPk(id);

    if (!planExists) {
      return res.status(400).json({ error: 'Plano não existe' });
    }

    await planExists.update(req.body, { where: { id } });

    return res.status(200).json(planExists);
  }

  async destroy(req, res) {
    const { id } = req.params;

    const planExists = await Plan.findByPk(id);

    if (!planExists) {
      return res.status(400).json({ error: 'Plano não existe' });
    }
    await Plan.destroy({ where: { id } });

    return res.status(200).json({ success: 'Plano excluído com sucesso!' });
  }
}

export default new PlanController();
