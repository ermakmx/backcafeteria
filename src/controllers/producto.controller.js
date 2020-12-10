const Producto = require("../models/producto");

const productoCtrl = {};

productoCtrl.getProductos = async(req, res, next) => {
    const productos = await Producto.find();
    res.json(productos);
};

productoCtrl.createProducto = async(req, res, next) => {
    const producto = new Producto({
        nombre: req.body.nombre,
        precioUni: req.body.precioUni,
        usuario: req.body.usuario,
        categoria: req.body.categoria,
    });
    await producto.save();
    res.json({ status: "Producto creado" });
};

productoCtrl.getProducto = async(req, res, next) => {
    const { id } = req.params;
    const producto = await Producto.findById(id);
    res.json(producto);
};

productoCtrl.editProducto = async(req, res, next) => {
    const { id } = req.params;
    await Producto.findByIdAndUpdate(id, { $set: req.body }, { new: true });
    res.json({ status: "Producto actualizado" });
};

productoCtrl.deleteProducto = async(req, res, next) => {
    await Producto.findByIdAndRemove(req.params.id);
    res.json({ status: "Producto borrado" });
};

module.exports = productoCtrl;