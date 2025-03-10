/* eslint-disable react/no-unknown-property */
import { FaUsers } from "react-icons/fa";

export default function DepartmentCard() {
    return (
        <div className="card h-100 border-0" style={{ borderRadius: "20px" }}>
            <div className="card-body">
                <div className="d-flex align-items-start">
                    <div 
                        className="me-3 d-flex align-items-center justify-content-center"
                        style={{
                            backgroundColor: '#e9f0ff',
                            borderRadius: '50%',
                            minWidth: '40px',
                            height: '40px',
                            padding: '8px'
                        }}>
                        <FaUsers 
                            size={24}
                            color="#2466FF"
                        />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                        <h5 className="card-title mb-1" style={{ 
                            whiteSpace: 'nowrap', 
                            overflow: 'hidden', 
                            textOverflow: 'ellipsis' 
                        }}>
                            Department One
                        </h5>
                        <p className="card-text text-muted fw-light mb-0" style={{ 
                            whiteSpace: 'nowrap', 
                            overflow: 'hidden', 
                            textOverflow: 'ellipsis' 
                        }}>
                            This is a department
                        </p>
                    </div>
                </div>
                <hr className="my-3" />
                <div className="d-flex justify-content-between w-100">
                    <div>
                        <button className="btn btn-sm bg-light text-muted" style={{ 
                            borderRadius: "30px", 
                            fontSize: "12px" 
                        }}>
                            <b>
                                <div 
                                    className="me-1 d-inline-flex align-items-center justify-content-center"
                                    style={{
                                        backgroundColor: '#e9f0ff',
                                        borderRadius: '50%',
                                        width: '24px',
                                        height: '24px',
                                        padding: '4px'
                                    }}>
                                    <FaUsers 
                                        size={15} 
                                        color="#2466FF"
                                    />
                                </div>
                                100 in department
                            </b>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}