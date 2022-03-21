import "./Menu.css";
import { NavLink } from 'react-router-dom'

function Menu(): JSX.Element {
    return (
        <div className="Menu">
			<NavLink to="/home">Home</NavLink>
			<NavLink to="/furnitures-list">Furniture List</NavLink>
			<NavLink to="/add-furniture">Add Furniture</NavLink>

		
        </div>
    );
}

export default Menu;
