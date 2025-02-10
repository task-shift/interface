/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from "react";
import { IoSendSharp } from "react-icons/io5";
import TaskCard from "../cards/task-card";

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
                                            <div className="position-relative" style={{ width: "100%" }}>
                                                <textarea
                                                    class="form-control border-0 bg-white"
                                                    placeholder={placeholder}
                                                    style={{ "borderRadius": "10px 0 0 10px", "minHeight": "150px", "maxWidth": "800px" }}
                                                    onInput={(e) => {
                                                        const value = e.target.value;
                                                        // Only show dropdown if @ is the last character
                                                        if (value.endsWith('@')) {
                                                            document.getElementById('user-list').classList.remove('d-none');
                                                        } else if (!value.includes('@')) {
                                                            document.getElementById('user-list').classList.add('d-none');
                                                        }
                                                    }}
                                                    onKeyDown={(e) => {
                                                        // Hide dropdown when space is pressed
                                                        if (e.key === ' ') {
                                                            document.getElementById('user-list').classList.add('d-none');
                                                        }
                                                    }}
                                                    onBlur={() => {
                                                        // Hide dropdown when textarea loses focus
                                                        setTimeout(() => {
                                                            document.getElementById('user-list').classList.add('d-none');
                                                        }, 100);
                                                    }}
                                                ></textarea>
                                                <div
                                                    id="user-list"
                                                    className="d-none position-absolute bg-white shadow-sm p-2"
                                                    style={{ top: "-100px", left: "0", width: "50%", borderRadius: "10px", zIndex: 1000 }}
                                                    onMouseDown={(e) => {
                                                        // Prevent dropdown from closing when clicking inside it
                                                        e.preventDefault();
                                                    }}
                                                    onBlur={() => {
                                                        // Hide dropdown when it loses focus
                                                        document.getElementById('user-list').classList.add('d-none');
                                                    }}
                                                    tabIndex={-1} // Make the div focusable
                                                >
                                                    <div className="list-group">
                                                        <button
                                                            className="list-group-item list-group-item-action"
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                const textarea = document.querySelector('textarea');
                                                                const currentValue = textarea.value;
                                                                const atPosition = currentValue.lastIndexOf('@');
                                                                const newValue = currentValue.substring(0, atPosition) + '@User1 ' + currentValue.substring(atPosition + 1);
                                                                textarea.value = newValue;
                                                                document.getElementById('user-list').classList.add('d-none');
                                                                textarea.focus();
                                                            }}
                                                        >User 1</button>
                                                        <button
                                                            className="list-group-item list-group-item-action"
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                const textarea = document.querySelector('textarea');
                                                                const currentValue = textarea.value;
                                                                const atPosition = currentValue.lastIndexOf('@');
                                                                const newValue = currentValue.substring(0, atPosition) + '@User2 ' + currentValue.substring(atPosition + 1);
                                                                textarea.value = newValue;
                                                                document.getElementById('user-list').classList.add('d-none');
                                                                textarea.focus();
                                                            }}
                                                        >User 2</button>
                                                        <button
                                                            className="list-group-item list-group-item-action"
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                const textarea = document.querySelector('textarea');
                                                                const currentValue = textarea.value;
                                                                const atPosition = currentValue.lastIndexOf('@');
                                                                const newValue = currentValue.substring(0, atPosition) + '@User3 ' + currentValue.substring(atPosition + 1);
                                                                textarea.value = newValue;
                                                                document.getElementById('user-list').classList.add('d-none');
                                                                textarea.focus();
                                                            }}
                                                        >User 3</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <button class="btn btn-primary px-4" style={{ "borderRadius": "0 35px 35px 0", "height": "150px" }}><IoSendSharp size={20} /></button>
                                        </div>
                                    </form>
                                </div>

                                <div className="row mt-4">
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}