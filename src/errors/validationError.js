import BaseError from './BaseError.js';

export default class ValidationError extends BaseError {
  constructor(mongooseError) {
    super(mongooseError.message, 400);
    this.jhg = 'Hello';
  }
}
