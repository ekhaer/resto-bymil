const router = require('express').Router();
const orderController = require('../controllers/orderController');
const authorization = require('../middleware/authorization');

// router.use(authenticate)
router.post('/order', orderController.addOrder)


router.get('/order/:userId', orderController.getOrderById)
router.put('/order/:id', orderController.putOrder)

router.use(authorization)
router.get('/order', orderController.getAllOrder)
router.patch('/order/:tableId', orderController.changeStatus)


module.exports = router