import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const newMotorcycle = await this.service.registration(motorcycle);
      return this.res.status(201).json(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAll() {
    const listOfMotorcycles = await this.service.getAll();
    return this.res.status(200).json(listOfMotorcycles);
  }

  public async findById() {
    const { id } = this.req.params;
    if (!isValidObjectId(id)) return this.res.status(422).json({ message: 'Invalid mongo id' });

    const selectedMotorcycle = await this.service.getById(id);
    if (!selectedMotorcycle) return this.res.status(404).json({ message: 'Motorcycle not found' });

    return this.res.status(200).json(selectedMotorcycle);
  }

  public async update() {
    const { id } = this.req.params;
    if (!isValidObjectId(id)) return this.res.status(422).json({ message: 'Invalid mongo id' });

    const selectedMotorcycle = await this.service.updateMotorcycle(id, this.req.body);
    if (!selectedMotorcycle) return this.res.status(404).json({ message: 'Motorcycle not found' });

    return this.res.status(200).json(selectedMotorcycle);
  }
}

export default MotorcycleController;