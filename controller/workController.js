import userModel from "../model/workModel.js"
import { Op } from "sequelize";


class WorkController{

    async addWork(req, res)  {

 
        try {
    
            const data = await userModel.create(req.body);
            res.status(200).json(data);
            console.log(data);
    
        }
        catch (error) {
            console.error("data not added", error)
        }
    
    
    }

    async  getById(req, res) {

        console.log('hi');
        const { id } = req.params;
    
        try {
            const data = await userModel.findByPk(id)
            console.log(data);
            res.json(data)
    
        }
        catch (error) {
            console.error("data cannot be saved", error)
        }
    }

    async  update(req, res){
        const { id } = req.params;
        console.log(id);
        if (id) {
    
            const { userName, password, address } = req.body;
            const data = await userModel.update({ userName, password, address }, {
    
                where: {
                    id,
    
                }
    
            })
    
            console.log(data);
            res.status(200).json({ message: "data added succesfully" })
        }
        else {
            res.status(400).json({ message: "id invalid" })
        }
    }

    async delete(req, res) {
        const { id } = req.params;
        if (id) {
    
            const data = await userModel.destroy(
                {
                    where: {
                        id
                    }
    
                })
    
            if (data[0]) res.status(200).json({ success: "true", message: "data deleted succssfully " });
            else res.status(400).json({ success: "false", message: "data deletion not possible" })
    
        }
    
    
    }

    async search(req, res)  {
        const { address } = req.query;
        console.log(req.query);
        const data = await workModel.findAll({
            where: {
                address: {
                    [Op.like]: `%${address}%`,
                }
            }
        })
        console.log('hi');
        // console.log(data);
        if (data[0]) res.status(200).json(data)
        else res.status(400).json({ success: "false", message: " sorry  data not found" })
    
    }
}
export default WorkController;