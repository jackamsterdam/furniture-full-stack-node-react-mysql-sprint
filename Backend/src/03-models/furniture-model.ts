import Joi from "joi"

class FurnitureModel {
  furnitureId: number 
  typeId: number 
  dimensions: string 
  color: string 
  price: number 

  typeName: number //typesName

    constructor(furniture: FurnitureModel) {
        this.furnitureId = furniture.furnitureId
        this.typeId = furniture.typeId
        this.dimensions = furniture.dimensions
        this.color = furniture.color
        this.price = furniture.price 

        this.typeName = furniture.typeName
    }

    private static postValidationSchema = Joi.object({
        furnitureId: Joi.forbidden(), 
        typeId: Joi.number().required().integer().min(1),
        dimensions: Joi.string().required().min(0).max(30),
        color: Joi.string().required().min(0).max(100),
        price: Joi.number().required().min(0).max(10000),


        typeName: Joi.string().optional()

      

    })

    validatePost():string {
        const result = FurnitureModel.postValidationSchema.validate(this, {abortEarly: false})
        return result.error?.message
    }
}

export default FurnitureModel