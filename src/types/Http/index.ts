export interface IRes<T extends any> {
  success: true;
  content: T;
  error?: string;
}
