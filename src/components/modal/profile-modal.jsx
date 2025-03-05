/* eslint-disable react/no-unknown-property */
import { FaRegUserCircle } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";


export default function ProfileModal() {
    return (
        <>
            <div class="modal fade" id="profileModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content border-0" style={{ borderRadius: "20px", maxHeight: "90vh" }}>
                        <div class="modal-header border-bottom-0">
                            <h1 class="modal-title fs-5">
                                <button class="btn btn-md text-muted bg-light" style={{ "borderRadius": "30px", }}>
                                    Profile <FaRegUserCircle size={20} />
                                </button>
                            </h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body" style={{ overflowY: "auto" }}>
                            <div class="d-flex align-items-center justify-content-center flex-column">

                                <div class="mb-4 position-relative">
                                    <img src="https://randomuser.me/api/portraits/men/75.jpg"
                                        alt="Profile"
                                        class="rounded-circle border"
                                        style={{ width: "80px", height: "80px", borderColor: "#e9ecef !important" }} />
                                    <div class="position-absolute d-flex align-items-center justify-content-center" style={{
                                        backgroundColor: "white",
                                        width: "32px",
                                        height: "32px",
                                        borderRadius: "50%",
                                        border: "1px solid #e9ecef",
                                        right: 0,
                                        bottom: 0,
                                        transform: "translate(10%, 10%)",
                                        padding: "6px"
                                    }}>
                                        <CiEdit size={24} color="#2466FF" style={{ marginLeft: "1px", marginTop: "1px" }} />
                                    </div>
                                </div>
                                <h4 class="mb-1">John Doe</h4>
                                <p class="text-muted mb-4">john.doe@example.com</p>

                                <h4 class="text-left w-100 text-muted mb-3">Details</h4>

                                <div class="w-100 mb-3">
                                    <div class="mb-3">
                                        <div class="d-flex justify-content-between">
                                            <span class="text-muted">Email</span>
                                            <span>john.doe@example.com</span>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <div class="d-flex justify-content-between">
                                            <span class="text-muted">Organization</span>
                                            <span>John Org</span>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <div class="d-flex justify-content-between">
                                            <span class="text-muted">Your Role</span>
                                            <span>Product Manager</span>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <div class="d-flex justify-content-between">
                                            <span class="text-muted">Member since</span>
                                            <span>2023</span>
                                        </div>
                                    </div>
                                </div>

                                <h4 class="text-left w-100 text-muted mb-3">Security</h4>
                                <div class="w-100 mb-3">
                                    <div class="mb-3">
                                        <div class="d-flex justify-content-between">
                                            <span class="text-muted">Change Password</span>
                                            <span>john.doe@example.com</span>
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