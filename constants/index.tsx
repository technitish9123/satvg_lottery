type IChain = {
    name: string;
    swap: string;
    chainIds: { [key: string]: number };
    bgColor: string;
    textColor: string;
    blocks: number;
    explorer: string;
  };
  
  export const CHAINS: { [key: string]: IChain } = {
    BSC: {
      name: 'Binance',
      swap: 'PancakeSwap',
      chainIds: {
        prod: 56,
        dev: 97,
      },
      bgColor: '#000000',
      textColor: '#F0B90B',
      blocks: 10402500,
      explorer: 'BscScan',
    },
    POLY: {
      name: 'Polygon',
      swap: 'QuickSwap',
      chainIds: {
        prod: 137,
        dev: 80001,
      },
      bgColor: '#8247E5',
      textColor: '#FFFFFF',
      blocks: 15768000,
      explorer: 'PolygonScan',
    },
    AVAX: {
      name: 'Avalanche',
      swap: 'Trader Joe',
      chainIds: {
        prod: 43114,
        dev: 43113,
      },
      bgColor: '#E84142',
      textColor: '#FFFFFF',
      blocks: 10512000,
      explorer: 'SnowTrace',
    },
  };

  
type IToken = {
    address: { [key: number]: string };
    name?: string;
  };
  
  export const TOKENS: { [key: string]: { [key: string]: IToken } } = {
    BSC: {
    
      BNB: {
        address: {
          56: '0xc7198437980c041c805A1EDcbA50c1Ce5db95118',
          97: '0x54d8b11d6a0437A48fEB1F92fb21418E269ac5fa',
        },
        name: 'BNB',
      },
      BUSD: {
        address: {
          56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
          97: '0x3072e6d4F00Afaa19c06F9eecF0ef8CEE4A2f414',
        },
      },
      CAKE: {
        address: {
          56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
          97: '0x72B81909583ca4C9ccc8374eDD3e770C5181bB16',
        },
      },
      
    },
   
  };