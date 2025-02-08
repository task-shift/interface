/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom"
export default function SignupForm() {
    return (
        <>
            <div class="form-floating">
                <div class="input-group">
                    <span class="input-group-text" id="basic-addon1">@</span>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
            </div>
            <div class="form-floating">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
            </div>

            <div class="form-check text-start my-3">
                <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                    Agree to terms and conditions
                </label>
            </div>
            <button class="btn w-100 py-2" type="submit" style={{ "backgroundColor": "#2466FF", "color": "white", "borderRadius": "20px" }}>Sign in</button>
            <Link to="/signin"><small>Sign in here</small></Link>
        </>
    )
}