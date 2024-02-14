/* ••[1]••••••••••••••••••••••••• user.type.ts •••••••••••••••••••••••••••••• */

/* cSpell:disable */

export type UserT = {
  address: {
    city: string;
    geo: {
      lat: string;
      lng: string;
    };
    street: string;
    suite: string;
    zipcode: string;
  };
  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  };
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
};

export type UserIdT = Pick<UserT, 'name' | 'email'>;
