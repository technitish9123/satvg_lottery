import Link from 'next/link'


const HomePage = ()=>{
    


return(

    <div>


 
  <div className="container mx-auto">
    <div className="flex items-center justify-between pt-8 pb-8">
      <div className="text-white uppercase text-5xl">Lottery Aggregator</div>
    
     <button className="uppercase text-cyan-300 border border-cyan-300 px-4 py-1 rounded-lg ">  wallet Connected </button>
     
    </div>
  </div>

  <div className="bg-black border-t-2 border-b-2 border-cyan-600">
    <div className="container mx-auto">
      <div className="-mx-6">
        <button className="px-6 py-2 uppercase text-2xl text-white">About</button>
        <Link href="lottery"><button className="px-6 py-2 uppercase text-2xl text-white">Listed Lotteries</button></Link>
        <button className="px-6 py-2 uppercase text-2xl text-white">Upcoming Lotteries</button>
        <Link href="request"><button className="px-6 py-2 uppercase text-2xl text-white">Submit Your Project</button></Link>
        <button className="px-6 py-2 uppercase text-2xl text-white">How To</button>
      </div>
    </div>
  </div>

  <div className="container mx-auto">
    <div className="pt-16">
      <div className="text-5xl uppercase text-white">Superlottery Prize Pot</div>

      <div className="py-8">
        <div className="super-ticket rounded-3xl bg-amber-400 py-16 relative flex items-center justify-center">
          <div>Your</div>
          <div className="super-pot text-white text-5xl">$ 1,000,000 prize pot</div>
        </div>
      </div>
    </div>
  </div>
</div>
 )

}

export default HomePage