const { users, profiles } = require('../data/db');

module.exports = {
  hello() {
    return 'Olá Mundo!';
  },
  horaAtual() {
    return new Date();
  },
  userLogged() {
    return {
      id: 1,
      name: 'Luiz Fernando',
      email: 'luizfverissimo@gmail.com',
      age: 33,
      income_real: 1000.5,
      vip: true
    };
  },
  featuredProduct() {
    return {
      name: 'Tv 55 polegadas OLED',
      price: 3500.0,
      discount: 0.15
    };
  },
  numbersLottery() {
    const numbers = Array(6)
      .fill(0)
      .map(() => Math.ceil(Math.random() * 59));
    const numbersSorted = numbers.sort((a, b) => a - b);

    return numbersSorted;
  },
  users() {
    return users;
  },
  user(_, { id }) {
    const userSelected = users.filter((user) => user.id === id);
    return userSelected ? userSelected[0] : null;
  },
  profiles() {
    return profiles;
  },
  profile(_, { id }) {
    const profileSelected = profiles.filter((profile) => profile.id === id);
    return profileSelected ? profileSelected[0] : null;
  }
};
