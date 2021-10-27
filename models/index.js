// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: { model: ProductTag, unique: false },
  as: 'product_info',
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: { model: ProductTag, unique: false },
  as: 'product_info',
});
//product tag belongs to product and product hasmany producttags?
ProductTag.belongsTo(Product, {
  foreignKey: 'product_id',
});

Product.hasMany(ProductTag, {
  foreignKey: 'product_id',
});

ProductTag.belongsTo(Tag, {
  foreignKey: 'tag_id',
});

Tag.hasMany(ProductTag, {
  foreignKey: 'tag_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
