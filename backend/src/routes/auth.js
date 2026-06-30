import { Router } from "express";
import { products } from "../../data.js";

const router = Router();

/*
1. Search via name Done
2, Filter by Categories
3. Filter by availibilty
4. Filter by price range
*/

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

export { router as authRoutes };
