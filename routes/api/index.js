const router = require("express").Router();
const itemRoutes = require('./items');
const preOrderRoutes = require('./preOrderItems')

router.use("/items", itemRoutes);
router.use('/preorder',preOrderRoutes)

module.exports = router
