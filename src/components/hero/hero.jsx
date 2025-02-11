/* eslint-disable react/no-unknown-property */
export default function Hero() {
    return (
        <>
            <div class="hero-section" >
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="mb-4">
                                <div class="d-flex align-items-center gap-2 mb-3">
                                    <img src="/profile.jpeg" alt="profile" style={{ width: "30px", height: "30px", borderRadius: "50%", objectFit: "cover" }} />
                                    <img src="/profile.jpeg" alt="profile" style={{ width: "30px", height: "30px", borderRadius: "50%", objectFit: "cover" }} />
                                    <img src="/profile.jpeg" alt="profile" style={{ width: "30px", height: "30px", borderRadius: "50%", objectFit: "cover" }} />
                                    <span class="text-muted">Join 2,000+ others who signed up</span>
                                </div>
                            </div>

                            <h1 class="display-4 fw-bold mb-4">Get A shitload of tasks done effortlessly</h1>
                            <p class="lead text-muted mb-4">Simply unlock insane productivity on your tasks with Ai agents. </p>

                            <div class="mb-4">
                                <form class="d-flex">
                                    <input type="text" class="form-control form-control-lg border-0 bg-light" placeholder="Email address" style={{ "borderRadius": "35px 0 0 35px" }} />
                                    <button class="me-5 btn btn-primary btn-lg px-4" style={{ "borderRadius": "0 35px 35px 0" }}>Book a Demo</button>
                                </form>
                            </div>

                            <div class="mb-5">
                                <div class="d-flex align-items-center mb-2">
                                    <svg class="feature-icon" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>
                                    <span>Leverage Large Action Model</span>
                                </div>
                                <div class="d-flex align-items-center mb-2">
                                    <svg class="feature-icon" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>
                                    <span>AI & ML Integration</span>
                                </div>
                                <div class="d-flex align-items-center">
                                    <svg class="feature-icon" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>
                                    <span>No API Needed</span>
                                </div>
                            </div>

                            <div class="brand-logos d-flex gap-4 align-items-center">
                                <img src="/api/placeholder/120/30" alt="Shopify" />
                                <img src="/api/placeholder/120/30" alt="Slack" />
                                <img src="/api/placeholder/120/30" alt="Amazon" />
                                <img src="/api/placeholder/120/30" alt="OpenTable" />
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="position-relative">
                                <div class="d-flex justify-content-between position-absolute w-100" style={{ "top": "-40px" }}>

                                    <div class="workflow-card shadow-lg" style={{ "marginLeft": "-30px" }}>
                                        <div class="workflow-icon bg-primary text-white">N</div>
                                        <span>News Summarization</span>
                                    </div>
                                    <div class="workflow-card shadow-lg">
                                        <div class="workflow-icon bg-info text-white">T</div>
                                        <span>Time Series Forecasting</span>
                                    </div>

                                </div>

                                <div class="crypto-chart">
                                    <br />
                                    {/* <div class="d-flex justify-content-between align-items-center mb-4">
                                        <div>
                                            <span class="badge bg-light text-dark">Crypto Trade</span>
                                            <span class="ms-2">Asset</span>
                                        </div>
                                    </div> */}

                                    <div class="bg-light rounded py-5" style={{ "height": "450px" }}>
                                    </div>
                                    <br />

                                </div>

                                <div class="d-flex justify-content-between position-absolute w-100" style={{ "bottom": "-50px" }}>
                                    <div class="workflow-card shadow-lg">
                                        <div class="workflow-icon bg-purple text-white">S</div>
                                        <span>Sentiment Analysis</span>
                                    </div>
                                    <div class="workflow-card shadow-lg" style={{ "marginRight": "-30px" }}>
                                        <div class="workflow-icon bg-primary text-white">R</div>
                                        <span>Automated Reporting</span>
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