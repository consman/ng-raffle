export class RaffleCompletedWrapper{

  private raffleCompleted: boolean = false;

  constructor() {
  }

  public getRaffleCompleted(): boolean {
    return this.raffleCompleted;
  }

  public setRaffleCompleted(value: boolean) {
    this.raffleCompleted = value;
  }


}
