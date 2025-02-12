/* eslint-disable react/no-unknown-property */
import TeamActiveTab from "../tabs/team-active-tab";
import TeamInvitedTab from "../tabs/team-invited-tab";

export default function TeamNavbar() {

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
                    <button style={{ "borderRadius": "20px" }} class="nav-link active text-dark" id="pills-team-active-tab" data-bs-toggle="pill" data-bs-target="#team-active-tab" type="button" role="tab" aria-controls="pills-home-tab" aria-selected="true">
                        Active
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button style={{ "borderRadius": "20px" }} class="nav-link text-dark" id="pills-team-invited-tab" data-bs-toggle="pill" data-bs-target="#team-invited-tab" type="button" role="tab" aria-controls="pills-agents-tab" aria-selected="false">
                        Invited
                    </button>
                </li>
            </ul>

            <div class="tab-content" id="pills-tabContent" style={{ height: '100%', overflow: 'hidden' }}>
                <div class="tab-pane fade show active" id="team-active-tab" role="tabpanel" aria-labelledby="pills-team-active-tab" tabindex="0" style={{ height: '100%', overflowY: 'auto' }}>
                    <TeamActiveTab />
                </div>
                <div class="tab-pane fade show active" id="team-invited-tab" role="tabpanel" aria-labelledby="pills-team-invited-tab" tabindex="0" style={{ height: '100%', overflowY: 'auto' }}>
                    <TeamInvitedTab />
                </div>
            </div>
        </>
    )

}