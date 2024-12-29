import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useCost } from '@/contexts/CostContext';
import { useGlobalUserCount } from '@/hooks/useGlobalUserCount';

const TOKENS_PER_USER = 635000; // Average tokens per user per month
const TOKEN_PRICE = 67; // Price per 1M tokens in SEK
const BASE_PLATFORM_COST = 10000; // Monthly base cost in SEK

export function SimpleCalculator() {
  const [users, setUsers] = useGlobalUserCount();
  const { setTotalUsers } = useCost();

  useEffect(() => {
    setTotalUsers(users);
  }, [users, setTotalUsers]);

  const calculateMonthlyCost = (userCount: number) => {
    const tokenCost = (userCount * TOKENS_PER_USER * TOKEN_PRICE) / 1000000;
    return Math.round(tokenCost + BASE_PLATFORM_COST);
  };

  const handleUsersChange = (value: number[]) => {
    setUsers(value[0]);
    setTotalUsers(value[0]);
  };

  const monthlyCost = calculateMonthlyCost(users);
  const costPerUser = Math.round(monthlyCost / users);

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-900">
          Snabbkalkyl
        </CardTitle>
        <p className="mt-4 text-lg text-gray-600">
          Beräkna ungefärlig månadskostnad baserat på antal användare. Basplattformen inkluderar kostnad för upp till 100 användare. Fler användare, större kunskapsbank och tilläggstjänster kostar extra.
        </p>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="space-y-4">
          <div className="flex items-baseline gap-2">
            <Label>Antal användare:</Label>
            <span className="text-2xl font-semibold">{users}</span>
          </div>
          <Slider
            defaultValue={[100]}
            value={[users]}
            max={5000}
            step={25}
            onValueChange={handleUsersChange}
            className="w-full"
          />
        </div>

        <div className="rounded-lg bg-gray-50 p-6">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Basplattform</span>
              <span>{BASE_PLATFORM_COST.toLocaleString()} kr</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Förbrukningskostnad</span>
              <span>{(monthlyCost - BASE_PLATFORM_COST).toLocaleString()} kr</span>
            </div>
            <div className="my-2 border-t border-gray-200" />
            <div className="flex justify-between">
              <span className="text-gray-600">Total månadskostnad</span>
              <span className="font-bold">{monthlyCost.toLocaleString()} kr</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Kostnad per användare</span>
              <span className="font-bold">{costPerUser.toLocaleString()} kr</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500">
          * Beräkningen baseras på en genomsnittlig förbrukning av {TOKENS_PER_USER.toLocaleString()} tokens per användare och månad, 
          till ett snittpris av {TOKEN_PRICE} kr per miljon tokens.
        </p>
        
        <Button asChild variant="outline" className="w-full">
          <Link to="/pricing/detailed">
            Detaljerad kalkyl
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}