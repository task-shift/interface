/* eslint-disable react/no-unknown-property */
import { FaExclamation } from "react-icons/fa";

export default function AgentSetupCard() {
    return (
        <div className="h-100">
            <div className="d-flex justify-content-center align-items-center h-100">
                <div className="card border-0 shadow-sm my-4" style={{ width: '400px', borderRadius: '20px' }}>
                    <div className="card-body p-4" style={{ display: 'flex', flexDirection: 'column', height: '450px' }}>
                        <h5 className="mb-4">Setup your agent</h5>
                        <p className="text-muted mb-2 p-2 bg-light rounded" style={{ borderRadius: '20px' }}>Your agent is capable of reaching out to your team, asking for updates and reporting back to you, from your team communication channel</p>

                        <div className="timeline position-relative" style={{ flex: 1, overflowY: 'auto' }}>
                            {/* org */}
                            <div className="timeline-item d-flex mb-4">
                                <div className="timeline-icon bg-light text-danger rounded-circle d-flex align-items-center justify-content-center"
                                    style={{ width: '32px', height: '32px', zIndex: 1 }}>
                                    <FaExclamation />
                                </div>
                                <div className="timeline-content ms-3">
                                    <div className="mb-2">Team Communication channel</div>
                                    <div class="input-group mb-3">
                                        <select class="form-control" aria-label="Communication channel" aria-describedby="button-addon2" style={{ "borderRadius": "35px 0 0 35px" }}>
                                            <option value="">Select channel</option>
                                            <option value="slack">WhatsApp</option>
                                            <option value="teams">Telegram</option>
                                            <option value="discord">Slack</option>
                                        </select>
                                        <button class="btn btn-outline-primary" type="button" id="button-addon2" style={{ "borderRadius": "0 35px 35px 0" }}>Save</button>
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
                                    <div className="mb-2">Add taskBot WhatsApp to your group</div>
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" value="+2348079767595" aria-label="Organization name" aria-describedby="button-addon2" style={{ "borderRadius": "35px 0 0 35px", backgroundColor: "#f8f9fa" }} readOnly />
                                        <button class="btn btn-outline-primary" type="button" id="button-addon2" style={{ "borderRadius": "0 35px 35px 0" }}>Copy</button>
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
                                    <div className="mb-2">Test your agent</div>
                                    <div class="d-grid gap-2">
                                       <button class="btn btn-outline-primary" type="button" id="button-addon2" style={{ "borderRadius": "35px" }}>Send Welcome Message</button>
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
    )
}