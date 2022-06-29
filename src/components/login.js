import React from "react";
import '../data/users';

import {users} from "../data/users";
import { withRouter } from "react-router";
<script src="https://kit.fontawesome.com/edeacc4ccd.js" crossorigin="anonymous"></script>

 class Login extends React.Component{
    state={
        users:users
    }

    render(){
    const Checklogin= (event)=>{
       
          var {username,password} = document.querySelector('#login-form');
            const userData = users.find((item) => item.id === username.value);
            if(userData)
            {
                if(userData.pass === password.value)
                {
                    this.props.history.push(`/page/${userData.id}`); 
                }else alert("Sai")
            }            
        }   
      
        return(
            
            <>
            <div id="backg">
             <div id="login">
        <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-6">
                    <div id="login-box" className="col-md-12">
                        <form id="login-form"  className="form" action="" method="get">
                            <h3 className="text-center text-info">Login</h3>
                            <div className="form-group">
                                <label htmlFor="username" name ="acb" id="password" className="text-info">Username:</label><br/>
                                <input placeholder="admin" type="text" name="username" id="username" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="text-info">Password:</label><br/>
                            
                                <input placeholder="admin" type="password" name="password" id="password" className="form-control"></input>
                               
                            
                            </div>
                           
                            <div className="form-group">
                                <label htmlFor="remember-me" className="text-info"><span>Remember me</span><span><input id="remember-me" name="remember-me" type="checkbox"/></span></label><br/>
                               <input type="submit"  name="submit" onClick={(event)=>Checklogin(event)} className="btn-submit" value="Login"/>
                            </div>
                    
                            <div id="register-link" className="text-right">
                                <a id="thea" href="/page"  className="text-info">Register here</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
            </>
        )
    }
  
 }


export default  withRouter(Login);