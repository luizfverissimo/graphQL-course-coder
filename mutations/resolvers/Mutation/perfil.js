const { perfis, proximoIdPerfil } = require('../../data/db');

function indiciePerfil(filtro) {
  if(!filtro) return -1
  const {id, nome} = filtro
  if(id) return perfis.findIndex(p => p.id === id)
  if(nome) return perfis.findIndex(p => p.nome === nome)
  return -1
}

module.exports = {
  novoPerfil(_, {dados}) {
    const {nome} = dados
    const nomeExistente = perfis.some(p => p.nome === nome)
    if(nomeExistente) throw new Error('O nome de perfil já existe.')

    const novoPerfil = {
      id: proximoIdPerfil(),
      nome
    }
    perfis.push(novoPerfil)
    return novoPerfil
  },
  excluirPerfil(_, {filtro}) {
    const i = indiciePerfil(filtro)
    
    if(i < 0) {
      throw new Error('Perfil não encontrado')
    }

    const excluidos = perfis.splice(i, 1)
    return excluidos ? excluidos[0] : null
  },
  alterarPerfil(_, {filtro, dados}) {
    const i = indiciePerfil(filtro)

    if(i < 0) {
      throw new Error('Perfil não encontrado')
    }

    const perfil = {
      ...perfis[i],
      ...dados
    }

    perfis.splice(i, 1, perfil)
    return perfil
  }
}