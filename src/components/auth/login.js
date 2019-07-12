import React, { Component } from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
        };
    
        this.HandleChange= this.HandleChange.bind(this);
        this.HandleSubmit= this.HandleSubmit.bind(this);
    }

    HandleChange(event) {
        console.log("handle change", event);
    }
    
    handleSubmit(event) {
        console.log("handle submit", event);
    }

    render() {
        return (
            <div>
                <h1>LOGIN TO ACCESS YOUR DASHBOARD</h1>

                <form onSubmit={this.handleSubmit}>
                    <input
                     type="email"
                     name="email"
                     placeholder="Your email"
                     value={this.state.email}
                     onChange={this.HandleChange}
                    />

                    <input 
                     type="password"
                     name="password"
                     placeholder="Your password"
                     value={this.state.password}
                     onChange={this.HandleChange}
                    />

                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}