import HelpOrder from '../models/HelpOrder';
import * as yup from 'yup';
import Student from '../models/Student';

class StudentHelpOrderController {
  async store(req, res) {
    const { id } = req.params;
    const { question } = req.body;

    const schema = yup.object().shape({
      question: yup.string().required('Resposta é obrigatório'),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Validação falhou, verifique seus dados' });
    }

    const student = await Student.findByPk(id);

    if (!student) {
      return res.status(400).json({ error: 'Aluno não encontrado' });
    }

    const helpOrder = await HelpOrder.create({
      student_id: id,
      question,
    });

    return res.status(200).json(helpOrder);
  }
}

export default new StudentHelpOrderController();
