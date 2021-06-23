import React, { Component } from 'react'
import Client from '../../../../services/http-client'

export default class LoginForm extends Component  {
        
        constructor(){
            super()
        }

        async submitForm(e) {
            e.preventDefault()
            let url = "http://localhost:8000/api/login"
            let client = new Client(); 
            let submit = await client.get({url: url});
            console.log(submit);
        }

        render(){
            return (
                <div class="col-lg-7">
                    <div class="card border-0 shadow-xxs-2 mb-6">
                        <div class="card-body px-8">
                        <h2 class="card-title fs-30 font-weight-600 text-dark lh-16 mb-2">Log In</h2>
                        <p class="mb-4">Already have an account? <a href="#" class="text-heading hover-primary"><u>Log
                                in</u></a></p>
                        <form class="form" onSubmit={this.submitForm}>
                            <div class="form-group mb-4">
                            <label for="username-1">Email</label>
                            <input type="text" class="form-control form-control-lg border-0"
                                            id="username-1" name="username"
                                            placeholder="Your email" />
                            </div>
                            <div class="form-group mb-4">
                            <label for="password-2">Password</label>
                            <div class="input-group input-group-lg">
                                <input type="text" class="form-control border-0 shadow-none fs-13"
                                                id="password-2" name="password"
                                                placeholder="Password" />
                                <div class="input-group-append">
                                <span class="input-group-text bg-gray-01 border-0 text-body fs-18">
                                    <i class="far fa-eye-slash"></i>
                                </span>
                                </div>
                            </div>
                            </div>
                            <div class="d-flex mb-4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="remember-me-1" name="remember" />
                                <label class="form-check-label" for="remember-me-1">
                                Stay signed in
                                </label>
                            </div>
                            <a href="password-recovery.html" class="d-inline-block ml-auto fs-13 lh-2 text-body">
                                <u>Forgot your password?</u>
                            </a>
                            </div>
                            <button type="submit" class="btn btn-primary btn-lg btn-block rounded">Log in</button>
                        </form>
                        <div class="divider text-center my-2">
                            <span class="px-4 bg-white lh-17 text text-heading">
                            or Log-in with
                            </span>
                        </div>
                        <div class="row no-gutters mx-n2">
                            <div class="col-sm-6 px-2 mb-4">
                            <a href="#" class="btn btn-lg btn-block text-heading border px-0 bg-hover-accent">
                                <img src="images/facebook.png" alt="Google" class="mr-2" />
                                Facebook
                            </a>
                            </div>
                            <div class="col-sm-6 px-2 mb-4">
                            <a href="#" class="btn btn-lg btn-block text-heading border px-0 bg-hover-accent">
                                <img src="images/google.png" alt="Google" class="mr-2"/>
                                Google
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            )
        }
        
}