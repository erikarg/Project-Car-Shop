import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleModel from '../Models/MotorcycleModel';

class MotorcycleService {
  private model = new MotorcycleModel();

  public async registration(motorcycle: IMotorcycle) {
    const newMotorcycle = await this.model.create(motorcycle);
    return new Motorcycle(newMotorcycle);
  }

  public async getAll() {
    const search = await this.model.find();
    const allMotorcycles = search.map((motorcycle) => new Motorcycle(motorcycle));
    return allMotorcycles;
  }

  public async getById(id: string) {
    const search = await this.model.findById(id);
    const [foundMotorcycle] = search
      .map((motorcycle) => new Motorcycle(motorcycle))
      .filter((motorcycle) => id === motorcycle.id); 
    return foundMotorcycle;
  }
}

export default MotorcycleService;