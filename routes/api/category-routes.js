const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const CategoryCardData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(CategoryCardData);
  } catch(error) {
    res.status(500).json(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const CategoryCardData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if(!CategoryCardData){
      res.status(404).json({message: "No category matches the id"});
    return;
  }
  res.status(200).json(CategoryCardData);
  } catch(error) {
    res.status(500).json(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const CategoryCardData = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(CategoryCardData);
  } catch(error) {
    res.status(500).json(error);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const CategoryCardData = await Category.update(req.body, {
      where: {id:req.params.id},
});
  if(!CategoryCardData){
    res.status(404).json({message: "No category matches the id"});
  return;
  }
  res.status(200).json(CategoryCardData);
  } catch(error) {
    res.status(500).json(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const CategoryCardData = await Category.destroy({
      where: {id: req.params.id},
    });
    if(!CategoryCardData){
      res.status(404).json({message: "No category matches the id"});
    return;
  }
  res.status(200).json(CategoryCardData);
  } catch(error) {
    res.status(500).json(error);
  }
});

module.exports = router;
