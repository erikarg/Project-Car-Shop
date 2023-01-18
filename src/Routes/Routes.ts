import { Router } from 'express';
import CarController from '../Controllers/CarController';
import MotorcycleController from '../Controllers/MotorcycleController';

const route = Router();

const cars = '/cars';
const carsId = '/cars/:id';
const motorcycles = '/motorcycles';
const motorcyclesId = '/motorcycles/:id';

route.post(
  cars,
  (req, res, next) => new CarController(req, res, next).create(),
);

route.get(
  cars,
  (req, res, next) => new CarController(req, res, next).findAll(),
);

route.get(
  carsId,
  (req, res, next) => new CarController(req, res, next).findById(),
);

route.put(
  carsId,
  (req, res, next) => new CarController(req, res, next).update(),
);

route.delete(
  carsId,
  (req, res, next) => new CarController(req, res, next).delete(),
);

route.post(
  motorcycles,
  (req, res, next) => new MotorcycleController(req, res, next).create(),
);

route.get(
  motorcycles,
  (req, res, next) => new MotorcycleController(req, res, next).findAll(),
);

route.get(
  motorcyclesId,
  (req, res, next) => new MotorcycleController(req, res, next).findById(),
);

route.put(
  motorcyclesId,
  (req, res, next) => new MotorcycleController(req, res, next).update(),
);

route.delete(
  motorcyclesId,
  (req, res, next) => new MotorcycleController(req, res, next).delete(),
);

export default route;