/* eslint-disable class-methods-use-this */
const nameset = document.querySelector('.main');
const nameForm = document.querySelector('.username');

export default class SetUserName {
  constructor(user = '') {
    this.user = user;
  }

  User(name) {
    return {
      name,
      score: [],
    };
  }

  updateData(user) {
    localStorage.setItem('player', JSON.stringify(user));
  }

  getUserData() {
    let player;
    if (localStorage.length === 0) {
      nameset.classList.remove('d-none');
      nameForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const res = nameForm.username.value;

        if (res.length) {
          nameset.classList.add('d-none');
          player = this.User(res);
          this.updateData(player);
        } else {
          this.getUserData();
        }
      });
    } else {
      const perData = localStorage.getItem('player');
      player = JSON.parse(perData);
    }
    return player;
  }
}
