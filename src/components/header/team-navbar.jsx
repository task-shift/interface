/* eslint-disable react/no-unknown-property */
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
        </>
    )

}