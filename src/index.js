/* eslint-disable  no-unused-vars */

import Phaser from 'phaser';
import config from './assets/script/config/config';
import SetUserName from './assets/script/script';

const userName = new SetUserName();

const user = userName.getUserData();
// reduce user score data to only 5
if (user) {
  if (user.score.length > 5) {
    user.score = user.score.sort((a, b) => b - a).slice(0, 5);
  }
  userName.updateData(user);

  const Game = new Phaser.Game(config);
} else {
  const Game = new Phaser.Game(config);
}
