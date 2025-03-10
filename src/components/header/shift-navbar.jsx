/* eslint-disable react/no-unknown-property */
import ProjectTab from "../tabs/project-tab";
import HomeTab from "../tabs/home-tab";
import AgentTab from "../tabs/agent-tab";
import TeamTab from "../tabs/team-tab";
import SettingsTab from "../tabs/settings-tab";
export default function ShiftNavbar() {
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
            <ul class="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button style={{ "borderRadius": "20px" }} class="nav-link active text-dark" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#home-tab" type="button" role="tab" aria-controls="pills-home-tab" aria-selected="true">
                        Home
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button style={{ "borderRadius": "20px" }} class="nav-link text-dark" id="pills-agents-tab" data-bs-toggle="pill" data-bs-target="#agents-tab" type="button" role="tab" aria-controls="pills-agents-tab" aria-selected="false">
                        Agent
                    </button>
                </li>
                
                <li class="nav-item" role="presentation">
                    <button style={{ "borderRadius": "20px" }} class="nav-link text-dark" id="pills-teams-tab" data-bs-toggle="pill" data-bs-target="#teams-tab" type="button" role="tab" aria-controls="pills-teams-tab" aria-selected="false">
                        Teams
                    </button>
                </li>
                {/* <li class="nav-item" role="presentation">
                    <button style={{ "borderRadius": "20px" }} class="nav-link text-dark" id="pills-settings-tab" data-bs-toggle="pill" data-bs-target="#settings-tab" type="button" role="tab" aria-controls="pills-settings-tab" aria-selected="false">
                        Settings
                    </button>
                </li> */}
            </ul>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="home-tab" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                    <HomeTab />
                </div>
                <div class="tab-pane fade" id="agents-tab" role="tabpanel" aria-labelledby="pills-agents-tab" tabindex="0">
                    <AgentTab />
                </div>
                <div class="tab-pane fade" id="department-tab" role="tabpanel" aria-labelledby="pills-department-tab" tabindex="0">
                    <ProjectTab />
                </div>
                <div class="tab-pane fade" id="teams-tab" role="tabpanel" aria-labelledby="pills-teams-tab" tabindex="0">
                    <TeamTab />
                </div>
                <div class="tab-pane fade" id="settings-tab" role="tabpanel" aria-labelledby="pills-settings-tab" tabindex="0">
                    <SettingsTab />
                </div>
            </div>
        </>
    )
}