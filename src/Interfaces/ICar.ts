import IAutomobile from './IAutomobile';

interface ICar extends IAutomobile {
  doorsQty: number,
  seatsQty: number,
}

export default ICar;