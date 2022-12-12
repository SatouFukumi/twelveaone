export default class Procedure<TProcedure extends (...args: any[]) => any> {
  public call: TProcedure
  constructor(procedure: TProcedure) {
    this.call = procedure
  }
}
