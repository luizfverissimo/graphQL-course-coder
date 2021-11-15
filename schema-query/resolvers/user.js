const { profiles } = require('../data/db');

module.exports = {
  income(user) {
    return user.income_real;
  },
  phrase(user) {
    return `Hello! My name is ${user.name}, I'm ${user.age} years old.`;
  },
  profile(user) {
    const profileSelected = profiles.filter(
      (profile) => profile.id === user.profile_id
    );
    return profileSelected ? profileSelected[0] : null;
  }
};
