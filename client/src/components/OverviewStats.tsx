function OverviewStats() {
    return(
        <div className="flex flex-row space-y-2 text-sm bg-white divide-x">
                <div className=" text-start basis-1/5 flex flex-col p-2">
                    <h2 className="text-blue-500 font-bold">Categories</h2>
                    <p className="font-bold">14</p>
                    <p className="text-gray-400">Last 7 days</p>
                </div>
                <div className=" text-start flex-1 flex flex-col p-2">
                    <h2 className="text-yellow-500 font-bold">Total Products</h2>
                    <div className="row-between">
                        <div className="flex flex-1 flex-col">
                            <p className="font-bold">868</p>
                            <p className="text-gray-400">Last 7 days</p>
                        </div>
                        <div className="flex flex-1 flex-col">
                            <p className="font-bold">P 50,000.00</p>
                            <p className="text-gray-400">Revenue</p>
                        </div>
                    </div>
                </div>
                <div className=" text-start flex-1 flex flex-col p-2">
                <h2 className="text-purple-500 font-bold">Total Products</h2>
                    <div className="row-between">
                        <div className="flex flex-1 flex-col">
                            <p className="font-bold">5</p>
                            <p className="text-gray-400">Last 7 days</p>
                        </div>
                        <div className="flex flex-1 flex-col">
                            <p className="font-bold">P 6,000.00</p>
                            <p className="text-gray-400">Cost</p>
                        </div>
                    </div>
                </div>
                <div className=" text-start basis-1/4 flex flex-col p-2">
                    <h2 className="text-red-500 font-bold">Categories</h2>
                    <div className="row-between">
                        <div className="flex flex-1 flex-col">
                            <p className="font-bold">12</p>
                            <p className="text-gray-400">Ordered</p>
                        </div>
                        <div className="flex flex-1 flex-col">
                            <p className="font-bold">7</p>
                            <p className="text-gray-400">Not in Stock</p>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default OverviewStats