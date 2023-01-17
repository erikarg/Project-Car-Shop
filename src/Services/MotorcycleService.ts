import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleModel from '../Models/MotorcycleModel';

class MotorcycleService {
  private model = new MotorcycleModel();

  public async registration(motorcycle: IMotorcycle) {
    const newMotorcycle = await this.model.create(motorcycle);
    return new Motorcycle(newMotorcycle);
  }
}

export default MotorcycleService;