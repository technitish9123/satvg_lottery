import Link from 'next/link'
 import { useUserFacade, useWeb3Facade } from '../state';

const HomePage = ()=>{
 
  const { userState} = useUserFacade();
  const {
    address,
    
  } = userState;

console.log(address);

return(

    <div className="h-screen w-screen bg-coolGray-900 overflow-x-hidden">


 
  

  <div className="container mx-auto">
    <div className="pt-16">
      <div className="text-3xl m-6 uppercase text-white">Superlottery Prize Pot</div>

      <div className="py-8 m-6">
        <div className="super-ticket w-1/3 rounded-3xl bg-amber-400 py-16 relative flex items-center justify-center">
          <div>Your</div>
         
          <div className="super-pot text-white text-3xl">$ 1,000,000 prize pot</div>
        </div>
      </div>
    </div>
    
  </div>
</div>
 )

}

export default HomePage