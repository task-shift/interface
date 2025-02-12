import TeamInvitedCard from "../cards/team-invited-card";

export default function TeamInvitedTab() {

    return (

        <>
            <div className="container" style={{ overflowY: 'auto' }}>
                <div className="row mt-2" >
                    <div className="col-md-4 mb-3">
                        <TeamInvitedCard />
                    </div>
                    <div className="col-md-4 mb-3">
                        <TeamInvitedCard />
                    </div>
                    <div className="col-md-4 mb-3">
                        <TeamInvitedCard />
                    </div>
                    <div className="col-md-4 mb-3">
                        <TeamInvitedCard />
                    </div>
                    <div className="col-md-4 mb-3">
                        <TeamInvitedCard />
                    </div>
                    <div className="col-md-4 mb-3">
                        <TeamInvitedCard />
                    </div>
                    <div className="col-md-4 mb-3">
                        <TeamInvitedCard />
                    </div>
                </div>
            </div>
        </>

    )

}