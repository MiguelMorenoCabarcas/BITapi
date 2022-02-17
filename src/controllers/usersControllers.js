//se trae el modelo
const usersModel = require('../models/usersModels')

//crear
const createUser = async (req, res) => {
    try {
      const user = new usersModel(req.body);
      await user.save();
      res.status(201).json({ status: "Usuario creado correctamente" });
      //throw
    } catch (error) {
      console.log(error);
      res.status(203).json({ status: "Usuario no creado correctamente", error });
    }
  };

//eliminar
const deleteUser = async( req, res) => {
    const id = req.params.userID
    await usersModel.findByIdAndDelete(id)
    res.status(200).json({msj: "Producto eliminado"})
  }

//mostrar
const showUser = async (req, res) => {
    const user = await usersModel.find();
    res.status(200).json(user);
  };

//actualizar

const updateUser = async (req, res) => {
    try {
      const id = req.params.userID;
      const updated = await usersModel.findByIdAndUpdate(id, {$set: req.body});
      res.status(201).json(updated);
    } catch (error) {
      res.status(201).json({ msj: "Actualizacion fallida", error });
    }
  };

module.exports = {
    createUser,
    deleteUser,
    showUser,
    updateUser
}
