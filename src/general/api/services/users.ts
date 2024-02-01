import baseEndpoint from '../endpoints/baseEndpoint';
import { HttpMethod } from '../enums/httpMethods';
import requestor from '../requestor/requestor';

function getUsers(): Promise<Response> {
  const response = requestor.execute({
    url: `${baseEndpoint}/users`,
    method: HttpMethod.GET,
  });
  return response;
}

export { getUsers };
