/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom";
import { SiEbox } from "react-icons/si";
import { GoOrganization } from "react-icons/go";
import { FaRegUserCircle } from "react-icons/fa";
import ProfileModal from "../modal/profile-modal";

export default function ShiftHeader() {

    return (
        <>
            
            <nav class="navbar navbar-expand-lg" style={{ "fontFamily": "Roboto, sans-serif" }}>
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <SiEbox color="#2466FF" size={24} className="me-2" />
                        <span className="text-muted">task</span>shift
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    
                                        <button class="btn btn-md bg-light text-muted" aria-expanded="false" style={{ "borderRadius": "30px" }}>
                                            <GoOrganization /> John Org
                                        </button>
                                </a>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <Link to="/signin">
                                <button class="btn btn-md me-2" style={{ "borderRadius": "20px" }}>Signout</button>
                            </Link>
                            <Link>
                                <button class="btn btn-md" style={{ "backgroundColor": "#2466FF", "color": "white", "borderRadius": "20px" }} data-bs-toggle="modal" data-bs-target="#profileModal"><FaRegUserCircle className="me-2" />Profile</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </nav>

            <ProfileModal />
        </>
    )
}