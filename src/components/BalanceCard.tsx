

const BalanceCard = () => {
  return (
    <div className="py-3 my-3 px-6 bg-bgColorFrend rounded-lg">
        <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-7 py-4'>
                <h2 className='text-white text-2xl mb-2'>Balance Left</h2>
                <p className='text-white text-3xl'>&#8377; 400</p>
            </div>
            <div className='col-span-5'>
                <img src="/balancepic.jpg"></img>
            </div>
        </div>
    </div>
  )
}

export default BalanceCard