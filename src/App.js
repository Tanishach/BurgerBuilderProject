import React, { Component }from 'react';
import Layout from './component/Layout/Layout';
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';


import './App.css';
class App extends Component{
  render()
  {
    return(
    <div>
     <Layout>
       <BurgerBuilder/>
     </Layout>
    </div>


    );
  }
}


export default App;
 