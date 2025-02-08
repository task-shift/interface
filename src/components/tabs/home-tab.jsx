/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from "react";
import { IoSendSharp } from "react-icons/io5";
export default function HomeTab() {
    const texts = [
        "I want @John to work on the graphics design for the website due on 5th of march 2025",
        "Tell who's task is due",
        "Show me the progress of @james and @mary on the task of researching on forex and crypto",
        "Details about your teams progress?",
        "Let's get productive!",
        "What's your next move?"
    ];
    const [placeholder, setPlaceholder] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const typeText = () => {
            const currentText = texts[textIndex];

            if (!isDeleting) {
                // Typing forward
                if (charIndex < currentText.length) {
                    setPlaceholder(currentText.substring(0, charIndex + 1));
                    setCharIndex(charIndex + 1);
                } else {
                    // Pause at end of text
                    setTimeout(() => setIsDeleting(true), 500);
                }
            } else {
                // Deleting backward
                if (charIndex > 0) {
                    setPlaceholder(currentText.substring(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                } else {
                    // Move to next text
                    setIsDeleting(false);
                    setTextIndex((textIndex + 1) % texts.length);
                }
            }
        };

        const timeout = setTimeout(typeText, isDeleting ? 50 : 100);
        return () => clearTimeout(timeout);
    }, [textIndex, charIndex, isDeleting, texts]);

    return (
        <>
            <div className="mt-5">
            <p className="text-muted text-center" style={{ "fontSize": "1.2rem" }}>Chat with your AI task agent—tell it what you need!<br />assign tasks, receive reports, and much more!</p>

                <div className="d-flex justify-content-center">

                    <div className="card bg-light border-0 mx-3" style={{ width: "100%", maxWidth: "800px", borderRadius: "20px" }}>
                        <div className="card-body">
                            <h5 className="card-title">

                            </h5>
                            <div className="container">
                                <div className="d-flex justify-content-center">
                                    <form class="d-flex" style={{ width: "100%", maxWidth: "800px" }}>
                                        <div className="d-flex justify-content-center align-items-center" style={{ width: "100%" }}>
                                            <textarea class="form-control border-0 bg-white" placeholder={placeholder} style={{ "borderRadius": "10px 0 0 10px", "minHeight": "150px", "maxWidth": "800px" }}></textarea>
                                            <button class="btn btn-primary px-4" style={{ "borderRadius": "0 35px 35px 0", "height": "150px" }}><IoSendSharp size={20} /></button>
                                        </div>
                                    </form>
                                </div>

                                <div className="row mt-4">
                                    <div className="col-md-4 mb-3">
                                        <div className="card h-100 border-0">
                                            <div className="card-body">
                                                <h5 className="card-title">Task 1</h5>
                                                <p className="card-text">Description of task 1</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <div className="card h-100 border-0">
                                            <div className="card-body">
                                                <h5 className="card-title">Task 2</h5>
                                                <p className="card-text">Description of task 2</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <div className="card h-100 border-0">
                                            <div className="card-body">
                                                <h5 className="card-title">Task 3</h5>
                                                <p className="card-text">Description of task 3</p>
                                            </div>
                                        </div>
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