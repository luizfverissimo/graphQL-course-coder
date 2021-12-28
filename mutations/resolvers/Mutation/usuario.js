const { usuarios, proximoId } = require('../../data/db');

function indiceUsuario(filtro) {
  if (!filtro) return -1;
  const { id, email } = filtro;
  if (id) return usuarios.findIndex((u) => u.id === id);
  if (email) return usuarios.findIndex((u) => u.email === email);
  return -1
}

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
  excluirUsuario(_, { filtro }) {
    const index = indiceUsuario(filtro);

    if (index < 0) {
      throw new Error('Usuário não encontrado');
    }

    const excluídos = usuarios.splice(index, 1);
    return excluídos ? excluídos[0] : null;
  },
  alterarUsuario(_, { filtro, dados }) {
    const i = indiceUsuario(filtro)

    if (i < 0) {
      throw new Error('Usuário não encontrado');
    }

    const usuario = {
      ...usuarios[i],
      ...dados
    };

    usuarios.splice(i, 1, usuario);

    return usuario;
  }
};
