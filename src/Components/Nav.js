import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state={
            tempValue: '',
            statusBtn: true,
            pointSort:''
            
        }
    }

    isChange = (event) => {
        this.setState({
            tempValue: event.target.value
        });
        this.props.getSearchText(this.state.tempValue);
    }
    
    showBtn = () => {
        if(this.state.statusBtn === true){
            return(
                <div  className="nav-link login" >
                    <i className="fa fa-sign-in" />
                    <NavLink onClick={()=>this.changeBtn()} to="/login">Login</NavLink>
                </div>
            )
        }
        else{
            return (
                <div className="nav-link login">
                    <i className="fa fa-sign-out" />
                    <NavLink onClick={()=>this.changeBtn()} to="/">Logout</NavLink>
                </div>
            )
        }
    }
    changeBtn = () => {
        this.setState({
            statusBtn: !this.state.statusBtn
        });
        
    }
    isChangeSort = (event) => {
        this.setState({
            pointSort: event.target.value
        });
        this.props.getSortPoint(this.state.pointSort);
    }

    render() {
        return (
            <div className="menu">
                <div className="container-fluid">
                    <div className="row ">
                    <nav className="navbar navbar-expand-lg navbar-light w-100">
                        <a className="navbar-brand" href="/">
                            <img src="https://www.holocom.com/images/logo-top.png" alt="logo big" className="img-fluid" />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                        </button>
                        <form className="form-inline my-2 my-lg-0 search">
                            <i  className="fa fa-search" />
                            <input onChange={(event) => this.isChange(event)} className="form-control mr-sm-2" name="Search" type="text" placeholder="Search stories title, url or author" />  
                        </form>
                        <div className="collapse navbar-collapse" id="menu">
                        <div className="menu_left w-100">
                            <ul className="navbar-nav mt-2 mt-lg-0">
                            <li className="nav-item d-flex align-items-center">
                                <a className="nav-link" href="/">
                                <span className="text-black">by</span>
                                <img src="img/01.png" alt="logo small" /></a>
                            </li>
                            <li className="nav-item dropdown d-flex align-items-center">
                                <a className="nav-link dropdown-toggle sort" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fa fa-sort-amount-asc" />
                                    <span> Sort</span>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                                    {/* <SortPoint getSortPoint={this.props.getSortPoint}/> */}
                                    <li className="dropdown-item">Point
                                        <select onChange={(event)=>this.isChangeSort(event)} name="pointSort" className="form-select submenu dropdown-menu" size="2">
                                            <option  className="dropdown-item" value="pointAsc">Point Decrease</option>
                                            <option className="dropdown-item" value="pointDesc">Point Increase </option>
                                        </select>
                                    </li>

                                </ul>
                            </li>
                            <li className="nav-item d-flex align-items-center">
                                {
                                    this.showBtn()
                                }
                               
                            </li>
                            </ul>
                        </div>
                        </div>
                    </nav>
                    </div>
                </div>
            </div>

        );
    }
}

export default Nav;