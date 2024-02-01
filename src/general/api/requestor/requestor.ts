import { HttpMethod } from '../enums/httpMethods';
import { RequestProps } from './requestor.d';
const DEFAULT_HEADERS = { 'Content-Type': 'application/json' };

class Requestor {
  execute<T extends BodyInit>(options: RequestProps<T>) {
    const { url, method, body, headers = DEFAULT_HEADERS } = options;
    try {
      const requestOptions: RequestInit = {
        method,
        headers,
        body,
      };

      switch (method) {
        case HttpMethod.GET:
          return this.get(url, headers);
        case HttpMethod.POST:
          return this.post(url, requestOptions);
        case HttpMethod.PUT:
          return this.put(url, requestOptions);
        case HttpMethod.PATCH:
          return this.patch(url, requestOptions);
        case HttpMethod.DELETE:
          return this.delete(url, headers);
        default:
          throw new Error('Invalid HTTP method');
      }
    } catch (error) {
      console.error('Request failed:', error);
      // Integrate with a logging service for error tracking.
      throw error;
    }
  }

  private async get(url: string, headers: HeadersInit) {
    return await fetch(url, {
      method: HttpMethod.GET,
      headers,
    });
  }

  private async post(url: string, requestOptions: RequestInit) {
    return await fetch(url, {
      ...requestOptions,
    });
  }

  private async put(url: string, requestOptions: RequestInit) {
    return await fetch(url, {
      ...requestOptions,
    });
  }

  private async patch(url: string, requestOptions: RequestInit) {
    return await fetch(url, {
      ...requestOptions,
    });
  }

  private async delete(url: string, headers: HeadersInit) {
    return await fetch(url, {
      method: HttpMethod.DELETE, 
      headers: headers, 
    });
  }
}

const requestor = new Requestor();

export default requestor;
