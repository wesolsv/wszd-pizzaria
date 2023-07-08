import { Request,Response } from "express";
import { DetailOrderService } from "../../services/order/DetailOrderService";

class DetailOrderController{
    async handle(req: Request, res:Response){
        const order_id = req.query.oder_id as string

        const detailService = new DetailOrderService();

        const orders = await detailService.execute({order_id});

        return res.json(orders);
    }
}

export {DetailOrderController}