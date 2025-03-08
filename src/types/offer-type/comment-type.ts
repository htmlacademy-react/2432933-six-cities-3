type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

type Comment = {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: User;
};

export type {Comment};
