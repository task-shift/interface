import TeamCard from "../cards/team-card";

export default function TeamActiveTab() {
    return (
        <>
            <div className="container" style={{ overflowY: 'auto' }}>
                <div className="row mt-2" >
                    <div className="col-md-4 mb-3">
                        <TeamCard />
                    </div>
                    <div className="col-md-4 mb-3">
                        <TeamCard />
                    </div>
                    <div className="col-md-4 mb-3">
                        <TeamCard />
                    </div>
                    <div className="col-md-4 mb-3">
                        <TeamCard />
                    </div>
                    <div className="col-md-4 mb-3">
                        <TeamCard />
                    </div>
                    <div className="col-md-4 mb-3">
                        <TeamCard />
                    </div>
                    <div className="col-md-4 mb-3">
                        <TeamCard />
                    </div>
                </div>
            </div>
        </>
    )
}