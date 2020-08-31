import preloadGame from "./scene";
import * as gamePlay from "./game";
let game;

let gameConfig = {
  type: Phaser.AUTO,
  width: 1334,
  height: 750,
  scene: [preloadGame, gamePlay.playGame],
  backgroundColor: 0x0c88c7,

  // physics settings
  physics: {
    default: "arcade",
  },
};
game = new Phaser.Game(gameConfig);
export default game;
