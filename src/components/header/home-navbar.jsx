/* eslint-disable react/no-unknown-property */
import ProjectCard from "../cards/project-card";
import TaskCard from "../cards/task-card";

export default function HomeNavbar() {

    return (
        <>
            <style>
                {`
                    .nav-pills .nav-link.active {
                        background-color: #2466FF !important;
                        color: white !important;
                    }
                `}
            </style>
            <ul class="nav nav-pills mb-3 justify-content-center mt-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button style={{ "borderRadius": "20px" }} class="nav-link active text-dark" id="pills-task-active-tab" data-bs-toggle="pill" data-bs-target="#task-active-tab" type="button" role="tab" aria-controls="pills-home-tab" aria-selected="true">
                        Tasks
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button style={{ "borderRadius": "20px" }} class="nav-link text-dark" id="pills-project-invited-tab" data-bs-toggle="pill" data-bs-target="#project-invited-tab" type="button" role="tab" aria-controls="pills-agents-tab" aria-selected="false">
                        Projects
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button style={{ "borderRadius": "20px" }} class="nav-link text-dark" id="pills-department-invited-tab" data-bs-toggle="pill" data-bs-target="#department-invited-tab" type="button" role="tab" aria-controls="pills-department-tab" aria-selected="false">
                        Departments
                    </button>
                </li>
            </ul>

            <div class="tab-content" id="pills-tabContent" style={{ height: '100%', overflow: 'hidden' }}>
                <div class="tab-pane fade show active" id="task-active-tab" role="tabpanel" aria-labelledby="pills-task-active-tab" tabindex="0" style={{ height: '100%', overflowY: 'auto' }}>
                    <div className="row " >
                        <div className="col-md-4 mb-3">
                            <TaskCard />
                        </div>
                        <div className="col-md-4 mb-3">
                            <TaskCard />
                        </div>
                        <div className="col-md-4 mb-3">
                            <TaskCard />
                        </div>
                        <div className="col-md-4 mb-3">
                            <TaskCard />
                        </div>
                        <div className="col-md-4 mb-3">
                            <TaskCard />
                        </div>
                        <div className="col-md-4 mb-3">
                            <TaskCard />
                        </div>
                        <div className="col-md-4 mb-3">
                            <TaskCard />
                        </div>
                        <div className="col-md-4 mb-3">
                            <TaskCard />
                        </div>
                        <div className="col-md-4 mb-3">
                            <TaskCard />
                        </div>

                    </div>
                </div>
                <div class="tab-pane fade show active" id="project-active-tab" role="tabpanel" aria-labelledby="pills-project-active-tab" tabindex="0" style={{ height: '100%', overflowY: 'auto' }}>
                    <div className="row " >
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
                <div class="tab-pane fade show active" id="department-invited-tab" role="tabpanel" aria-labelledby="pills-team-invited-tab" tabindex="0" style={{ height: '100%', overflowY: 'auto' }}>

                </div>
            </div>
        </>
    )

}