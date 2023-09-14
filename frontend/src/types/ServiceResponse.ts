type SuccessServiceResponse<T> = {
  success: true,
  data: T,
  status: number;
  message: null,
};

type ErrorServiceResponse = {
  success: false;
  data: null;
  status: number;
  message: string;
};

export type ServiceResponse<T> = Promise<SuccessServiceResponse<T> | ErrorServiceResponse>;
