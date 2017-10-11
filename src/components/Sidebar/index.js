import React from 'react';
import {Link} from 'react-router-dom';
import './index.less';
export default class Sidebar extends React.Component{
    handleClick=(e,_id)=>{
        e=e||window.event;
        if(e.preventDefault){
            e.preventDefault();
        }else{
            e.returnValue=false;
        }
        this.props.changeArticle(_id);
    }
    render(){
        return(
            <div id="sidebar">
                <h1><a href="">simple blog</a></h1>
                <p>author：<a href="">Franklyan</a></p>
                <p>email：franklyan24@gmain.com</p>
                <p>
                    <Link to="/login">admin login:</Link>
                    {sessionStorage.getItem('__token__')&&sessionStorage.getItem('__username__')=='host'?<Link to='/write/new'>articles send</Link>:null}
                </p>
                <b style={{lineHeight:'40px'}}>contents：</b>
                <ol>
                    {this.props.articles.length>0?this.props.articles.map((item,index)=>(
                        <li key={index}><a onClick={(e) =>this.handleClick(e,item._id)}>{item.title}</a></li>
                    )):null}
                </ol>
            </div>
        )
    }
}