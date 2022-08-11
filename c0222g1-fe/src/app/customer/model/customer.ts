import {Commune} from './commune';

export interface Customer {
  id: number;
  name: string;
  phoneNumber: string;
  dateOfBirth: string;
  email: string;
  activeStatus: number;
  deleteStatus: number;
  remainingTime: number;
  user: {
    userName: string;
    password: string;
  };
  commune: Commune;
}
