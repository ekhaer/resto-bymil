const { Order, Menu } = require('../models');


class OrderController {
    static async addOrder(req, res, next) {
        try {
            const userId = req.loggedUser.id;
            let orderData = req.body;
            orderData.forEach(async(order) => {
                const addOrder = await Order.create(order)
            });
            res.status(201).json({ message : 'Order is created!' }) 
        } catch (error) {
            console.log(error)
            next(error)
        }
    }

    //cashier only
    static async getAllOrder(req, res, next) {
        try {
            const userId = req.loggedUser.id;
            const getOrder = await Order.findAll({
                where : {
                    status : 'active'
                },
                include : {
                    model : Menu
                }
            })
            let obj = {
                TableId : 0,
                UserId : 0,
                Menu : [],
                Total : 0
            }
            getOrder.forEach((order) => {
                if (obj.TableId === order.TableId) {
                    obj.Menu.push({
                        id : order.Menu.id,
                        category : order.Menu.category,
                        name : order.Menu.name,
                        price : order.Menu.price,
                        qty : order.qty
                    });
                    obj.Total = obj.Total + (order.qty * order.Menu.price)
                } else {
                    obj.TableId = order.TableId,
                    obj.UserId = order.UserId,
                    obj.Menu.push({
                        id : order.Menu.id,
                        category : order.Menu.category,
                        name : order.Menu.name,
                        price : order.Menu.price,
                        qty : order.qty
                    });
                    obj.Total = obj.Total + (order.qty * order.Menu.price)
                }
            });
            res.status(200).json(obj)
        } catch (error) {
            console.log(error)
            next(error)
        }
    }


    static async getOrderById(req, res, next) {
        try {
            const userId = req.loggedUser.id;
            console.log(userId, "<<<<<<<")
            const getById = await Order.findAll(
                {where : {
                    UserId : userId
                }}
            )
            res.status(200).json(getById)
        } catch (error) {
            console.log(error)
            next(error)
        }
    }

    static async putOrder(req, res, next) {
        try {
            const userId = req.loggedUser.id;
            const orderId = req.params.id;
            console.log(req.params.id, ">>>>>")
            let OrderData = {
                // TableId : req.body.tableId,
                MenuId : req.body.MenuId,
                qty : req.body.qty,
                UserId : userId
            }
            const updatedOrder = await Order.update( OrderData,
                {where : {
                    id : orderId,
                }, returning: false}
            )
            res.status(200).json(updatedOrder)
        } catch (error) {
            console.log(error)
            next(error)
        }
    }

    static async changeStatus(req, res, next) {
        try {
            const userId = req.loggedUser.id;
            const tableId = req.params.tableId;
            let status = req.body.status;

            const updatedOrder = await Order.update({status},
                {where : {
                    TableId : tableId
                }}
            )
            res.status(200).json(updatedOrder)
        } catch (error) {
            console.log(error)
            next(error)
        }
    }
}

module.exports = OrderController
