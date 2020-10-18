import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const burger=(props)=>{
let transformedIngredient=Object.keys(props.ingredient).map(igKey=>{
        return[...Array(props.ingredient[igKey])].map((_, i)=>{
         return <BurgerIngredient key={igKey+i} type={igKey}/>;

        });
    })
    .reduce((arr, el)=>{return arr.concat(el)},[]);
    if(transformedIngredient.length ===  0)
    {
       transformedIngredient = <p>  please add some ingredients!  </p>; 
    }
    return(
    <div>
        <main className='Burger' >
        <BurgerIngredient type="bread-top"/>
        {transformedIngredient}
        <BurgerIngredient type="bread-bottom"/>

        </main>
    </div>


    );

}
export default burger;