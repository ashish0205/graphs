const Product = require('../ model/data');

const AddData = async (req, res) => {
    const { productName} = req.body
    
    try {
        let product = await Product.findOne({
            productName,
        });
        
        if (product) {
            return res.status(400).json({
                msg: "product already exists",
            });
        } else {
            const product = new Product({
                productName: req.body.productName,
                currentYear: req.body.currentYear,
                previousYear: req.body.previousYear
                });
           // product = new Product({ productName, currentYear, previousYear })
            return product.save(function (err) {
                if (err) {
                
                    return error.handleResErr(res, err);
                }
            else { res.json(product).end(); }
        });
        }
    } catch (err) {
        console.log(err);
    return res.status(400).json({
                msg: err.message,
            });
    }

}
const retreiveData = async (req, res) => {
    Product.find({}, function (err, docs) {
        if (err) { return error.handleResErr(res, err); }
        else {
            res.json(docs).end();
        }
  });
}

module.exports = {AddData,retreiveData};