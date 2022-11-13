let score: number | string = 33;

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let newUser: User | Admin = {
  name: "h",
  id: 123,
};

newUser = { username: "man", id: 123 };

const DynaArray: (string | number)[] = [1, 2, "string"];

// only these 2 values are allowed in this seat
let seatAllotment : 'lower' | 'upper' | 'middle'


export {};
