import { Schema, Model, models, model, UpdateQuery } from 'mongoose';

abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(object: T): Promise<T> {
    return this.model.create({ ...object });
  }

  public async update(_id: string, obj: Partial<T>): Promise<T | null> {
    return this.model.findByIdAndUpdate({ _id }, { ...obj } as UpdateQuery<T>, { new: true });
  }
}

export default AbstractODM;
