import baseEndpoint from '../endpoints/baseEndpoint';
import { HttpMethod } from '../enums/httpMethods';
import requestor from '../requestor/requestor';

function getComments() {
  const response = requestor.execute({
    url: `${baseEndpoint}/comments`,
    method: HttpMethod.GET,
  });
  return response;
}

function getCommentsById(id?: string) {
  const response = requestor.execute({
    url: `${baseEndpoint}/posts/${id}/comments`,
    method: HttpMethod.GET,
  });
  return response;
}

export { getComments, getCommentsById };
