import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/CarModel';

class CarService {
  public async registration(car: ICar) {
    const model = new CarModel();
    const newCar = await model.create(car);
    return new Car(newCar);
  }
}

export default CarService;