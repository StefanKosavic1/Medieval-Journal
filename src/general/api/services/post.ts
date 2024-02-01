import baseEndpoint from '../endpoints/baseEndpoint';
import { HttpMethod } from '../enums/httpMethods';
import requestor from '../requestor/requestor';

function getPosts(): Promise<Response> {
  const response = requestor.execute({
    url: `${baseEndpoint}/posts`,
    method: HttpMethod.GET,
  });
  return response;
}

function getPostById(id?: string) {
  const response = requestor.execute({
    url: `${baseEndpoint}/posts/${id}`,
    method: HttpMethod.GET,
  });
  return response;
}
export { getPosts, getPostById };
