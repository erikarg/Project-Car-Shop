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

  public async updateMotorcycle(id: string, body: IMotorcycle) {
    const updatedInfo = await this.model.update(id, body);
    if (updatedInfo !== null) return new Motorcycle(updatedInfo);
  }

  public async deleteById(id: string) {
    await this.model.delete(id);
  }
}

export default MotorcycleService;