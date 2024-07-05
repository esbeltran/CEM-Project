import VerticalNavbar from "../components/VerticalNav"

type InventoryProps = {
    setAuth: (bool: boolean) => void
}

function Inventory({ setAuth } : InventoryProps) {
    return (
        <div className='w-screen h-screen flex bg-blue-100 flex-row space-y-8 overflow-y-auto'>
            <VerticalNavbar setAuth={setAuth} />
            inventory page
        </div>
    )
}

export default Inventory