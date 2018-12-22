import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Costs from "./Costs";
import Expiring from "./Expiring";
import Type from "./Type";
import Country from "./Country";
import Currency from "./Currency";
 const contentlogo = [
  {
     
     logo: 'http://mastercreationz.com/Lucidnetwork/logodashboard.png'

  }
];


class Footer extends Component{
  render(){
    return(
      <div>
      <footer>
         <div class="footer">
            <ul class="list-inline text-center footericons">
             
              <li class="list-inline-item">
                <a href="">
                  <i class="fa fa-caret-left" aria-hidden="true"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="">
                  <i class="fa fa-caret-right" aria-hidden="true"></i>
                </a>
              </li>
               <li class="list-inline-item">
                <a href="">
                  <i class="fa fa-wrench" aria-hidden="true"></i>

                </a>
              </li>
               <li class="list-inline-item">
                <a href="">
                <i class="fa fa-deaf" aria-hidden="true"></i>

                </a>
              </li>
               <li class="list-inline-item">
                <a href="">
                  <i class="fa fa-search" aria-hidden="true"></i>

                </a>
              </li>
               <li class="list-inline-item">
                <a href="">
                 <i class="fa fa-ellipsis-h" aria-hidden="true"></i>

                </a>
              </li>
            </ul>
           
          </div>
    </footer>
</div>
      );
  }
}


class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
        <div className="top_nav">
        <div className="col-sm-3">
         <div class="nav_left">
          <h1 className="logo_outer"> {contentlogo.map((item, index) => (        
          <a className="navbar-brand logoswit" href="index.html"  style={{ background: `url('${item.logo}') no-repeat center center` }}>
          </a>
 ))}</h1>
  <ul className="logo_bottom">
            <li><button className="button_onetype btn1"><NavLink exact to="/">Dashboard</NavLink></button></li>
            <li><button className="button_onetype btn2"><NavLink to="/">Issurance</NavLink></button></li>
            
          </ul>
          </div>
 </div>
  <div className="col-sm-9 pull-right">
  <div class="nav_right">
          <ul className="header">
            <li><NavLink exact to="/">CP Risk</NavLink></li>
            <li><NavLink to="/costs">Costs</NavLink></li>
            <li><NavLink to="/expiring">Expiring</NavLink></li>
            <li><NavLink to="/type">Type</NavLink></li>
            <li><NavLink to="/country">Country</NavLink></li>
            <li><NavLink to="/currency">Currency</NavLink></li>
          </ul>
          </div>
           </div>
           </div>
          <div className="content">
            

            <Route exact path="" component={Home}/>
            <Route path="/costs" component={Costs}/>
            <Route path="/expiring" component={Expiring}/>
             <Route path="/type" component={Type}/>
            <Route path="/country" component={Country}/>
            <Route path="/currency" component={Currency}/>

          </div>
           <Footer/>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;