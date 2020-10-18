import React,{Component} from 'react';
import Aux from '../../hoc/Auxi';
import Burger from '../../component/Burger/Burger';
import BuildControls from  '../../component/Burger/BuildControls/BuildControls';
import Modal from '../../component/UI/Modal/Modal';
import OrderSummary from '../../component/Burger/OrderSummary/OrderSummary';
const INGREDIENT_PRICES={
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.8
};



class BurgerBuilder extends Component{
    state={
        ingredient:{
            salad :  0,
            bacon :  0,
            cheese : 0,
            meat :   0
        },
        totalPrice: 4,
        purchaseble:false,
        purchasing:false 
    }
    updatePurchaseState(ingredient){
        
        const sum=Object.keys(ingredient).map(igKey=>{
            return ingredient[igKey];

        })
        .reduce((sum,el)=>{
          return sum+el;
        },0);
        this.setState({purchaseble:sum>0});
    }
    addIngredientHandler=(type)=>{
        const oldCount = this.state.ingredient[type];
        const updatedCount= oldCount+1;
        const updateIngredient={
          ...this.state.ingredient
        };
        updateIngredient[type]=updatedCount;
        const priceAddition=INGREDIENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice+priceAddition;
        this.setState({totalPrice:newPrice, ingredient : updateIngredient});
        this.updatePurchaseState(updateIngredient);

    }

    removeIngredientHandler=(type)=>{
        const oldCount = this.state.ingredient[type];
        if(oldCount<=0)
        {
            return;
        }
        const updatedCount= oldCount-1;
        const updateIngredient={
          ...this.state.ingredient
        };
        updateIngredient[type]=updatedCount;
        const priceDeduction=INGREDIENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice-priceDeduction ;
        this.setState({totalPrice:newPrice, ingredient : updateIngredient});
        this.updatePurchaseState(updateIngredient);
    }
    purchaseHandler=()=>{
        this.setState({purchasing: true});

    }
    purchaseCancelHandler=()=>{
        this.setState({purchasing:false});
    }
    purchaseContinueHandler=()=>{
         alert('You can Continue!');
    }
    


    render()
    {
        const disabledInfo={
            ...this.state.ingredient

        };
        for(let key in disabledInfo)
        {
            disabledInfo[key]=disabledInfo[key]<=0
        }
    return(
    <Aux> 
    <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
    <OrderSummary ingredient={this.state.ingredient}
    purchaseCancelled={this.purchaseCancelHandler}
    price={this.state.totalPrice}
    purchaseContinued={this.purchaseContinueHandler}/>
    </Modal> 
    <Burger ingredient={this.state.ingredient }/>
    <BuildControls
        ingredientAdded={this.addIngredientHandler}
        ingredientRemoved={this. removeIngredientHandler}
        disabled={disabledInfo}
        purchaseble={this.state.purchaseble}
        ordered={this.purchaseHandler}
        price={this.state.totalPrice}/>
    </Aux>
  
    );
    }
}
export default BurgerBuilder;