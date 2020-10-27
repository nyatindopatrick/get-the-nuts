import Phaser from 'phaser';
import SetUserName from '../script';
import EndPoints from '../config/leaderboard';

export default class PlayerInputScene extends Phaser.Scene {
  constructor() {
    super('PlayerInput');
  }

  async create() {
    const latestUser = new SetUserName().getUserData();
    if (latestUser) {
      const inputUsername = latestUser.name;
      if (inputUsername !== '') {
        const loading = this.add.text(350, 250, 'Loading...', {
          color: 'white',
          fontFamily: 'Arial',
          fontSize: '24px ',
        });
        const newScore = await new EndPoints().postScore(
          inputUsername,
          latestUser.score[latestUser.score.length - 1],
        );
        if (newScore) {
          loading.destroy();
          this.scene.start('endGame');
        }
      } else {
        this.add.text(350, 250, 'Sorry Unable to set user');
      }
    }
  }
}
