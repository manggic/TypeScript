type User = {
  name: string;
  email: string;
  isActive: boolean;
};

type MyString = string;

function createUser(user: User): User {
  return { name: "n", email: "e", isActive: false };
}

createUser({ name: "", email: "", isActive: true });

export {};
