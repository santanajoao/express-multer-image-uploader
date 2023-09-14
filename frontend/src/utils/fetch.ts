import HttpError from "../errors/HttpError";
import { ServiceResponse } from "../types/ServiceResponse";

type APIErrorResponse= {
  message: string;
}

export const treatedFetch = async <T> (
  input: string, init?: RequestInit
): ServiceResponse<T> => {
  try {
    const response = await fetch(input, init);

    if (!response.ok) {  
      const data: APIErrorResponse = await response.json();
      throw new HttpError(response.status, data.message);
    }
  
    const data: T = await response.json();
    return { success: true, data, status: response.status , message: null };
  }
  catch (error) {
    let status = 500;
    let message = 'Desculpe. Um erro interno ocorreu';

    if (error instanceof HttpError) {
      status = error.status;
      message = error.message;
    }

    return { success: false, data: null, status, message };
  }
}