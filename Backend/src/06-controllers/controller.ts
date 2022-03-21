import express, { NextFunction, Request, Response } from 'express'
import FurnitureModel from '../03-models/furniture-model'
import logic from '../05-logic/logic'

const router = express.Router()

router.get('/types', async (request: Request, response: Response, next: NextFunction) => {
  try {
      const types = await logic.getAllTypes()
      response.json(types)


  } catch (err: any) {
      next(err)
  }
})

router.get('/furnitures', async (request: Request, response: Response, next: NextFunction) => {
  try {
      const furnitures = await logic.getAllFurnitures()
      response.json(furnitures)


  } catch (err: any) {
      next(err)
  }
})

router.post('/furnitures', async (request: Request, response: Response, next: NextFunction) => {
  try {
     const furniture = new FurnitureModel(request.body)
     const addedFurniture = await logic.addFurniture(furniture)
     response.status(201).json(addedFurniture)


  } catch (err: any) {
      next(err)
  }
})



export default router  