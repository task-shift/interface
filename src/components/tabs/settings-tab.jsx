/* eslint-disable react/no-unknown-property */
import { FaCaretDown } from "react-icons/fa";

export default function SettingsTab() {

    return (

        <>

            <div className="mt-5">
                <p className="text-muted text-center" style={{ "fontSize": "1.2rem" }}>
                    Customize everything related to your <br />Organization account settings.
                </p>

                <div className="d-flex justify-content-center">
                    <div className="card bg-light border-0 mx-3" style={{ width: "100%", maxWidth: "800px", borderRadius: "20px", height: "500px" }}>

                        <div className="card-body p-0" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            {/* <h5 className="card-title">
                                <div className="d-flex justify-content-between w-100 p-3">
                                    <button class="btn btn-md text-muted d-inline-flex align-items-center" style={{ "borderRadius": "30px", backgroundColor: "#FBFEFF" }}><CiFolderOn size={20} className="me-2" />Untitled project</button>
                                    <button class="btn btn-md text-muted" data-bs-toggle="modal" data-bs-target="#createProjectModal" style={{ "borderRadius": "30px", backgroundColor: "#FBFEFF" }}>
                                        Create new project <MdOutlineCreateNewFolder size={20} />
                                    </button>
                                </div>
                            </h5> */}

                            <div className="container p-5">
                                <ul class="list-group">
                                    <li class="list-group-item d-flex justify-content-between align-items-center p-4 border-0" style={{ "borderRadius": "30px" }} data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                        <button class="btn btn-md bg-light text-muted" aria-expanded="false" style={{ "borderRadius": "30px" }}>
                                            Organization settings
                                        </button>
                                        <FaCaretDown size={20} />
                                    </li>
                                    <div class="collapse mt-3" id="collapseExample">
                                        <div class="card card-body border-0 p-4" style={{ "borderRadius": "30px" }}>
                                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                        </div>
                                    </div>

                                    <br />
                                    <li class="list-group-item d-flex justify-content-between align-items-center p-4 border-0" style={{ "borderRadius": "30px" }}>
                                        <button class="btn btn-md bg-light text-muted" aria-expanded="false" style={{ "borderRadius": "30px" }}>
                                            Organization settings
                                        </button>
                                        <FaCaretDown size={20} />
                                    </li>
                                    <br />
                                    <li class="list-group-item d-flex justify-content-between align-items-center p-4 border-0" style={{ "borderRadius": "30px" }}>
                                        <button class="btn btn-md bg-light text-muted" aria-expanded="false" style={{ "borderRadius": "30px" }}>
                                            Organization settings
                                        </button>
                                        <FaCaretDown size={20} />
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>

            </div>

        </>

    )

}