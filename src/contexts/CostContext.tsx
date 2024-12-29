import { createContext, useState, useContext } from 'react';

interface CostContextType {
  monthlyTotal: number;
  totalUsers: number;
  setMonthlyTotal: (value: number) => void;
  setTotalUsers: (value: number) => void;
}

export const CostContext = createContext<CostContextType>({
  monthlyTotal: 0,
  totalUsers: 150,
  setMonthlyTotal: () => {},
  setTotalUsers: () => {},
});

export function CostProvider({ children }: { children: React.ReactNode }) {
  const [monthlyTotal, setMonthlyTotal] = useState(0);
  const [totalUsers, setTotalUsers] = useState(150);

  return (
    <CostContext.Provider value={{ monthlyTotal, setMonthlyTotal, totalUsers, setTotalUsers }}>
      {children}
    </CostContext.Provider>
  );
}

export function useCost() {
  return useContext(CostContext);
}