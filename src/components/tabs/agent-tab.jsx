import { SiEbox } from "react-icons/si";
import { IoSendSharp } from "react-icons/io5";

export default function AgentTab() {
    return (
        <>
            <div className="mt-5">
                <p className="text-muted text-center" style={{ "fontSize": "1.2rem" }}>
                    When assigned a task, an agent tracks your <br /> progress and reports to your assigner.
                </p>

                <div className="d-flex justify-content-center">
                    <div className="card bg-light border-0 mx-3" style={{ width: "100%", maxWidth: "800px", borderRadius: "20px", height: "500px" }}>
                        <div className="card-body p-0" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <h5 className="card-title"></h5>
                            <div className="container h-100 d-flex flex-column">
                                <div className="chat-container" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                                    <div className="chat-messages" style={{ flex: 1, overflowY: 'auto', padding: '1rem' }}>
                                        <div className="message agent-message mb-3 d-flex align-items-start">
                                            <div className="me-2" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <SiEbox size={20} color="#2466FF" />
                                            </div>
                                            <div className="bg-white p-3" style={{ maxWidth: '70%', borderRadius: '15px 15px 15px 0' }}>
                                                <p>Hello! Im your AI task agent. Ill be helping you manage your tasks and progress.</p>
                                            </div>
                                        </div>
                                        <div className="message user-message mb-3 d-flex justify-content-end align-items-start">
                                            <div className="bg-primary text-white p-3" style={{ maxWidth: '70%', borderRadius: '15px 15px 0 15px' }}>
                                                <p>Hi! Can you help me with my project tasks?</p>
                                            </div>
                                            <div className="ms-2" style={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden' }}>
                                                <img src="/profile.jpeg" alt="User" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            </div>
                                        </div>
                                        <div className="message agent-message mb-3 d-flex align-items-start">
                                            <div className="me-2" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <SiEbox size={20} color="#2466FF" />                                            </div>
                                            <div className="bg-white p-3" style={{ maxWidth: '70%', borderRadius: '15px 15px 15px 0' }}>
                                                <p>Of course! I can track your progress, remind you of deadlines, and generate reports for your team.</p>
                                            </div>
                                        </div>
                                        <div className="message agent-message mb-3 d-flex align-items-start">
                                            <div className="me-2" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <SiEbox size={20} color="#2466FF" />                                            </div>
                                            <div className="bg-white p-3" style={{ maxWidth: '70%', borderRadius: '15px 15px 15px 0' }}>
                                                <p>Of course! I can track your progress, remind you of deadlines, and generate reports for your team.</p>
                                            </div>
                                        </div>
                                        <div className="message agent-message mb-3 d-flex align-items-start">
                                            <div className="me-2" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <SiEbox size={20} color="#2466FF" />                                            </div>
                                            <div className="bg-white p-3" style={{ maxWidth: '70%', borderRadius: '15px 15px 15px 0' }}>
                                                <p>Of course! I can track your progress, remind you of deadlines, and generate reports for your team.</p>
                                            </div>
                                        </div>
                                        <div className="message user-message mb-3 d-flex justify-content-end align-items-start">
                                            <div className="bg-primary text-white p-3" style={{ maxWidth: '70%', borderRadius: '15px 15px 0 15px' }}>
                                                <p>Hi! Can you help me with my project tasks?</p>
                                            </div>
                                            <div className="ms-2" style={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden' }}>
                                                <img src="/profile.jpeg" alt="User" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat-input p-3" style={{ borderTop: '1px solid #eee', flexShrink: 0 }}>
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Type your message..."
                                                style={{ borderRadius: '20px 0 0 20px' }}
                                            />
                                            <button
                                                className="btn btn-primary"
                                                style={{ borderRadius: '0 20px 20px 0' }}
                                            >
                                                <IoSendSharp />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}