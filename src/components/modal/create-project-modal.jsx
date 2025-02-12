/* eslint-disable react/no-unknown-property */
import { MdOutlineCreateNewFolder } from "react-icons/md";

export default function CreateProjectModal() {

    return (
        <>
            <div class="modal fade" id="createProjectModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content border-0" style={{ borderRadius: "20px" }}>
                        <div class="modal-header border-bottom-0">
                            <h1 class="modal-title fs-5">
                                <button class="btn btn-md text-muted bg-light" style={{ "borderRadius": "30px", }}>
                                    Create new project <MdOutlineCreateNewFolder size={20} />
                                </button>
                            </h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="d-flex align-items-center justify-content-center">
                                <main class="form-signin w-100 m-auto">
                                    <div class="form-floating">
                                        <input type="e" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label for="floatingInput">Project title</label>
                                    </div>
                                    <div class="form-floating">
                                        <textarea class="form-control" id="floatingDescription" placeholder="Project description" style={{height: "100px"}}></textarea>
                                        <label for="floatingDescription">Project description</label>
                                    </div>
                                    
                                </main>
                            </div>
                        </div>
                        <div class="modal-footer border-top-0">
                            <button type="button" class="btn btn-md text-white" style={{ "borderRadius": "30px", backgroundColor: "#2466FF" }}>
                                Create project
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}