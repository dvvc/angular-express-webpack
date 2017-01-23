'use strict';

'use strict';

/**
 * Commonly used errors throught the API.
 * Internal errors have a Name, a Message and a Status
 */


function ValidationError(message, fields) {
  this.message = message;
  this.fields = fields;
  this.name = "ValidationError";
  this.status = 400;
  Error.captureStackTrace(this, ValidationError);
}
ValidationError.prototype = Object.create(Error.prototype);
ValidationError.prototype.constructor = ValidationError;

function BadRequestError(message, subtype) {
  this.message = message;
  this.subtype = subtype;
  this.name = "BadRequestError";
  this.status = 400;
  Error.captureStackTrace(this, BadRequestError);
}
BadRequestError.prototype = Object.create(Error.prototype);
BadRequestError.prototype.constructor = BadRequestError;


function ResourceNotFoundError(message, subtype) {
  this.message = message;
  this.subtype = subtype;
  this.name = "ResourceNotFoundError";
  this.status = 404;
  Error.captureStackTrace(this, ResourceNotFoundError);
}
ResourceNotFoundError.prototype = Object.create(Error.prototype);
ResourceNotFoundError.prototype.constructor = ResourceNotFoundError;

module.exports = {
  ValidationError: ValidationError,
  BadRequestError: BadRequestError,
  ResourceNotFoundError: ResourceNotFoundError,
};
