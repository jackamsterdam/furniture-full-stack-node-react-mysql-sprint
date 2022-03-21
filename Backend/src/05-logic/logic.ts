import { OkPacket } from "mysql";
import dal from "../04-dal/dal";
import ErrorModel from "../03-models/error-model";
import TypeModel from "../03-models/type-model";
import FurnitureModel from "../03-models/furniture-model";





async function getAllTypes():Promise<TypeModel[]>{
    const sql = `SELECT * FROM types`

   const types =  await dal.execute(sql)
   return types
}

async function getAllFurnitures():Promise<FurnitureModel[]> {
   const sql = `SELECT f.*, t.name AS 'typeName'
                FROM furnitures as f
                INNER JOIN types as t
                    ON t.typeId = f.typeId 
                
                    ORDER BY price; `

              // WHERE t.typeID = 4 if you did by id 

const furnitures = await dal.execute(sql)  //no ? so no need
return furnitures      
}

async function addFurniture(furniture: FurnitureModel):Promise<FurnitureModel> {
  const errors = furniture.validatePost()
  if (errors) throw new ErrorModel(400, errors)

  const sql = `INSERT INTO furnitures VALUES(DEFAULT, ?, ?, ? ,?)`

  const info: OkPacket = await dal.execute(sql, [furniture.typeId, furniture.dimensions,furniture.color,furniture.price])

  furniture.furnitureId = info.insertId

  return furniture 
}








export default {
    getAllTypes,
    getAllFurnitures,
    addFurniture
}