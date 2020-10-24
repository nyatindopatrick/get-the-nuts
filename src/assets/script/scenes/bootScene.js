/* eslint-disable import/no-cycle */
import Phaser from 'phaser';
import config from '../config/config';

class BootScene extends Phaser.Scene {
  constructor() {
    super('bootGame');
  }

  preload() {
    this.load.image('cover', '../src/assets/img/logo.png');
  }

  create() {
    const style = {
      font: 'bold 4rem Verdana',
      fill: '#fcba03',
      boundsAlignH: 'center',
      boundsAlignV: 'middle',
    };

    this.add.image(config.width / 2, config.height / 2, 'cover');

    this.title = this.add.text(
      config.width / 4,
      config.width / 4,
      'GET THE NUTS',
      style,
    );

    this.title.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

    setTimeout(() => {
      this.scene.start('playGame');
    }, 3000);
  }
}
export default BootScene;
