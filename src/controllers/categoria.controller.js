const Categoria = require("../models/categoria");

const categoriaCtrl = {};

categoriaCtrl.getCategorias = async(req, res, next) => {
    const categorias = await Categoria.find();
    res.json(categorias);
};

categoriaCtrl.createCategoria = async(req, res, next) => {
    const categoria = new Categoria({
        nombre: req.body.nombre,
        usuario: req.body.usuario,

    });
    await categoria.save();
    res.json({ status: "Categoria creada" });
};

categoriaCtrl.getCategoria = async(req, res, next) => {
    const { id } = req.params;
    const categoria = await Categoria.findById(id);
    res.json(categoria);
};

categoriaCtrl.editCategoria = async(req, res, next) => {
    const { id } = req.params;
    await Categoria.findByIdAndUpdate(id, { $set: req.body }, { new: true });
    res.json({ status: "Categoria actualizada" });
};

categoriaCtrl.deleteCategoria = async(req, res, next) => {
    await Categoria.findByIdAndRemove(req.params.id);
    res.json({ status: "Categoria borrada" });
};

module.exports = categoriaCtrl;