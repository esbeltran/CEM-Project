import SearchBar from "../../components/SearchBar"
import VerticalNavbar from "../../components/VerticalNav"

// Sample data to show the component

function ManageAccounting() {
    const veggies = ["Ampalaya", "Papaya", "Sitaw", "Kalabasa"];
    return (
        <div className='w-dvh h-dvh flex flex-row overflow-y-auto'>
            <VerticalNavbar />
            <div className='flex flex-col flex-auto items-center p-8 justify-start space-y-16'>
            <SearchBar />
            {/*  */}
            <div className="flex flex-row w-5/6 h-2/3 space-x-2">
                <div className="flex flex-col grow items-start">
                    <h3 className="font-medium text-lg p-4">Management & Accounting</h3>
                    <div className="flex flex-grow flex-col space-y-2 h-full w-full pl-8 overflow-auto">
                        {veggies.map((veg) => (
                            <div className="flex flex-row p-2 w-full h-40 shadow-sm">
                            <div className="">
                                {/* Immage placeholder */}
                                <img className='shadow-sm h-full' src='/src/assets/placeholder.png'/>
                            </div>
                        {/* info */}
                            <div className="flex flex-row grow space-x-2">
                                {/* Name, batch number, expirey date, qty */}
                                <div className="h-full p-2 grow text-start">
                                    <h3 className="font-bold pb-2 uppercase">{veg}</h3>
                                    <p>Batch No: 10</p>
                                    <p>Expiry Date: 1-1-24</p>
                                    <p>Qty: 100 kgs</p>
                                </div>
                                {/* Total sales, sales, sold, remaining quantity */}
                                <div className="w-auto  p-2 text-start">
                                    <h3 className="uppercase pb-2 font-bold">Total Sales</h3>
                                    <p>Sales: P7,600/month</p>
                                    <p>Sold: 25 kgs</p>
                                    <p>Remaining Quantity: 75 kgs</p>
                                </div>
                                <div className="button bg-white text-blue-600 h-min w-min">
                                Edit
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                <button className="button bg-blue-600 text-white h-min">
                        Add Input
                </button>
            </div>
            </div>
        </div>
    )
}

export default ManageAccounting