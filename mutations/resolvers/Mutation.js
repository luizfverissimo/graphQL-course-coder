const { usuarios, proximoId } = require('../data/db');

module.exports = {
  novoUsuario(_, { dados }) {
    // { nome, email, idade } = args

    const emailExistente = usuarios.some(
      (usuario) => usuario.email === dados.email
    );

    if (emailExistente) {
      throw new Error('E-mail cadastrado.');
    }

    const novo = {
      id: proximoId(),
      ...dados,
      perfil_id: 1,
      status: 'ATIVO'
    };

    usuarios.push(novo);
    return novo;
  },
  excluirUsuario(_, { id }) {
    const index = usuarios.findIndex((u) => u.id === id);

    if (index < 0) {
      throw new Error('Usuário não encontrado');
    }

    const excluídos = usuarios.splice(index, 1);
    return excluídos ? excluídos[0] : null;
  },
  alterarUsuario(_, args) {
    const i = usuarios.findIndex((u) => u.id === args.id);

    if (i < 0) {
      throw new Error('Usuário não encontrado');
    }

    const usuario = {
      ...usuarios[i],
      ...args
    };

    usuarios.splice(i, 1, usuario);

    return usuario;
  }
};
