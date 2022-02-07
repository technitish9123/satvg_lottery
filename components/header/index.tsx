import { useEffect, useState, useCallback, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Web3 from 'web3';
import Web3Modal from 'web3modal';
//import axios from 'axios';
import { CHAINS, TOKENS } from '../../constants';
import { navigations } from '../../config/nav';
import { providerOptions } from '../../config';

import {
    useAppFacade,
    useUserFacade,
    useWeb3Facade,
  } from '../../state';

  function initWeb3(provider: any) {
    const web3: any = new Web3(provider);
  
    web3.eth.extend({
      methods: [
        {
          name: 'chainId',
          call: 'eth_chainId',
          outputFormatter: web3.utils.hexToNumber,
        },
      ],
    });
  
    return web3;
  }
export const Header = () => {
    
    const { userState, updateUserInfo } = useUserFacade();
    const { updateWeb3State, chainId: web3ChainId, web3 } = useWeb3Facade();
    const [web3modal, setWeb3modal] = useState<Web3Modal>();
    const [visible, setVisible] = useState(false);
    const [active, setActive] = useState(0);
    const [showDisconnect, setShowDisconnect] = useState(false);
  
    const { address, chainId: userChainId, chain: userChain, theme } = userState;


    useEffect(() => {
      setWeb3modal(
        new Web3Modal({
          cacheProvider: true, // optional
          providerOptions, // required
        })
      );
  
      
    }, []);

const connectWallet = useCallback(async () => {
    try {
       
      const provider = await web3modal?.connect();
     
      provider.on('chainChanged', (chainId: string) => {
        updateWeb3State({ chainId: +chainId });
      });

      const web3 = new Web3(provider);

      const chainId = await web3.eth.getChainId();
      updateWeb3State({ web3, provider, chainId: +chainId });

console.log(chainId);

      const accounts = await web3.eth.getAccounts();
      if (accounts) {
        updateUserInfo({ address: accounts[0] });
       
      }
      
    } catch (err) {
      console.log('ConnectWallet - ', err);
    }
    
  }, [updateUserInfo, web3modal, updateWeb3State]);

  const disconnectWallet = useCallback(async () => {
    if (web3modal && web3modal.cachedProvider) {
      await web3modal.clearCachedProvider();
      location.reload();
    }
  }, [web3modal]);

  useEffect(() => {
    if (web3modal && web3modal.cachedProvider) {
      connectWallet();
    }
  }, [web3modal, connectWallet]);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.enable().then(() => {
        // detect Metamask account change
        window.ethereum.on('accountsChanged', function (accounts: string[]) {});
      }); // get permission to access accounts
    }
  }, []);

return(
    <>
    <div className="container mx-auto">
       
       
    <div className="flex items-center justify-between pt-8 pb-8">
      <div className="text-3xl text-white uppercase">Lottery Aggregator</div>
    
      {address ? (
            <div
              className="relative"
              onMouseEnter={() => setShowDisconnect(true)}
              onMouseLeave={() => setShowDisconnect(false)}
            >
              <div className="flex items-center px-5 py-3 text-white rounded-md cursor-pointer bg-primary mobile:px-2 mobile:py-2">
                <span className="ml-1 mr-3 font-semibold mobile:text-sm">{`0x${address.slice(
                  2,
                  5
                )}...${address.slice(
                  address.length - 4,
                  address.length
                )}`}</span>
                
              </div>
              {showDisconnect && (
                <div className="pt-3">
                  <div
                    className="absolute left-0 right-0 flex items-center justify-between px-5 py-3 font-semibold bg-white border border-gray-200 rounded-md cursor-pointer top-full mobile:px-2 mobile:py-2"
                    onClick={disconnectWallet}
                  >
                    Disconnect
                   
                  </div>
                  
                </div>
              )}
            </div>
          ) : (
            <button onClick={connectWallet} className=" px-5 py-3 font-semibold bg-white border border-gray-200 rounded-md cursor-pointer top-full mobile:px-2 mobile:py-2"
             variant="primary" >
              Connect Wallet
            </button>
          )}
     
    </div>
  </div>

  <div className="bg-black border-t-2 border-b-2 border-cyan-600">
    <div className="container mx-auto">
      <div className="-mx-6">
        <button className="px-6 py-2 text-2xl text-white uppercase">About</button>
        <Link href="lottery"><button className="px-6 py-2 text-2xl text-white uppercase">Listed Lotteries</button></Link>
        <button className="px-6 py-2 text-2xl text-white uppercase">Upcoming Lotteries</button>
        <Link href="request"><button className="px-6 py-2 text-2xl text-white uppercase">Submit Your Project</button></Link>
        <button className="px-6 py-2 text-2xl text-white uppercase">How To</button>
      </div>
    </div>
  </div>
    </>
)
}