const router = require("express").Router();
const itemRoutes = require('./items');

router.use("/items", itemRoutes);
router.use('/preorder',itemRoutes)

module.exports = router
