/* eslint-disable react/no-unknown-property */
import { FaCaretDown } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

export default function ProjectCard() {
    const [status, setStatus] = useState({
        text: "Destroy",
        color: "danger"
    });
    const dropdownRef = useRef(null);

    const handleStatusChange = (newStatus, color) => {
        setStatus({
            text: newStatus,
            color: color
        });
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                const dropdown = dropdownRef.current.querySelector('.dropdown-menu');
                if (dropdown) {
                    dropdown.classList.remove('show');
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="card h-100 border-0" style={{ borderRadius: "20px" }}>
                <div className="card-body">
                    <div className="mb-3">
                        <div className="d-flex justify-content-between w-100">
                            <div className="dropdown" ref={dropdownRef}>
                                <span
                                    className={`badge bg-${status.color} text-white`}
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    {status.text} <FaCaretDown />
                                </span>
                                <ul className="dropdown-menu border-0 shadow-sm" style={{ minWidth: "120px", borderRadius: "20px" }}>
                                    <li>
                                        <a className="dropdown-item" href="#" onClick={() => handleStatusChange("Ongoing", "info")}>
                                            <span className="badge bg-info text-white">Ongoing</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#" onClick={() => handleStatusChange("Finished", "success")}>
                                            <span className="badge bg-success text-white">Finished</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#" onClick={() => handleStatusChange("Destroy", "danger")}>
                                            <span className="badge bg-danger text-white">Destroy</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* <button className="btn btn-sm bg-light text-muted" style={{ "borderRadius": "30px", fontSize: "12px" }}>
                                <b>Due</b> on 2/10/2025
                            </button> */}
                        </div>
                    </div>
                    <h5 className="card-title" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '90%' }}>Project One</h5>
                    <p className="card-text text-muted fw-light" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '90%' }}>
                        Project is about shjjdsgjdhfjdjskfd
                    </p>
                    <hr />
                    <div className="d-flex justify-content-between w-100">
                        <div>
                            <button className="btn btn-sm bg-light text-muted" style={{ "borderRadius": "30px", fontSize: "12px" }}>
                                <b><FaUsers className="me-1" size={15} />100</b>
                            </button>
                        </div>
                        <div>
                            <button className="btn btn-sm btn-outline-danger" style={{ "borderRadius": "30px" }}>
                                <FaTrashAlt className="me-2" />Trash
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}