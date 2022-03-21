import { useNavigate } from "react-router-dom";
import TypeModel from "../../../Models/TypeModel";
import "./AddFurniture.css";
import notify from '../../../Services/NotifyService'
import furnituresService from '../../../Services/furnituresService'
import FurnitureModel from "../../../Models/FurnitureModel";
import {useState, useEffect} from 'react'
import {useForm} from 'react-hook-form'

function AddFurniture(): JSX.Element {

   const [types, setTypes] = useState<TypeModel[]>([])
   const navigate = useNavigate()
   const {register, handleSubmit, formState} = useForm<FurnitureModel>()


   useEffect(() => {
       (async function(){
           try {
               
               const types = await furnituresService.getAllTypes()
               setTypes(types)
           } catch (err:any) {
               notify.error(err)
           }
       })()
   },[])

   async function submit(furniture: FurnitureModel) {
       console.log(furniture)

       try {
           await furnituresService.addFurniture(furniture)
        navigate('/furnitures-list')
        notify.success('Furniture has been added')
       } catch (err: any) {
           notify.error(err)
       }

   }

    //cool if you do typeddfdId in register the error terminal will display the list of what you need 
    return (
        <div className="AddFurniture Box">
			<form onSubmit={handleSubmit(submit)}>
             
            <label>Furniture type:</label>
             <select defaultValue='' {...register('typeId', {
                 required: {value: true, message: "Missing furniture type"}
             })}>
                <option disabled value="">Select Furniture type</option>
                {types.map(t => <option key={t.typeId} value={t.typeId}>{t.name}</option>)}
             </select>
             <span>{formState.errors.typeId?.message}</span>

             <label>Dimensions:</label>
             <input type="text" {...register('dimensions',{
                 required: {value: true, message: 'Missing dimensions'}
             })} />
             <span>{formState.errors.dimensions?.message}</span>

             <label>Color:</label>
             <input type="text" {...register('color', {
                required: {value: true, message: 'Missing color'}

             })} />
             <span>{formState.errors.color?.message}</span>


             <label>Price:</label>
             <input type="number" step="0.01" {...register('price', {
                 required: {value: true , message: "Missing price"},
                 min: {value: 0, message: "Price can't be negative"},
                 max: {value: 1000, message: 'Price must not exceed 1000'}
             })} />
             <span>{formState.errors.price?.message}</span>


              <button>Add</button>
            </form>
        </div>
    );
}

export default AddFurniture;
