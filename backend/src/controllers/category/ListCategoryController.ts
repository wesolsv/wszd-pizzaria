import { Request, Response } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService";

class ListCategoryController{
    async handle(req: Request, res:Response){
        const listCategoriesService = new ListCategoryService();

        const category = await listCategoriesService.execute();

        return res.json(category);
    }
}

export {ListCategoryController}