import userService from "../services/user-service.js";
import fileService from "../services/file-service.js";

class UserController {
  async getUsers(req, res) {
    try {
      const users = await userService.getUsers();

      res.status(200).send(users);
    } catch (error) {
      console.log(error);

      res.status(500).send(error);
    }
  }

  async getUser(req, res) {
    try {
      const user = await userService.getUser(req.params.id);

      res.status(200).send({ message: "success", user });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async addUser(req, res) {
    try {
      const createdUser = await userService.addUser(req.body);

      res.status(201).send({ message: "user created", user: createdUser });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async updateUser(req, res) {
    try {
      const updatedUser = await userService.updateUser(req.params.id, {
        name: req.body.name,
      });

      res.status(200).send({ message: "updated", user: updatedUser });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async deleteUser(req, res) {
    try {
      const deletedUser = await userService.deleteUser(req.params.id);

      res.status(201).send({ message: "user deleted", user: deletedUser });
    } catch (error) {
      console.log();
      res.status(500).send(error);
    }
  }

  async uploadUserPicture(req, res) {
    const image = req.files.image;
    const savedImageName = fileService.saveImage(image);

    res.status(200).send({ image: savedImageName });
  }
}

export default new UserController();
