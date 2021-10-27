const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const result = await ProductTag.findAll({
      include: [{ model: Product }, { model: Tag }],
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
    const result = await ProductTag.findByPk(req.params.id, {
      include: [{ model: Product }, { model: Tag }],
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(418).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const result = await ProductTag.create({
      product_id: req.body.product_id,
      tag_id: req.body.tag_id,
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(418).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const result = await ProductTag.update({
      product_id: req.body.product_id,
      tag_id: req.body.tag_id,
      where: {
        product_id: req.params.id,
      },
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(418).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const result = await ProductTag.destroy({
      where: {
        product_id: req.params.id,
      },
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(418).json(err);
  }
});

module.exports = router;
