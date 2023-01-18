import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';
import Car from '../../../src/Domains/Car';

describe('Testa todas as funcionalidades do CarService', function () {
  const service = new CarService();
  it('Deve registrar um novo carro com sucesso', async function () {
    const input: ICar = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };
    const output: ICar = {
      id: '63c70797512bd8e8bcc95222',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    };
    sinon.stub(Model, 'create').resolves(output);

    const result = await service.registration(input);

    expect(result).to.be.deep.equal(output);
  });

  it('Deve recuperar todos os carros cadastrados no banco de dados', async function () {
    const output = [
      {
        id: '634852326b35b59438fbea2f',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.99,
        doorsQty: 4,
        seatsQty: 5,
      },
      {
        id: '634852326b35b59438fbea31',
        model: 'Tempra',
        year: 1995,
        color: 'Black',
        buyValue: 39,
        doorsQty: 2,
        seatsQty: 5,
      },
    ];
    const carMap = output.map((car) => new Car(car));
    sinon.stub(Model, 'find').resolves(output);
    const result = await service.getAll();
    expect(result).to.be.deep.equal(carMap);
  });

  it('Deve recuperar o carro através do id fornecido', async function () {
    const output = {
      id: '634852326b35b59438fbea2f',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    };
    sinon.stub(Model, 'find').resolves([output]);

    const result = await service.getById('634852326b35b59438fbea2f');
    expect(result).to.be.deep.equal(output);
  });

  it('Deve retornar erro devido ao ID no formato incorreto', async function () {
    const input = {
      model: 'Marea',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12.000,
      doorsQty: 2,
      seatsQty: 5,
    };

    const output = new Car({
      id: '634852326b35b59438fbea2f',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    });
    sinon.stub(Model, 'update').resolves();

    try {
      const result = await service.updateCar('aaaaaaaaabbbbbbbbbbcccccccc', input);
      expect(result).to.be.equal(output);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Invalid Mongo id');
    }
  });

  afterEach(function () {
    sinon.restore();
  });
});