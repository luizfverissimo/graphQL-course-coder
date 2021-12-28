let id = 1
let idPerfil = 1

function proximoId() {
  return id++
}

function proximoIdPerfil() {
    return idPerfil++
}

const perfis = [
    { id: proximoIdPerfil(), nome: 'comum' },
    { id: proximoIdPerfil(), nome: 'administrador' }
]

const usuarios = [{
    id: proximoId(),
    nome: 'João Silva',
    email: 'jsilva@zemail.com',
    idade: 29,
    perfil_id: 1,
    status: 'ATIVO'
}, {
    id: proximoId(),
    nome: 'Rafael Junior',
    email: 'rafajun@wemail.com',
    idade: 31,
    perfil_id: 2,
    status: 'INATIVO'
}, {
    id: proximoId(),
    nome: 'Daniela Smith',
    email: 'danismi@umail.com',
    idade: 24,
    perfil_id: 1,
    status: 'BLOQUEADO'
}]

module.exports = { usuarios, perfis, proximoId, proximoIdPerfil }