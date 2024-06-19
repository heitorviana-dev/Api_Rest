import { Aluno } from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Heitor',
      sobrenome: 'Viana',
      email: 'heitorsoaresviana@gmail.com',
      idade: 19,
      peso: 87.0,
      altura: 1.71,
    });
    res.status(200).json(novoAluno);
  }
}

export default new HomeController();
