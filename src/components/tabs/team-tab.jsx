/* eslint-disable react/no-unknown-property */
import { FaUsers } from "react-icons/fa";
import { CiFolderOn } from "react-icons/ci";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import TeamNavbar from "../header/team-navbar";
export default function TeamTab() {

    const [selectedOrg, setSelectedOrg] = useState("untitled");
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
                        <p className="text-muted mb-0">Switching projects...</p>
                    </div>
                </div>
            )}

            <div className="mt-5">

                <p className="text-muted text-center" style={{ "fontSize": "1.2rem" }}>
                    Bring your team together and collaborate<br />on your projects by inviting members
                </p>

                <div className="d-flex justify-content-center">
                    <div className="card bg-light border-0 mx-3" style={{ width: "100%", maxWidth: "800px", borderRadius: "20px", height: "500px" }}>
                        <div className="card-body p-0" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <h5 className="card-title">
                                <div className="d-flex justify-content-between w-100 p-3">
                                    <div className="dropdown">
                                        <button class="btn btn-md bg-white text-muted" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ "borderRadius": "30px" }}>
                                            <CiFolderOn /> {selectedOrg} <FaCaretDown />
                                        </button>

                                        <ul class="dropdown-menu border-0 shadow-sm text-muted" style={{ "borderRadius": "20px" }}>
                                            <li>
                                                <a class="dropdown-item text-muted" href="#" onClick={() => handleOrgSelect("John project")}>
                                                    <CiFolderOn /> John project
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item text-muted" href="#" onClick={() => handleOrgSelect("Dark Angel")}>
                                                    <CiFolderOn /> Dark Angel
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item text-muted" href="#" onClick={() => handleOrgSelect("Cheribum$")}>
                                                    <CiFolderOn /> Cheribum$
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <button class="btn btn-md text-muted" style={{ "borderRadius": "30px", backgroundColor: "#FBFEFF" }}>
                                        Add memebers <FaUsers size={20} />
                                    </button>
                                </div>
                            </h5>

                            <TeamNavbar />

                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}