class UserService {
  constructor() {
    this.users = [];
  }

  createUser(data) {
    const user = {
      id: this.users.length + 1,
      name: data.name,
      email: data.email
    };
    this.users.push(user);
    return user;
  }

  getUsers() {
    return this.users;
  }
}

module.exports = new UserService(); // Singleton
