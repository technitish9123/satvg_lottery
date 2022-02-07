
import { TOKENS, CHAINS } from '../constants';
import { TokenABI } from '../constants/abis';

export const  getBSCTokenContract = (chain: string, web3: any) => {
    const chainId = CHAINS[chain].chainIds[process.env.NEXT_PUBLIC_ENV ?? 'dev'];
    const BSCToken = new web3.eth.Contract(
      TokenABI,
      TOKENS[chain].BSC.address[chainId]
    );
    return BSCToken;
  };


  export const getBSCTokenBalanceOf = async (
    address: string,
    chain: string,
    web3: any
  ) => {
    const bscToken = getBSCTokenContract(chain, web3);
  
    return await bscToken.methods
      .balanceOf(address)
      .call({ from: '0x0000000000000000000000000000000000000000' });
  };