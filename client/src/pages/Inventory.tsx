import VerticalNavbar from "../components/VerticalNav"

function Inventory() {
    return (
        <div className='w-screen h-screen flex bg-blue-100 flex-row space-y-8 overflow-y-auto'>
            <VerticalNavbar />
            inventory page
        </div>
    )
}

export default Inventory