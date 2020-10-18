import React from 'react';
import Aux from '../../hoc/Auxi';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
const layout =(props)=>
(
<Aux>   
    <Toolbar/>
    
<main className="Layout">   
{props.children}
</main>
</Aux>
);

export default layout;