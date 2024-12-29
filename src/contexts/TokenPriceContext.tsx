import { createContext, useState, useContext } from 'react';

interface TokenPrices {
  mini: number;
  standard: number;
  reasoning: number;
}

interface TokenPriceContextType {
  tokenPrices: TokenPrices;
  setTokenPrices: (prices: TokenPrices) => void;
}

export const TokenPriceContext = createContext<TokenPriceContextType>({
  tokenPrices: { mini: 0, standard: 0, reasoning: 0 },
  setTokenPrices: () => {},
});

export function TokenPriceProvider({ children }: { children: React.ReactNode }) {
  const [tokenPrices, setTokenPrices] = useState<TokenPrices>({
    mini: 0,
    standard: 0,
    reasoning: 0,
  });

  return (
    <TokenPriceContext.Provider value={{ tokenPrices, setTokenPrices }}>
      {children}
    </TokenPriceContext.Provider>
  );
}

export function useTokenPrices() {
  return useContext(TokenPriceContext);
}