import React from 'react'

const LoginPage = () => {
  return (
    <div class="container">
    <input type="checkbox" id="signup_toggle"/>
    <form class="form">
        <div class="form_front">
            <div class="form_details">Login</div>
            <input placeholder="Username" class="input" type="text"/>
            <input placeholder="Password" class="input" type="text"/>
            <button class="btn">Login</button>
            <span class="switch">Don't have an account? 
                <label class="signup_tog" for="signup_toggle">
                    Sign Up
                </label>
            </span>
            </div>
        <div class="form_back">
            <div class="form_details">SignUp</div>
            <input placeholder="Firstname" class="input" type="text"/>
            <input placeholder="Username" class="input" type="text"/>
            <input placeholder="Password" class="input" type="text"/>
            <input placeholder="Confirm Password" class="input" type="text"/>
            <button class="btn">Signup</button>
            <span class="switch">Already have an account? 
                <label class="signup_tog" for="signup_toggle">
                    Sign In
                </label>
            </span>
        </div>
    </form>
</div>

  )
}

export default LoginPage