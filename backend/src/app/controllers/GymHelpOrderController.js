import HelpOrder from '../models/HelpOrder';
import * as yup from 'yup';

class GymHelpOrderController {
  async index(req, res) {
    const helpOrders = await HelpOrder.findAll({
      where: {
        answer_at: null,
      },
    });

    return res.status(200).json(helpOrders);
  }

  async show(req, res) {
    const { id } = req.params;

    const helpOrders = await HelpOrder.findAll({
      where: {
        student_id: id,
      },
      order: [['created_at', 'DESC']],
    });

    if (helpOrders.length === 0) {
      return res
        .status(400)
        .json({ error: 'Nenhum pedido de auxílio encontrado' });
    }

    return res.status(200).json(helpOrders);
  }

  async store(req, res) {
    const { id } = req.params;
    const { answer } = req.body;

    const schema = yup.object().shape({
      answer: yup.string().required('Resposta é obrigatório'),
    });

    if (!schema.isValid(req.body)) {
      return res
        .status(400)
        .json({ error: 'Validação falhou, verifique seus dados' });
    }

    const helpOrder = await HelpOrder.findByPk(id);

    if (!helpOrder) {
      return res
        .status(400)
        .json({ error: 'Pedido de auxílio não encontrado' });
    }

    if (helpOrder.answer) {
      return res
        .status(400)
        .json({ error: 'Pedido de auxílio já respondido.' });
    }

    helpOrder.answer = answer;
    helpOrder.answer_at = new Date();

    await helpOrder.save();

    const answeredHelpOrder = await HelpOrder.findByPk(id);

    // enviar email

    return res.status(200).json(answeredHelpOrder);
  }
}

export default new GymHelpOrderController();
