/* eslint-disable react/no-unknown-property */
import { FaExclamation } from "react-icons/fa";

export default function GetStartedCard() {
    return (
        <div className="h-100">
            <div className="d-flex justify-content-center align-items-center h-100">
                <div className="card border-0 shadow-sm my-4" style={{ width: '400px', borderRadius: '20px' }}>
                    <div className="card-body p-4">
                        <h3 className="mb-4">Getting Started</h3>

                        <div className="timeline position-relative">
                            {/* org */}
                            <div className="timeline-item d-flex mb-4">
                                <div className="timeline-icon bg-light text-danger rounded-circle d-flex align-items-center justify-content-center"
                                    style={{ width: '32px', height: '32px', zIndex: 1 }}>
                                    <FaExclamation />
                                </div>
                                <div className="timeline-content ms-3">
                                    <div className="fw-bold mb-2">Create your first organization</div>
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Organization name" aria-label="Organization name" aria-describedby="button-addon2" />
                                        <button class="btn btn-outline-primary" type="button" id="button-addon2">Create</button>
                                    </div>

                                </div>
                            </div>


                            {/* project */}
                            <div className="timeline-item d-flex mb-4">
                                <div className="timeline-icon bg-light text-danger rounded-circle d-flex align-items-center justify-content-center"
                                    style={{ width: '32px', height: '32px', zIndex: 1 }}>
                                    <FaExclamation />
                                </div>
                                <div className="timeline-content ms-3">
                                    <div className="fw-bold mb-2">Create a project</div>
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Project name" aria-label="Organization name" aria-describedby="button-addon2" />
                                        <button class="btn btn-outline-primary" type="button" id="button-addon2">Create</button>
                                    </div>
                                </div>
                            </div>

                            {/* team member */}
                            <div className="timeline-item d-flex mb-4">
                                <div className="timeline-icon bg-light text-danger rounded-circle d-flex align-items-center justify-content-center"
                                    style={{ width: '32px', height: '32px', zIndex: 1 }}>
                                    <FaExclamation />
                                </div>
                                <div className="timeline-content ms-3">
                                    <div className="fw-bold mb-2">Add a team member</div>
                                    <div class="input-group mb-3">
                                        <input type="email" class="form-control" placeholder="Team member email" aria-label="Organization name" aria-describedby="button-addon2" />
                                        <button class="btn btn-outline-primary" type="button" id="button-addon2">Create</button>
                                    </div>
                                </div>
                            </div>

                            {/* Vertical Line */}
                            <div className="timeline-line position-absolute"
                                style={{
                                    left: '16px',
                                    top: '32px',
                                    bottom: '32px',
                                    width: '2px',
                                    backgroundColor: '#e9ecef',
                                    zIndex: 0
                                }}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}