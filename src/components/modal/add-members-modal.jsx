/* eslint-disable react/no-unknown-property */
import { FaUsers } from "react-icons/fa";

export default function AddMembersModal() {

    return (

        <>

            <div class="modal fade" id="addMembersModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content border-0" style={{ borderRadius: "20px" }}>
                        <div class="modal-header border-bottom-0">
                            <h1 class="modal-title fs-5">
                                <button class="btn btn-md text-muted bg-light" style={{ "borderRadius": "30px", }}>
                                    Add members <FaUsers size={20} />
                                </button>
                            </h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="d-flex align-items-center justify-content-center">
                                <main class="form-signin w-100 m-auto">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label for="floatingInput">Full name</label>
                                    </div>
                                    <div class="form-floating">
                                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label for="floatingInput">Email</label>
                                    </div>
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label for="floatingInput">Role</label>
                                    </div>
                                    <div class="form-floating">
                                        <select class="form-select" id="floatingSelect" aria-label="Role selection">
                                            <option value="admin">Admin</option>
                                            <option value="editor">teamate</option>
                                        </select>
                                        <label for="floatingSelect">Permission assigned</label>
                                    </div>
                                </main>
                            </div>
                        </div>
                        <div class="modal-footer border-top-0">
                            <button type="button" class="btn btn-md text-white" style={{ "borderRadius": "30px", backgroundColor: "#2466FF" }}>
                                Add member
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )

}