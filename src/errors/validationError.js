import BaseError from './BaseError.js';

export default class ValidationError extends BaseError {
  constructor(mongooseError) {
    super('Validation failed', 400);
    const errors = Object.entries(mongooseError.errors).map(([key, value]) => ({
      message: value.message,
      field: value.path,
      value: value.value,
    }));
    this.errors = errors;
  }
}
