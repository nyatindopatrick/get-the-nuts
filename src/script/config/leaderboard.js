/* eslint-disable class-methods-use-this */
import 'regenerator-runtime';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/cUOcV3ILszhJe35VmajQ/scores';

export default class Endpoints {
  async postScore(user, score) {
    const body = JSON.stringify({ user, score });
    const data = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body,
    };
    const response = await fetch(url, data);
    const result = await response.json();
    return result;
  }

  async getScores() {
    const data = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(url, data);
    const scores = await response.json();
    return scores.result;
  }
}
