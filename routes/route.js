const router = require("express").Router();
const product=require("../controller/sales")


router.post("/addData",product.AddData);
router.get("/getData", product.retreiveData);

module.exports = router;
