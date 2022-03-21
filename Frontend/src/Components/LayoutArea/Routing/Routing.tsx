import { Routes, Route } from 'react-router-dom'
import AddFurniture from '../../FurnituresArea/AddFurniture/AddFurniture';
import FurnituresList from '../../FurnituresArea/FurnituresList/FurnituresList';
import Home from '../../HomeArea/Home/Home';
import PageNotFound from '../PageNotFound/PageNotFound';

function Routing(): JSX.Element {
    return (
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/" element={<Home/>}/>
{/* furniture-list  */}
          <Route path="/furnitures-list" element={<FurnituresList/>} />
          <Route path="/add-furniture" element={<AddFurniture/>} />



          <Route path="*" element={<PageNotFound/>} />
        </Routes>
    );
}

export default Routing;
