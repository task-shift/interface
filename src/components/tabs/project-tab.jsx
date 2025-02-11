/* eslint-disable react/no-unknown-property */
import { MdOutlineCreateNewFolder } from "react-icons/md";
import ProjectCard from "../cards/project-card";

export default function ProjectTab() {
    return (
        <>
            <div className="mt-5">
                <p className="text-muted text-center" style={{ "fontSize": "1.2rem" }}>
                    Organize your tasks by creating projects, <br />and add tasks to them.
                </p>
                <div className="d-flex justify-content-center">
                    <div className="card bg-light border-0 mx-3" style={{ width: "100%", maxWidth: "800px", borderRadius: "20px", height: "500px" }}>
                        <div className="card-body p-0" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <h5 className="card-title">
                                <div className="d-flex justify-content-between w-100 p-3">
                                    <button class="btn btn-md text-muted" style={{ "borderRadius": "30px", backgroundColor: "#FBFEFF" }}>
                                        Untitled project
                                    </button>
                                    <button class="btn btn-md text-muted" style={{ "borderRadius": "30px", backgroundColor: "#FBFEFF" }}>
                                        Create new project <MdOutlineCreateNewFolder size={20} />
                                    </button>
                                </div>
                            </h5>

                            <div className="container">
                                <div className="row mt-2" >
                                    <div className="col-md-4 mb-3">
                                        <ProjectCard />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <ProjectCard />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <ProjectCard />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <ProjectCard />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <ProjectCard />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <ProjectCard />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <ProjectCard />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <ProjectCard />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <ProjectCard />
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