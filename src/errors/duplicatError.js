import BaseError from './BaseError.js';

class DuplicatError extends BaseError {
  constructor(mongooseError) {
    console.log(mongooseError.keyValue);
    super('Already exists', 409);
    const errors = Object.entries(mongooseError.keyValue).map(([field, value]) => ({
      message: `${field} already exist`,
      field,
      value,
    }));
    this.errors = errors;
  }
}

export default DuplicatError;
