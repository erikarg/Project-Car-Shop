import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/CarModel';

class CarService {
  private model = new CarModel();

  public async registration(car: ICar) {
    const newCar = await this.model.create(car);
    return new Car(newCar);
  }

  public async getAll() {
    const search = await this.model.find();
    const allCars = search.map((car) => new Car(car));
    return allCars;
  }

  public async getById(id: string) {
    const search = await this.model.findById(id);
    const [foundCar] = search.map((car) => new Car(car)).filter((car) => id === car.id); 
    return foundCar;
  }

  public async updateCar(id: string, body: ICar) {
    const updatedInfo = await this.model.update(id, body);
    if (updatedInfo !== null) return new Car(updatedInfo);
  }

  public async deleteById(id: string) {
    await this.model.delete(id);
  }
}

export default CarService;