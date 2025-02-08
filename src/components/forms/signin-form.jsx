/* eslint-disable react/no-unknown-property */
export default function SigninForm() {
    return (
        <>
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
                    Remember me
                </label>
            </div>
            <button class="btn w-100 py-2" type="submit" style={{ "backgroundColor": "#2466FF", "color": "white", "borderRadius": "20px" }}>Sign in</button>
            <a href=""><small>Sign up here</small></a>
        </>
    )
}