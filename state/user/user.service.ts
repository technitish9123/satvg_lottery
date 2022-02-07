import Web3 from 'web3';

import { TokenContract } from '../../contracts';

export const updateBalance = async (
  address: string,
  chain: string,
  web3: Web3
): Promise<any> =>
// get balance
  await TokenContract.getBSCTokenBalanceOf(address, chain, web3);
