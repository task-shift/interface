/* eslint-disable react/no-unknown-property */
import { SiEbox } from "react-icons/si";
export default function Header() {
    return (
        <>
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <SiEbox color="#2466FF" size={24} className="me-2"/>
                       <span className="text-muted">task</span>shift
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li> */}
                            <li class="nav-item">
                                <a class="nav-link" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact us</a>
                            </li>
                            
                        </ul>
                        <form class="d-flex" role="search">
                            <button class="btn btn-md me-2" >Login</button>
                            <button class="btn btn-md" style={{"backgroundColor": "#2466FF", "color": "white", "borderRadius": "20px"}}>Book a demo</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}