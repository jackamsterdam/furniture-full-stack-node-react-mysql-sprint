import TypeModel from "../Models/TypeModel"
import config from '../Utils/Config'
import axios from 'axios'
import FurnitureModel from "../Models/FurnitureModel"

class FurnituresService {

     async getAllTypes():Promise<TypeModel[]>{
         const response = await axios.get<TypeModel[]>(config.typesUrl)
         const types = response.data 
         return types
     }

     async getAllFurnitures():Promise<FurnitureModel[]> {
         const response = await axios.get<FurnitureModel[]>(config.furnituresUrl)
         const furnitures = response.data 
         return furnitures
     }

     async addFurniture(furniture: FurnitureModel):Promise<FurnitureModel> {
         const response = await axios.post<FurnitureModel>(config.furnituresUrl, furniture)
         const addedFurniture = response.data 
         return addedFurniture
     }
}

const furnituresService = new FurnituresService() 

export default furnituresService