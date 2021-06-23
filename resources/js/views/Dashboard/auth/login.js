import React, { Component } from 'react';
import Nav  from "../../shared/components/navbar/navbar";
import LoginForm from './components/LoginForm';
import Footer from '../../shared/components/footer/footer';

export default class Login extends Component {
    render() {
        return (
            <div>
                <Nav/>

                <main id="content">
                    <section class="py-7">
                        <div class="container">
                            <div class="row justify-content-center">
                                <LoginForm />         
                            </div>
                        </div>
                    </section>
                </main>

                <Footer/>
            </div>
        )
    }
}
