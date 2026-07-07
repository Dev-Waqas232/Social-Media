import { Router } from "express";
import { products } from "../../data.js";

const router = Router();

router.get("/products", (req, res) => {
  const { page, limit, name } = req.query;

  if (page <= 0) page = 1;
  if (limit <= 0) limit = 5;

  let copArr = [...products];

  if (name) copArr = copArr.filter((d) => d.name.toLowerCase().includes(name));

  const start = (page - 1) * limit;
  const data = copArr.splice(start, limit * page);

  const hasNext = page * limit < products.length;
  const hasPrev = products.length && page * limit - limit > 0;

  const paginationData = {
    total: products.length,
    page,
    limit,
    hasNext,
    hasPrev,
  };

  res
    .status(200)
    .json({ data: { products: data, pagination: paginationData } });
});

router.post("/products", (req, res) => {
  try {
    const { name, price, isAvailable, category } = req.body;

    const newProduct = {
      name: name.trim(),
      price,
      isAvailable,
      category: category.trim(),
      id: products.length + 1,
    };

    products.push(newProduct);

    return res.status(201).json({ message: "Data hogya", data: products });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong!" });
  }
});

export { router as authRoutes };
