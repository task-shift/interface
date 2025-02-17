/* eslint-disable react/no-unknown-property */
import { FaUsers } from "react-icons/fa";

export default function DepartmentCard() {


    return (
        <>

            <div className="card h-100 border-0" style={{ borderRadius: "20px" }}>
                <div className="card-body">
                    <div className="mb-3">
                        <div className="d-flex justify-content-between w-100">
                            

                            {/* <button className="btn btn-sm bg-light text-muted" style={{ "borderRadius": "30px", fontSize: "12px" }}>
                                <b>Due</b> on 2/10/2025
                            </button> */}
                        </div>
                    </div>
                    <h5 className="card-title" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '90%' }}>Department One</h5>
                    <p className="card-text text-muted fw-light" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '90%' }}>
                        This is a department
                    </p>
                    <hr />
                    <div className="d-flex justify-content-between w-100">
                        <div>
                            <button className="btn btn-sm bg-light text-muted" style={{ "borderRadius": "30px", fontSize: "12px" }}>
                                <b><FaUsers className="me-1" size={15} />100 in department</b>
                            </button>
                        </div>
                        {/* <div>
                            <button className="btn btn-sm btn-outline-danger" style={{ "borderRadius": "30px" }}>
                                <FaTrashAlt className="me-2" />Trash
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>

        </>
    )
}