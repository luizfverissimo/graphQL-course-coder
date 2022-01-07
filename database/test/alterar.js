const db = require('../config/db');

const novoUsuario = {
  nome: 'Pedro Garcia',
  email: 'pedro2@empresa2.com.br',
  senha: '12345678'
};

async function exercicio() {
  //count
  const { qtde } = await db('usuarios').count('* as qtde').first();

  //inserir (se a tabela estiver vazia)
  if (qtde === 0) {
    await db('usuarios').insert(novoUsuario);
  }

  //alteração
  await db('usuarios').where({ id: 1 }).update(novoUsuario);

  return await db('usuarios').where({ id: 1 });
}

exercicio()
  .then((usuario) => console.log(usuario))
  .finally(() => db.destroy());
