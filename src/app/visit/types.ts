import { User } from 'app/auth/types';

export type Visit = {
  id: string;
  date: firebase.firestore.Timestamp;
  user: User;
};
