import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

const mongoMessage = 'Invalid mongo id';
const carMessage = 'Car not found';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;
  
  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try {
      const newCar = await this.service.registration(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAll() {
    const listOfCars = await this.service.getAll();
    return this.res.status(200).json(listOfCars);
  }

  public async findById() {
    const { id } = this.req.params;
    if (!isValidObjectId(id)) return this.res.status(422).json({ message: mongoMessage });

    const selectedCar = await this.service.getById(id);
    if (!selectedCar) return this.res.status(404).json({ message: carMessage });

    return this.res.status(200).json(selectedCar);
  }

  public async update() {
    const { id } = this.req.params;
    if (!isValidObjectId(id)) return this.res.status(422).json({ message: mongoMessage });

    const selectedCar = await this.service.updateCar(id, this.req.body);
    if (!selectedCar) return this.res.status(404).json({ message: carMessage });

    return this.res.status(200).json(selectedCar);
  }

  public async delete() {
    const { id } = this.req.params;
    if (!isValidObjectId(id)) return this.res.status(422).json({ message: mongoMessage });
    
    const selectedCar = await this.service.getById(id);
    if (!selectedCar) return this.res.status(404).json({ message: carMessage });

    await this.service.deleteById(id);
    return this.res.status(204).json();
  }
}

export default CarController;