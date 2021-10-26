const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const result = await Category.findAll({ include: [{ model: Product }] });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const result = await Category.findAll({
      where: {
        id: req.params.id,
      },
      include: [{ model: Product }],
    });

    if (!result) {
      res.status(404).json({ message: "Doesn't exist" });
      return;
    }

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const result = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(418).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const result = await Category.update(
      {
        category_name: req.body.category_name,
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
});

router.delete('/:id', async (req, res) => {
  try {
    const result = await Category.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(418).json(err);
  }
});

module.exports = router;
