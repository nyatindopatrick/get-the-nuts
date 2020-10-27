/* eslint-disable import/no-cycle */

import Phaser from 'phaser';
import config from '../config/config';

import '../main.css';

class GameScene extends Phaser.Scene {
  constructor() {
    super('playGame');
  }

  preload() {
    this.load.image('start_button', '/assets/img/buttons/start.png');
    this.load.image('score_btn', '/assets/img/buttons/score.png');
    this.load.image('menu', '/assets/img/buttons/exit.png');

    this.load.image('platform', '/assets/img/platform.png');
    this.load.image('background', '/assets/img/mountain.png');

    this.load.audio('play_music', ['/assets/audio/background.mp3']);

    // player is a sprite sheet made by 24x48 pixels
    this.load.spritesheet('player', '/assets/img/player.png', {
      frameWidth: 24,
      frameHeight: 48,
    });

    // the coin is a sprite sheet made by 20x20 pixels
    this.load.spritesheet('coin', '/assets/img/nut.png', {
      frameWidth: 20,
      frameHeight: 20,
    });

    // the firecamp is a sprite sheet made by 32x58 pixels
    this.load.spritesheet('fire', '/assets/img/fire.png', {
      frameWidth: 40,
      frameHeight: 70,
    });

    // mountains are a sprite sheet made by 512x512 pixels
    this.load.spritesheet('mountain', '/assets/img/trees.png', {
      frameWidth: 512,
      frameHeight: 512,
    });
    this.background = this.add.image(
      config.width / 2,
      config.height / 2,
      'cover',
    );
    this.starting = this.add.text(300, 300, 'Loading Game...', {
      font: '2rem Arial',
      fill: 'white',
    });

    this.musiConfig = {
      mute: false,
      loop: true,
      delay: 0,
    };

    this.load.on('complete', () => {
      this.starting.destroy();
    });
  }

  create() {
    this.anims.create({
      key: 'run',
      frames: this.anims.generateFrameNumbers('player', {
        start: 0,
        end: 1,
      }),
      frameRate: 8,
      repeat: -1,
    });

    // setting coin animation
    this.anims.create({
      key: 'rotate',
      frames: this.anims.generateFrameNumbers('coin', {
        start: 0,
        end: 5,
      }),
      frameRate: 15,
      yoyo: true,
      repeat: -1,
    });

    // setting fire animation
    this.anims.create({
      key: 'burn',
      frames: this.anims.generateFrameNumbers('fire', {
        start: 0,
        end: 4,
      }),
      frameRate: 15,
      repeat: -1,
    });
    this.player = this.physics.add.sprite(400, 100, 'player');
    this.player.anims.play('run');
    setTimeout(() => {
      this.player.anims.stop();
      this.scene.start('PreloadGame');
    }, 3000);
    const bgMusic = this.sound.add('play_music', { volume: 0.2 });
    bgMusic.play(this.musiConfig);
  }
}

export default GameScene;
