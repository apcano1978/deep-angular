
export interface User {
  id: number;
  name: string;
  email: string;
  address: Address;
  phone: string;
  picture: string;
  age: number;
}

interface Address {
  street: string;
  number: string;
  city: string;
  state: string;
  zip: string;
}
