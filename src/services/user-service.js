import userModel from "../models/user-model.js";

class UserService {
  async getUsers() {
    return await userModel.find();
  }

  async getUser(id) {
    return await userModel.findById(id);
  }

  async addUser(newUser) {
    return await userModel.create(newUser);
  }

  async updateUser(id, body) {
    return await userModel.findByIdAndUpdate(id, body, { new: true });
  }

  async deleteUser(_id) {
    return await userModel.findOneAndDelete({ _id });
  }
}

export default new UserService();
