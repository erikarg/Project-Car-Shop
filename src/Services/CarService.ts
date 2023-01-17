import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/CarModel';

class CarService {
  public async registration(car: ICar) {
    const model = new CarModel();
    const newCar = await model.create(car);
    return new Car(newCar);
  }

  public async getAll() {
    const model = new CarModel();
    const search = await model.find();
    const allCars = search.map((car) => new Car(car));
    return allCars;
  }

  public async getById(id: string) {
    const model = new CarModel();
    const search = await model.findById(id);
    const [foundCar] = search.map((car) => new Car(car)).filter((car) => id === car.id); 
    return foundCar;
  }
}

export default CarService;