/* eslint-disable no-unused-vars */
/* eslint-disable  import/no-cycle */

import Phaser from 'phaser';
import SetUserData from '../script';
import config from '../config/config';
import Button from '../config/buttons';


class endingScene extends Phaser.Scene {
  constructor() {
    super('endGame');
  }


  create() {
    this.background = this.add.image(config.width / 2, config.height / 2, 'cover');
    const curUser = new SetUserData().getUserData();
    const style = {
      font: 'bold 2rem Arial', fill: 'yellow', boundsAlignH: 'center', boundsAlignV: 'middle',
    };

    this.add.text(300, 300, `You Scored ${curUser.score[curUser.score.length - 1]}`, style);
    const startButton = new Button(this, config.width / 2, config.height / 3, 'start_button', 'PreloadGame');
    const leaderboardButton = new Button(this, config.width / 2, config.height / 3 + config.height / 10, 'score_btn', 'Leaderboard');
  }
}
export default endingScene;