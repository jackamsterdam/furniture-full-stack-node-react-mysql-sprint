import { useEffect, useState } from "react";
import FurnitureModel from "../../../Models/FurnitureModel";
import furnituresService from "../../../Services/furnituresService";
import notify from "../../../Services/NotifyService";
import "./FurnituresList.css";

function FurnituresList(): JSX.Element {

 const [furnitures, setFurnitures] = useState<FurnitureModel[]>([])

 useEffect(() => {

     (async function(){
         try {
             
            const furnitures = await furnituresService.getAllFurnitures()
            setFurnitures(furnitures)
  console.log(furnitures)
         } catch (err: any) {
             notify.error(err)
         }
     })()

 }, [])


    return (
        <div className="FurnituresList">
			<table>
                <thead>
                    <tr>
                        <th>Furniture Name</th>
                        <th>Dimensions</th>
                        <th>Color</th>
                        <th>Price</th>
                    </tr>
                </thead>
                  <tbody>
                      {furnitures.map(f => <tr key={f.furnitureId}>
                              <td>{f.typeName}</td>
                              <td>{f.dimensions}</td>
                              <td>{f.color}</td>
                              <td>{f.price}</td>
                      </tr>)}
                  </tbody>
            </table>
        </div>
    );
}

export default FurnituresList;
