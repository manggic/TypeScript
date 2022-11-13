type User = {
  name: string;
  email: string;
  isActive: boolean;
};

// example of mongoDB user
type mongoUser = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credcardDetails?: number; // this is optional
};

type MyString = string;

function createUser(user: User): User {
  return { name: "n", email: "e", isActive: false };
}

createUser({ name: "", email: "", isActive: true });

let myUser: mongoUser = {
  _id: "1234",
  name: "m",
  email: "m.m",
  isActive: false,
};

// This is not allowed
// myUser._id = '12'

type cardNumber = {
  cardNo: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardDate &
  cardNumber & {
    cvv: number;
  };

export {};
