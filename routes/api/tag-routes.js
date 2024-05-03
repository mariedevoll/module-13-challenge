const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const TagData = await Tag.findAll({
      include: [{ model: ProductTag, include: [Product]}],
    });
  res.status(200).json(TagData);
} catch(error) {
  res.status(500).json(error);
}
});

router.get('/:id', async (req, res) => {
  try {
    const TagData = await Tag.findByPk(req.params.id, {
      include: [{ model: ProductTag, include:[Product]}],
    });
    if(!TagData){
      res.status(404).json({message: "No tag matches the id"});
      return;
  }
  res.status(200).json(TagData);
  } catch(error) {
    res.status(500).json(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const TagData = await Tag.findCreateFind({
      tag_name: req.body.tag_name,
    });
    res.status(200).json(TagData);
  } catch(error) {
    res.status(500).json(error);
  }
  });

router.put('/:id', async (req, res) => {
  try {
    const TagData = await Tag.update(req.body, {
      where:{id:req.params.id},
    });
    if(!TagData){
      res.status(404).json({message: "No tag matches the id"});
      return;
  }
  res.status(200).json(TagData);
  } catch(error) {
    res.status(500).json(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const TagData = await Tag.destroy({ where: {id: req.params.id
    },
  });
    if(!TagData){
      res.status(400).json({message: "No tag matches the id"});
      return;
    }
    res.status(200).json(TagData);
  } catch(error) {
    res.status(500).json(error);
  }
});

module.exports = router;
