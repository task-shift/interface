/* eslint-disable react/no-unknown-property */
import { SiEbox } from "react-icons/si";
import Header from "../../components/header/header"
import SigninForm from "../../components/forms/signin-form"
import { Link } from "react-router-dom";
export default function Signin() {
    return (
        <>
            <Header />
            <body class="d-flex align-items-center justify-content-center vh-100 bg-body-tertiary">
                <main class="form-signin w-100 m-auto shadow-hover">
                    <form>
                        <Link to="/">
                            <SiEbox color="#2466FF" size={50} className="mb-4" />
                        </Link>

                        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

                        <SigninForm />
                        <p class="mt-5 mb-3 text-body-secondary">&copy; gods 2025</p>
                    </form>
                </main>
            </body>
        </>
    )
}