/* eslint-disable no-new */

import Phaser from 'phaser';
import EndPoints from '../config/leaderboard';
import Button from '../config/buttons';

export default class LeaderboardScene extends Phaser.Scene {
  constructor() {
    super('Leaderboard');
  }

  async create() {
    this.cameras.main.setBackgroundColor('#C45F14');
    const loading = this.add.text(250, 250, 'Loading...').setTint(0x85c329);
    new Button(this, 400, 550, 'menu', 'PreloadGame');

    const result = await new EndPoints().getScores();

    if (result) {
      loading.destroy();
      result.sort((a, b) => b.score - a.score);
      result.forEach((item, i) => this.add
        .text(
          100,
          50 * (i + 1),
          `${i + 1}.  ${item.user}   -  ${item.score}`,
        )
        .setTint(0x85c329));
    }
  }
}
