import React from 'react'
import "./Auth.css";

export default function Auth() {
    return (
        <div className="signIn" >
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
            <div className="signIn__wrapper">
                <h1 className="title" >Sign-in</h1>
                <p><label htmlFor="email"> <span>E-mail</span> <input name="email" type="email" className="email" /></label></p>
                <p><label htmlFor="password"> <span>Password</span> <input name="password" type="password" className="password" /></label></p>
                <p><button>Sign In</button></p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus itaque maxime obcaecati, corporis laudantium perferendis earum incidunt in culpa deserunt, sit qui voluptates provident eos quod laboriosam iusto est sint!</p>
                <p><button>Create your Amazon Account</button></p>
            </div>
        </div>
    )
}
