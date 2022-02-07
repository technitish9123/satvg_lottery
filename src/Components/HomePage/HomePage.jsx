import React from 'react';
import {Link} from 'react-router-dom'
const HomePage = () => {
  return (
    <div>


 
    <div class="container mx-auto">
      <div class="flex items-center justify-between pt-8 pb-8">
        <div class="text-white uppercase text-5xl">Lottery Aggregator</div>
      
       <button class="uppercase text-cyan-300 border border-cyan-300 px-4 py-1 rounded-lg "> wallet Connected </button>
       
      </div>
    </div>
  
    <div class="bg-black border-t-2 border-b-2 border-cyan-600">
      <div class="container mx-auto">
        <div class="-mx-6">
          <button class="px-6 py-2 uppercase text-2xl text-white">About</button>
         <button class="px-6 py-2 uppercase text-2xl text-white">Listed Lotteries</button>
          <button class="px-6 py-2 uppercase text-2xl text-white">Upcoming Lotteries</button>
          <button class="px-6 py-2 uppercase text-2xl text-white">Submit Your Project</button>
          <button class="px-6 py-2 uppercase text-2xl text-white">How To</button>
        </div>
      </div>
    </div>
  
    <div class="container mx-auto">
      <div class="pt-16">
        <div class="text-5xl uppercase text-white">Superlottery Prize Pot</div>
  
        <div class="py-8">
          <div class="super-ticket rounded-3xl bg-amber-400 py-16 relative flex items-center justify-center">
            <div>Your</div>
            <div class="super-pot text-white text-5xl">$ 1,000,000 prize pot</div>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
};

export default HomePage;
