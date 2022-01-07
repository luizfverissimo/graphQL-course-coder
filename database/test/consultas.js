const db = require('../config/db');

// db('perfis')
//   .then((res) => console.log(res))
//   .finally(() => db.destroy());

// db('perfis')
//   .then((res) => res.map(p => p.nome))
//   .then((nomes) => console.log(nomes))
//   .finally(() => db.destroy());

// db('perfis')
//   .select('nome', 'id')
//   .then((nomes) => console.log(nomes))
//   .finally(() => db.destroy());

// db.select('nome', 'id')
//   .from('perfis')
//   .then((nomes) => console.log(nomes))
//   .finally(() => db.destroy());

// db.select('nome', 'id')
//   .from('perfis')
//   .limit(4)
//   .offset(2)
//   .then((nomes) => console.log(nomes))
//   .finally(() => db.destroy());

// db('perfis')
//   // .where({ id: 1 })
//   // .where({ nome: 'visitante' })
//   // .where('nome', 'like', '%root%')
//   // .whereNot('id', '=', 2)
//   .then((res) => console.log(res))
//   .finally(() => db.destroy());
