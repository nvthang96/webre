import React from "react";
import call from '../data/img/COM TAM THUAN PHAT - GOI NGAY.gif'
import logo1 from '../data/img/Asset 9@2x.png';
import { withRouter } from "react-router";
import {dataproduce} from "../data/users"
import '../styles/style.scss';

 class Page extends React.Component{
    
  
    state={  
        dataproduce:[],
        listbag:[],
        check:'',
        checkid:''
        
    }
    componentDidMount(){
      this.setState({
         dataproduce:dataproduce.listao,
         listbag:dataproduce.listtui,
      })
    }
    searchProduct = event =>{
        this.setState({
            check:event.target.value
        })
        console.log(event.target.value)
        if(event.target.value=='')
        {
            this.setState({
                dataproduce:dataproduce.listao,
                listbag:dataproduce.listtui,
             })
        }
        
    }
    checkstate = () =>{
        let searchLowcase = this.state.check.toLowerCase();
        let produc = this.state.dataproduce.concat(this.state.listbag)
        let coppyproduct = []
        
        for(let i =0;i<produc.length;i++)
        {
           let a = produc[i].name.toLowerCase();
           
            if(a.includes(searchLowcase))
            {
                coppyproduct.push(produc[i])
            }
        }
        if(coppyproduct){
            this.setState({
                dataproduce:[...coppyproduct     
                        ],
                        listbag:'',
                        check:'', 
              
            })
        }
       
    }
    
    render(){
    const checkid = this.props.match.params.id
    const checklogin = () =>{
    
            if(checkid == 'undefined' || checkid == undefined ){
                window.location.href = "/";
            }else
                window.location.href = `/page/`+checkid;
      }
   
      const checkOrders = ()=>{
        const myStyle = {
          };
        if(checkid == 'undefined' || checkid == undefined ){
            return {display:"none"}
        }else{return myStyle}
    }
    const clickTobuy = ()=>{
        if(checkid == 'undefined' || checkid == undefined ){
             window.location.href = "/login";
        }else window.location.href = `/page/`+checkid;
    }
        const Checkuser = () =>{
            if(checkid !== undefined){
                return <li className="menu-item">{checkid}</li>
            }else return <li className="menu-item"><a href="/login">Đăng nhập</a></li>
        }
        let {dataproduce} = this.state;
        let {listbag} = this.state;
        return(
            <>
            <div className="header">
            <div className="logo">
                <a href="/"><img src={logo1} alt=""/></a>
                <div className="menu-search">
                    <input type="search" onChange={event => this.searchProduct(event)} placeholder="Tìm kiếm mặt hàng"/>
                    <button type="button" onClick={()=>this.checkstate()} >Tìm kiếm</button>
                </div>
            </div>
            <div className="menu">
                    <ul className="menu-list">
                        <li className="menu-item"><a onClick={checklogin}>Trang chủ</a></li>
                        <li className="menu-item">Sản phẩm</li>
                        <li id="checkOrder" style={checkOrders()} className="menu-item">Đơn hàng</li>
                        <li className="menu-item">Liên hệ</li>
                        <Checkuser></Checkuser>
                        
                    </ul>
            </div>
            </div>
        {dataproduce && dataproduce.length > 0 && <>
        <div className="hot-product"><h3>sản phẩm đang hot</h3></div>
        <div className="product">
            <div className="product-sub">
                <ul className="product-list">
                    {dataproduce && dataproduce.length > 0 && dataproduce.map((item,index)=>{
                        return (<li key={item.id}>
                                
                            <div className="fix">
                                <img src={item.img} alt=""/>
                                <div className="product-info">
                                    <div className="buy-btn"><button onClick={clickTobuy}>mua</button></div>
                                    <div className="product-title">{item.tyle}</div>
                                    <div className="product-name">{item.name}</div>
                                    <div className="product-price">{item.prices}$</div>
                                </div>
                            </div>
                              </li>)
                    })}
                </ul>
            </div> 
     </div> </>}
     {listbag && listbag.length>0 && <>
     <div className="hot-product"><h3>Túi xách</h3></div>
        <div className="product">
            <div className="product-sub">
                <ul className="product-list">
                    
                    {listbag && listbag.length>0 && listbag.map((item,index)=>{
                        return (<li key={index}>
                                
                            <div className="fix">
                                <img src={item.img} alt=""/>
                                <div className="product-info">
                                    <div className="buy-btn">
                                        <button onClick={clickTobuy}>mua</button>
                                    </div>
                                    <div className="product-title">{item.tyle}</div>
                                    <div className="product-name">{item.name}</div>
                                    <div className="product-price">{item.prices}$</div>
                                </div>
                            </div>
                              </li>)
                    })}
                </ul>
            </div> 
     </div>
     </>}
    <div className="footer">
        <div className="footer-margin">
            <div className="footer-services">
                <span className="top">CHĂM SÓC KHÁCH HÀNG</span>
                <ul>
                    <li><a href="https://www.google.com/">Chính Sách Bảo Hành</a></li>
                    <li><a href="https://www.google.com/">Trung Tâm Trợ Giúp</a></li>
                    <li><a href="https://www.google.com/">Trả Hàng va Hoàn Tiền</a></li>
                    <li><a href="https://www.google.com/">Vận Chuyển</a></li>
                    <li><a href="https://www.google.com/">Hướng Dẫn Mua Hàng</a></li>
                    <li><a href="https://www.google.com/">Chính Sách Khác</a></li>
                </ul>
            </div>
        </div>
        <div className="footer-margin1">
            <div className="footer-services">
                <span className="top">Theo dõi chúng tôi trên</span>
                <ul>
                    <li><a href="https://www.google.com/">Facebook</a></li>
                    <li><a href="https://www.google.com/">Instagram</a></li>
                    <li><a href="https://www.google.com/">LinkedIn</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div className="mes"><img src={call} alt=""/></div>
   
       
    </>
        )
    }
 }

export default withRouter(Page);