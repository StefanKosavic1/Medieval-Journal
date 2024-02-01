import { HttpMethod } from "../enums/httpMethods";

export interface RequestProps<T extends BodyInit> {
  url: string;
  method: HttpMethod;
  body?: T;
  headers?: HeadersInit;
}
