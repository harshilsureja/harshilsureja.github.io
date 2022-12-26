import { IYear } from './year';

export interface IJob {
  name: string;
  position: string;
  description: string;
  duration: string;
  year: IYear;
}
