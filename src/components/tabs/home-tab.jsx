/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */
import { useState, useEffect, useRef } from "react";
import { IoSendSharp } from "react-icons/io5";
import { FaRegTimesCircle, } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import HomeNavbar from "../header/home-navbar";
import GetStartedCard from "../cards/get-started-card";

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
    const [isFormVisible, setIsFormVisible] = useState(true);
    const formRef = useRef(null);

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

    const handleHideClick = (e) => {
        e.preventDefault();
        if (formRef.current) {
            formRef.current.style.transition = 'all 0.3s ease';
            formRef.current.style.overflow = 'hidden';
            formRef.current.style.height = formRef.current.scrollHeight + 'px';
            
            // Trigger reflow
            formRef.current.offsetHeight;
            
            formRef.current.style.height = '0';
            formRef.current.style.opacity = '0';
            formRef.current.style.margin = '0';
            
            setTimeout(() => {
                setIsFormVisible(false);
            }, 300);
        }
    };

    const handleShowClick = (e) => {
        e.preventDefault();
        setIsFormVisible(true);
        setTimeout(() => {
            if (formRef.current) {
                formRef.current.style.transition = 'all 0.3s ease';
                formRef.current.style.height = '0';
                formRef.current.style.opacity = '0';
                formRef.current.style.margin = '0';
                
                // Trigger reflow
                formRef.current.offsetHeight;
                
                formRef.current.style.height = formRef.current.scrollHeight + 'px';
                formRef.current.style.opacity = '1';
                formRef.current.style.margin = 'inherit';
            }
        }, 10);
    };

    return (
        <>
            <div className="mt-5">
                <p className="text-muted text-center" style={{ "fontSize": "clamp(1rem, 2vw, 1.2rem)" }}>Chat with your AI task agent—tell it what you need!<br className="d-none d-md-block" /><span className="d-md-none"> </span>assign tasks, create projects, departments...</p>

                <div className="d-flex justify-content-center">
                    <div className="card bg-light border-0 mx-3" style={{ width: "100%", maxWidth: "800px", borderRadius: "20px", height: "500px" }}>

                        {/* <GetStartedCard /> */}

                        <div className="card-body" style={{ overflowY: "hidden", height: "100%" }}>
                            <h5 className="card-title"></h5>
                            <div className="container" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                                <div className="d-flex justify-content-center" style={{ width: "100%", maxWidth: "800px" }}>
                                    {isFormVisible ? (
                                        <div ref={formRef} className="w-100">
                                            <form className="d-flex w-100">
                                                <div className="d-flex justify-content-center align-items-center w-100">
                                                    <div className="position-relative w-100">
                                                        <textarea
                                                            className="form-control border-0 bg-white"
                                                            placeholder={placeholder}
                                                            style={{ "borderRadius": "10px 0 0 10px", "minHeight": "120px" }}
                                                            onInput={(e) => {
                                                                const value = e.target.value;
                                                                if (value.endsWith('@')) {
                                                                    document.getElementById('user-list').classList.remove('d-none');
                                                                } else if (!value.includes('@')) {
                                                                    document.getElementById('user-list').classList.add('d-none');
                                                                }
                                                            }}
                                                            onKeyDown={(e) => {
                                                                if (e.key === ' ') {
                                                                    document.getElementById('user-list').classList.add('d-none');
                                                                }
                                                            }}
                                                            onBlur={() => {
                                                                setTimeout(() => {
                                                                    document.getElementById('user-list').classList.add('d-none');
                                                                }, 100);
                                                            }}
                                                        ></textarea>
                                                        <div
                                                            id="user-list"
                                                            className="d-none position-absolute bg-white shadow-sm p-2"
                                                            style={{ top: "100px", left: "0", width: "50%", borderRadius: "10px", zIndex: 1000 }}
                                                            onMouseDown={(e) => e.preventDefault()}
                                                            onBlur={() => document.getElementById('user-list').classList.add('d-none')}
                                                            tabIndex={-1}
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
                                                        <button
                                                            className="btn btn-light position-absolute top-22 start-50 translate-middle shadow d-none d-sm-block"
                                                            style={{ zIndex: 1, borderRadius: "30px" }}
                                                            onClick={handleHideClick}
                                                        >
                                                            Hide <FaRegTimesCircle />
                                                        </button>
                                                        <button
                                                            className="btn btn-light position-absolute top-22 start-50 translate-middle shadow d-block d-sm-none"
                                                            style={{ zIndex: 1, borderRadius: "30px", padding: "0.25rem 0.5rem", fontSize: "0.875rem" }}
                                                            onClick={handleHideClick}
                                                        >
                                                            <FaRegTimesCircle />
                                                        </button>
                                                    </div>
                                                    <button className="btn btn-primary px-4" type="submit" style={{ "borderRadius": "0 35px 35px 0", "height": "120px" }}><IoSendSharp size={20} /></button>
                                                </div>
                                            </form>
                                        </div>
                                    ) : (
                                        <button 
                                            className="btn" 
                                            style={{ borderRadius: "30px", backgroundColor: "#FBFEFF"}}
                                            onClick={handleShowClick}
                                        >
                                            <span className="d-none d-sm-inline">Show </span><IoEyeSharp/>
                                        </button>
                                    )}
                                </div>

                                <br />

                                <div style={{ flex: 1, overflowY: "auto" }}>
                                    <HomeNavbar />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}