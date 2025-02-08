/* eslint-disable react/no-unknown-property */
import { FaCaretDown } from "react-icons/fa";
import { MdOutlineCreateNewFolder } from "react-icons/md";
export default function ProjectTab() {
    return (
        <>
            <div className="mt-5">
                <div className="d-flex justify-content-center">
                    <div className="card bg-light border-0" style={{ width: "100%", maxWidth: "800px", borderRadius: "20px" }}>
                        <div className="card-body">
                            <h5 className="card-title">
                                <div className="d-flex justify-content-between w-100">
                                    <button class="btn btn-md text-muted" style={{ "borderRadius": "30px", backgroundColor: "#FBFEFF" }}>
                                        Untitled project <FaCaretDown />
                                    </button>
                                    <button class="btn btn-md text-muted" style={{ "borderRadius": "30px", backgroundColor: "#FBFEFF" }}>
                                        Create new project <MdOutlineCreateNewFolder size={20} />
                                    </button>
                                </div>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}