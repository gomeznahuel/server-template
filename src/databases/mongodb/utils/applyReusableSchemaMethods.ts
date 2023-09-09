import { Schema } from "mongoose";

export const applyReusableSchemaMethods = (
  schema: Schema,
  fields: string[] = []
) => {
  schema.methods.toJSON = function () {
    const { __v, ...object } = this.toObject();
    fields.forEach((field) => delete object[field]);
    return object;
  };
};
