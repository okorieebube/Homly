import React from 'react'

export default function SignUpForm() {
    return (
        <div class="col-lg-7">
            <div class="card border-0 shadow-xxs-2">
            <div class="card-body px-6 py-6">
                <h2 class="card-title fs-30 font-weight-600 text-dark lh-16 mb-2">Sign Up</h2>
                <p class="mb-4">Don’t have an account yet? <a href="#" class="text-heading hover-primary"><u>Sign
                    up for free</u></a></p>
                <form class="form">
                <div class="form-row mx-n2">
                    <div class="col-sm-6 px-2">
                    <div class="form-group">
                        <label for="firstName" class="text-heading">First Name</label>
                        <input type="text" name="firs-name"
                                            class="form-control form-control-lg border-0"
                                            id="firstName" placeholder="First Name" />
                    </div>
                    </div>
                    <div class="col-sm-6 px-2">
                    <div class="form-group">
                        <label for="lastName"
                                            class="text-heading">Last Name</label>
                        <input type="text" name="last-name"
                                            class="form-control form-control-lg border-0"
                                            id="lastName" placeholder="Last Name" />
                    </div>
                    </div>
                </div>
                <div class="form-row mx-n2">
                    <div class="col-sm-6 px-2">
                    <div class="form-group">
                        <label for="email" class="text-heading">Email</label>
                        <input type="text"
                                            class="form-control form-control-lg border-0"
                                            id="email" placeholder="Your Email" name="email" />
                    </div>
                    </div>
                    <div class="col-sm-6 px-2">
                    <div class="form-group">
                        <label for="user-role"
                                            class="text-heading">User Role
                        </label>
                        <select class="form-control border-0 shadow-none form-control-lg selectpicker" title="Select" data-style="btn-lg h-52" id="user-role" name="user-role">
                            <option>Admin</option>
                            <option>Customer</option>
                            <option>Agent</option>
                        </select>
                    </div>
                    </div>
                </div>
                <div class="form-row mx-n2">
                    <div class="col-sm-6 px-2">
                    <div class="form-group">
                        <label for="password-1" class="text-heading">Password</label>
                        <div class="input-group input-group-lg">
                        <input type="text" class="form-control border-0 shadow-none"
                                                id="password-1" name="password"
                                                placeholder="Password" />
                        <div class="input-group-append">
                            <span class="input-group-text bg-gray-01 border-0 text-body fs-18">
                            <i class="far fa-eye-slash"></i>
                            </span>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col-sm-6 px-2">
                    <div class="form-group">
                        <label for="re-password">Re-Enter Password</label>
                        <div class="input-group input-group-lg">
                        <input type="text" class="form-control border-0 shadow-none"
                                                id="re-password" name="re-password"
                                                placeholder="Password" />
                        <div class="input-group-append">
                            <span class="input-group-text bg-gray-01 border-0 text-body fs-18">
                            <i class="far fa-eye-slash"></i>
                            </span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary btn-lg btn-block rounded">Register</button>
                </form>
                <div class="divider text-center my-2">
                <span class="px-4 bg-white lh-17 text text-heading">
                    or Sign Up with
                </span>
                </div>
                <div class="row no-gutters mx-n2">
                <div class="col-sm-6 px-2 mb-4">
                    <a href="#"
                                class="btn btn-lg btn-block text-heading border px-0 rounded bg-hover-accent">
                    <img src="images/facebook.png" alt="Google" class="mr-2" />
                    Facebook
                    </a>
                </div>
                <div class="col-sm-6 px-2 mb-4">
                    <a href="#"
                                class="btn btn-lg btn-block text-heading border px-0 rounded bg-hover-accent">
                    <img src="images/google.png" alt="Google" class="mr-2" />
                    Google
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}
