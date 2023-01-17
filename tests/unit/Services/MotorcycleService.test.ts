import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Testa todas as funcionalidades do MotorcycleService', function () {
  const service = new MotorcycleService();

  it('Deve registrar uma nova moto com sucesso', async function () {
    const input: IMotorcycle = {
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    const output: IMotorcycle = {
      id: '63c71bde32adda03846fec45',
      model: 'Honda Cb 600f Hornet',
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

  afterEach(function () {
    sinon.restore();
  });
});