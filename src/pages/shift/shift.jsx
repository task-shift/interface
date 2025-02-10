import ShiftHeader from "../../components/header/shift-header"
import ShiftNavbar from "../../components/header/shift-navbar"
export default function Shift() {
    return (
        <>
            <ShiftHeader />
            <div className="mt-4">
                <ShiftNavbar />
            </div>
        </>
    )
}