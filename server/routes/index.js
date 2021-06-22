const router = require('express').Router();
const userRouter = require('./userRouter');
const orderRouter = require('./orderRouter');
const authenticate = require('../middleware/authentication')

router.get('/', (req, res) => {
    res.send('Hello World!')
})
router.use(userRouter)
router.use(authenticate)
router.use(orderRouter)

module.exports = router