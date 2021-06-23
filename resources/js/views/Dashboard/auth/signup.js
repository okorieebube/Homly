import React, { Component } from 'react'
import SignUpForm from './components/SignUpForm'
import Nav  from "../../shared/components/navbar/navbar";
import Footer from '../../shared/components/footer/footer';

export default class SignUp extends Component {
    render() {
        return (
            <div>
                <Nav/>

                <main id="content">
                    <section class="py-7">
                        <div class="container">
                            <div class="row justify-content-center">
                                <SignUpForm />         
                            </div>
                        </div>
                    </section>
                </main>

                <Footer/>
            </div>
        )
    }
}
