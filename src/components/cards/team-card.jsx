import { PiSuitcaseLight } from "react-icons/pi";
import { FaTrashAlt } from "react-icons/fa";

export default function TeamCard() {
    return (
        <>
            <div className="card h-100 border-0" style={{ borderRadius: "20px", width: "300px" }}>
                <div className="card-body">
                    <div className="d-flex align-items-center w-100">
                        <div className="me-3">
                            <img
                                src="https://randomuser.me/api/portraits/men/75.jpg"
                                alt="Profile"
                                style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                        <div>
                            <h6 className="mb-0" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '200px' }}>John Doe</h6>
                            <p className="text-muted mb-0" style={{ fontSize: '0.9rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '200px' }}>john.doe@gmail.comdkdkkdkdkddidiid</p>
                        </div>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between w-100">
                        <div>
                            <button className="btn btn-sm bg-light text-muted" style={{ "borderRadius": "30px", fontSize: "12px" }}>
                                <PiSuitcaseLight size={20} /> software developer
                            </button>
                        </div>
                        <div>
                            <button className="btn btn-sm btn-outline-danger" style={{ "borderRadius": "30px" }}>
                                <FaTrashAlt className="me-1"/>Remove
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}