import React, { Component } from 'react';
import $ from 'jquery'; 

class LogInOut extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleClickMb = this.handleClickMb.bind(this);
    }
    handleClick(event) {
        $(".img-btn").parent().parent().parent().parent().children().toggleClass('s-signup');
    }
    handleClickMb(event) {
        $(".sign-in-up").parent().parent().children().toggleClass('s-signup');
    }
    render() {
        return (
            <div className="container mt-5 mb-3">
                <div className="row justify-content-center">
                    <div className="col-sm-8 ">
                        <div className="cont">
                            <div onClick={this.handleClickMb} className="sign-in-up">
                                <div  className="img-btn">
                                    <span className="m-up">Sign Up</span>
                                    <span className="m-in">Sign In</span>
                                </div>
                            </div>
                            <div className="form sign-in">
                                <h2>Sign In</h2>
                                <label>
                                    <span>Email Address</span>
                                    <input type="email" name="email" />
                                </label>
                                <label>
                                    <span>Password</span>
                                    <input type="password" name="password" />
                                </label>
                                <button className="submit" type="buttton">Sign In</button>
                                <p className="forget-pass">Forgot Pasword ?</p>
                                <div className="social-media">
                                    <ul>
                                        <li><a href="#"><img src="img/facebook.png" alt="" /></a></li>
                                        <li><a href=""><img src="img/twitter.png" alt="" /></a></li>
                                        <li><a href=""><img src="img/linkedin.png" alt="" /></a></li>
                                        <li><a href=""><img src="img/instagram.png" alt="" /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sub-cont">
                                <div className="img">
                                    <div className="img-text m-up">
                                    <h2>New here?</h2>
                                    <p>Sign up and discover graet amount of new opptunitties!</p>
                                    </div>
                                    <div className="img-text m-in">
                                    <h2>One of us?</h2>
                                    <p>If you already has an account, just sign in. We've missed you! </p>
                                    </div>
                                    <div onClick={this.handleClick} className="img-btn">
                                    <span className="m-up">Sign Up</span>
                                    <span className="m-in">Sign In</span>
                                    </div>
                                </div>
                                <div className="form sign-up">
                                    <h2>Sign Up</h2>
                                    <label>
                                        <span>Name</span>
                                        <input type="text" />
                                    </label>
                                    <label>
                                        <span>Email</span>
                                        <input type="email" />
                                    </label>
                                    <label>
                                        <span>Password</span>
                                        <input type="password" />
                                    </label>
                                    <label>
                                        <span>Confirm Password</span>
                                        <input type="password" />
                                    </label>
                                    <button className="submit" type="buttton">Sign Up Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default LogInOut;