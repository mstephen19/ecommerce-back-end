const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const result = await Tag.findAll({
      include: [{ model: Product, through: ProductTag, as: 'product_info' }],
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(418).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const result = await Tag.findAll({
      include: [{ model: Product, through: ProductTag, as: 'product_info' }],
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(418).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const result = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(418).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const result = await Tag.update(
      {
        tag_name: req.body.tag_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(result);
  } catch (err) {
    res.status(418).json(err);
  }
  console.log(req.params.id);
  console.log(req.body);
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const result = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(418).json(err);
  }
});

module.exports = router;
