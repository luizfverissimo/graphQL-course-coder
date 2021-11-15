const users = [
  {
    id: 1,
    name: 'Nils Feeney',
    email: 'John_Marvin@gmail.com',
    age: 43,
    profile_id: 1,
    status: 'INACTIVE'
  },
  {
    id: 2,
    name: 'Estefania Reichert',
    email: 'Erika_Kunze83@gmail.com',
    age: 54,
    profile_id: 1,
    status: 'ACTIVE'
  },
  {
    id: 3,
    name: 'Lyric Grady',
    email: 'Amanda_Mitchell58@hotmail.com',
    age: 24,
    profile_id: 2,
    status: 'BLOCKED'
  }
];

const profiles = [
  {
    id: 2,
    name: 'Administrator'
  },
  {
    id: 1,
    name: 'User'
  }
];

module.exports = { users, profiles };
