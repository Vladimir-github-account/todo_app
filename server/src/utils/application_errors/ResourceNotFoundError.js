import ApplicationError from './ApplicationError.js';

class ResourceNotFoundError extends ApplicationError {
  constructor (resourceName) {
    super( `Resouce ${
      resourceName
      ? `"${resourceName}"`
      : ''
    } not found.`, 404 );
  }
}

export default ResourceNotFoundError;