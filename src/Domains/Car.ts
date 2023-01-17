import ICar from '../Interfaces/ICar';
import Automobile from './Automobile';

class Car extends Automobile {
  private doorsQty: number;
  private seatsQty: number;

  constructor(attributes: ICar) {
    super(
      attributes.id,
      attributes.model,
      attributes.year,
      attributes.color,
      attributes.status,
      attributes.buyValue,
    );
    this.doorsQty = attributes.doorsQty;
    this.seatsQty = attributes.seatsQty;
  }

  public setDoorsQty(doorsQty: number) {
    this.doorsQty = doorsQty;
  }

  public getDoorsQty() {
    return this.doorsQty;
  }

  public setSeatsQty(seatsQty: number) {
    this.seatsQty = seatsQty;
  }

  public getseatsQty() {
    return this.seatsQty;
  }
}

export default Car;