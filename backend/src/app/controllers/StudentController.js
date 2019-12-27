import * as yup from 'yup';
import Student from '../models/Student';

class StudentController {
  async update(req, res) {
    const schema = yup.object().shape({
      name: yup.string().required('Nome é obrigatório'),
      email: yup
        .string()
        .email()
        .required('Email é obrigatório'),
      age: yup
        .number()
        .integer()
        .positive(),
      weight: yup.number().positive(),
      height: yup.number().positive(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Validação falhou, cheque seus dados' });
    }

    const { email } = req.body;
    const { id } = req.params;

    const student = await Student.findByPk(id);

    if (!student) {
      return res.status(400).json({ error: 'Estudante não existe' });
    }

    if (email && email !== student.email) {
      const studentExists = await Student.findOne({ where: { email } });

      if (studentExists) {
        return res
          .status(400)
          .json({ error: 'Estudante com este email já existe ' });
      }
    }

    await student.update(req.body);

    return res.status(200).json(student);
  }

  async store(req, res) {
    const schema = yup.object().shape({
      name: yup.string().required('Nome é obrigatório'),
      email: yup
        .string()
        .email()
        .required('Email é obrigatório'),
      age: yup
        .number()
        .integer()
        .positive(),
      weight: yup.number().positive(),
      height: yup.number().positive(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Validação falhou, cheque seus dados' });
    }

    const { email } = req.body;

    const studentExists = await Student.findOne({ where: { email } });

    if (studentExists) {
      return res
        .status(400)
        .json({ error: 'Estudante com este email já existe ' });
    }

    const student = await Student.create(req.body);

    return res.status(200).json(student);
  }
}

export default new StudentController();
