import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import Motorcycle from '../../../src/Domains/Motorcycle';

describe('Testa todas as funcionalidades do MotorcycleService', function () {
  const service = new MotorcycleService();
  const motoModel = 'Honda Cb 600f Hornet';

  it('Deve registrar uma nova moto com sucesso', async function () {
    const input: IMotorcycle = {
      model: motoModel,
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    const output: IMotorcycle = {
      id: '63c71bde32adda03846fec45',
      model: motoModel,
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30,
      category: 'Street',
      engineCapacity: 600,
    };
    sinon.stub(Model, 'create').resolves(output);

    const result = await service.registration(input);

    expect(result).to.be.deep.equal(output);
  });

  it('Deve recuperar todas as motos cadastradas no banco de dados', async function () {
    const output = [
      {
        id: '634852326b35b59438fbea2f',
        model: motoModel,
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30.000,
        category: 'Street',
        engineCapacity: 600,
      },
      {
        id: '634852326b35b59438fbea31',
        model: 'Honda Cbr 1000rr',
        year: 2011,
        color: 'Orange',
        status: true,
        buyValue: 59.900,
        category: 'Street',
        engineCapacity: 1000,
      },
    ];
    const motorcycleMap = output.map((motorcycle) => new Motorcycle(motorcycle));
    sinon.stub(Model, 'find').resolves(output);
    const result = await service.getAll();
    expect(result).to.be.deep.equal(motorcycleMap);
  });

  it('Deve recuperar a moto através do id fornecido', async function () {
    const output = {
      id: '634852326b35b59438fbea31',
      model: 'Honda Cbr 1000rr',
      year: 2011,
      color: 'Orange',
      status: true,
      buyValue: 59.900,
      category: 'Street',
      engineCapacity: 1000,
    };
    sinon.stub(Model, 'find').resolves([output]);

    const result = await service.getById(output.id);
    expect(result).to.be.deep.equal(output);
  });

  afterEach(function () {
    sinon.restore();
  });
});