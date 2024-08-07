import VeggieStats from "../../components/manageaccounting/VegetableStats"

// Sample data to show the component

function ManageAccounting() {
    const veggies = ["Ampalaya", "Papaya", "Sitaw", "Kalabasa"];
    return (
        <div className='flex grow flex-col w-full'>
            <div className='flex flex-col flex-auto items-center p-8 justify-start space-y-16'>
            {/*  */}
            <div className="flex flex-row w-5/6 h-2/3 space-x-2">
                <div className="flex flex-col grow items-start">
                    <h3 className="font-medium text-lg p-4">Management & Accounting</h3>
                    <div className="flex flex-grow flex-col space-y-2 h-full w-full pl-8 overflow-auto">
                        {veggies.map((veg) => <VeggieStats veg={veg} />)}
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