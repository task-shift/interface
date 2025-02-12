import { FaCheck } from "react-icons/fa6";
import { IoReload } from "react-icons/io5";

export default function TeamInvitedCard() {

    return (
        <>
            <div className="card h-100 border-0" style={{ borderRadius: "20px", width: "100%", marginBottom: "1rem" }}>
                <div className="card-body">
                    <div className="d-flex align-items-center w-100">
                        <div className="me-3">
                            <div
                                style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                    backgroundColor: '#e0e0e0',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 14C16.42 14 20 15.79 20 18V20H4V18C4 15.79 7.58 14 12 14Z" fill="#9E9E9E"/>
                                </svg>
                            </div>
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                            <h6 className="mb-0" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>John Doe</h6>
                            <p className="text-muted mb-0" style={{ fontSize: '0.9rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>john.doe@gmail.comdkdkkdkdkddidiid</p>
                        </div>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between w-100">
                        <button className="btn btn-sm bg-success text-white" style={{ borderRadius: "30px", fontSize: "12px", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '120px' }}>
                            Email sent <FaCheck />
                        </button>

                        <button className="btn btn-sm bg-light text-muted" style={{ borderRadius: "30px", fontSize: "12px", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '120px' }}>
                            Resend Invite <IoReload />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )

}