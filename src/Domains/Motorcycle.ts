import IMotorcycle from '../Interfaces/IMotorcycle';
import Automobile from './Vehicle';

class Motorcycle extends Automobile {
  private category: string;
  private engineCapacity: number;

  constructor(attributes: IMotorcycle) {
    super(
      attributes.id,
      attributes.model,
      attributes.year,
      attributes.color,
      attributes.status,
      attributes.buyValue,
    );
    this.category = attributes.category;
    this.engineCapacity = attributes.engineCapacity;
  }

  public setcategory(category: string) {
    this.category = category;
  }

  public getcategory() {
    return this.category;
  }

  public setEngineCapacity(engineCapacity: number) {
    this.engineCapacity = engineCapacity;
  }

  public getEngineCapacity() {
    return this.engineCapacity;
  }
}

export default Motorcycle;