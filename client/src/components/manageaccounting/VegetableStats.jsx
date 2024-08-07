export default function VeggieStats({veg}) {
    return(
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
    </div>);
}