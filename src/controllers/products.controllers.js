import { Product } from "../models/Product";

// export const createProduct = async (req, res) => {
//     console.log(req.body)
//     res.send("hola post")
// //   const { name, category, price, imgURL } = req.body;
// //   const newProduct = new Product({ name, category, price, imgURL });
// //   const productSaved = await new Product.save();
// //   res.status(201).json(productSaved);
// };

export const createProduct = async (req, res) => {
  const { name, category, price, imgURL } = req.body;
  try {
    const newProduct = new Product({
      name,
      category,
      price,
      imgURL,
    });
    const productSaved = await newProduct.save();
    res.status(201).json(productSaved);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const getProductById = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findOne({
      where: {
        id: productId,
      },
    });
    if (!product)
      return res.status(404).json({ message: "product does not exist" });
    res.json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}; 

export const updateProductById = async (req, res) => {
  try {
    const { productId } = req.params;
    const { name, price, category, imgURL } = req.body;
    const product = await Product.findByPk(productId);
    product.name = name;
    product.price = price;
    product.category = category;
    product.imgURL = imgURL;
    await product.save();
    res.json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProductById = async (req, res) => {
  try {
    const { productId } = req.params;
    await Product.destroy({
      where: {
        id: productId,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
