/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom";
import { SiEbox } from "react-icons/si";
import { GoOrganization } from "react-icons/go";
import { FaCaretDown } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";

export default function ShiftHeader() {
    const [selectedOrg, setSelectedOrg] = useState("my-organization");
    const [isSwitching, setIsSwitching] = useState(false);

    const handleOrgSelect = (orgName) => {
        setIsSwitching(true);
        setTimeout(() => {
            setSelectedOrg(orgName);
            setIsSwitching(false);
        }, 2000); // Simulate a 2-second switch process
    };

    return (
        <>
            {isSwitching && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backdropFilter: 'blur(4px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    zIndex: 1000,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <div style={{
                        backgroundColor: 'white',
                        padding: '20px 40px',
                        borderRadius: '20px',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <p className="text-muted mb-0">Switching organization...</p>
                    </div>
                </div>
            )}
            
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
                                    <div className="dropdown">
                                        <button class="btn btn-md bg-light text-muted" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ "borderRadius": "30px" }}>
                                            <GoOrganization /> {selectedOrg} <FaCaretDown />
                                        </button>

                                        <ul class="dropdown-menu border-0 shadow-sm text-muted" style={{ "borderRadius": "20px" }}>
                                            <li>
                                                <a class="dropdown-item text-muted" href="#" onClick={() => handleOrgSelect("John Org")}>
                                                    <GoOrganization /> John Org
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item text-muted" href="#" onClick={() => handleOrgSelect("Dark Angel")}>
                                                    <GoOrganization /> Dark Angel
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item text-muted" href="#" onClick={() => handleOrgSelect("Cheribum$")}>
                                                    <GoOrganization /> Cheribum$
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <Link to="/signin">
                                <button class="btn btn-md me-2" style={{ "borderRadius": "20px" }}>Signout</button>
                            </Link>
                            <Link to="/signup">
                                <button class="btn btn-md" style={{ "backgroundColor": "#2466FF", "color": "white", "borderRadius": "20px" }}><FaRegUserCircle className="me-2" />Profile</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}