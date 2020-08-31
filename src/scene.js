export default class preloadGame extends Phaser.Scene {
  constructor() {
    super("PreloadGame");
  }
  preload() {
    this.load.image("platform", "../assets/platform.png");

    // player is a sprite sheet made by 24x48 pixels
    this.load.spritesheet("player", "../assets/player.png", {
      frameWidth: 24,
      frameHeight: 48,
    });

    // the nut is a sprite sheet made by 20x20 pixels
    this.load.spritesheet("nut", "../assets/nut.png", {
      frameWidth: 20,
      frameHeight: 20,
    });

    // the firecamp is a sprite sheet made by 32x58 pixels
    this.load.spritesheet("fire", "../assets/fire.png", {
      frameWidth: 40,
      frameHeight: 70,
    });

    // mountains are a sprite sheet made by 512x512 pixels
    this.load.spritesheet("mountain", "../assets/mountain.png", {
      frameWidth: 512,
      frameHeight: 512,
    });
  }
  create() {
    // setting player animation
    this.anims.create({
      key: "run",
      frames: this.anims.generateFrameNumbers("player", {
        start: 0,
        end: 1,
      }),
      frameRate: 8,
      repeat: -1,
    });

    // setting nut animation
    this.anims.create({
      key: "rotate",
      frames: this.anims.generateFrameNumbers("nut", {
        start: 0,
        end: 5,
      }),
      frameRate: 15,
      yoyo: true,
      repeat: -1,
    });

    // setting fire animation
    this.anims.create({
      key: "burn",
      frames: this.anims.generateFrameNumbers("fire", {
        start: 0,
        end: 4,
      }),
      frameRate: 15,
      repeat: -1,
    });

    this.scene.start("PlayGame");
  }
}
