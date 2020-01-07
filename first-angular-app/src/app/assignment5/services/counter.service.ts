

export class CounterService {
  activeInactiveCounter: number = 0;
  inactiveActiveCounter: number = 0;

  userWentInactive() {
    this.activeInactiveCounter++;
  }

  userWentActive() {
    this.inactiveActiveCounter++;
  }
}
