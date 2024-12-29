import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ContactButton } from '@/components/ui/contact-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { MultiRangeSlider } from '@/components/ui/multi-range-slider';
import { Slider } from '@/components/ui/slider';
import { Tooltip } from '@/components/ui/tooltip';
import { useCost } from '@/contexts/CostContext';
import { useTokenPrices } from '@/contexts/TokenPriceContext';
import { useGlobalUserCount } from '@/hooks/useGlobalUserCount';

interface TokenPrices {
  mini: number;
  standard: number;
  reasoning: number;
}

interface UserCategory {
  type: string;
  tokensPerMonth: number;
  color: string;
}

interface ModelCategory {
  type: string;
  pricePerMillion: number;
  color: string;
}

const categories: UserCategory[] = [
  { type: 'Sällananvändare', tokensPerMonth: 50000, color: 'bg-[#fdc500]' },
  { type: 'Vanliga användare', tokensPerMonth: 500000, color: 'bg-[#f72585]' },
  { type: 'Flitiga användare', tokensPerMonth: 5000000, color: 'bg-[#7209b7]' },
];

const getModelCategories = (prices: TokenPrices): ModelCategory[] => {
  return [
    { type: 'Mini-modeller', pricePerMillion: prices.mini || 0, color: 'bg-[#fdc500]' },
    { type: 'Standard', pricePerMillion: prices.standard || 0, color: 'bg-[#f72585]' },
    { type: 'Reasoning', pricePerMillion: prices.reasoning || 0, color: 'bg-[#7209b7]' },
  ];
};

export function ConsumptionCalculator() {
  const [totalUsers, setTotalUsers] = useGlobalUserCount();
  const [distribution, setDistribution] = useState([70, 90]); // Default: 70-20-10 split
  const [modelDistribution, setModelDistribution] = useState([15, 95]); // Default: 15-80-5 split
  const { setMonthlyTotal, setTotalUsers: setContextTotalUsers } = useCost();
  const { tokenPrices } = useTokenPrices();
  const modelCategories = getModelCategories(tokenPrices);

  const handleTotalUsersChange = (value: number[]) => {
    const total = value[0];
    setTotalUsers(total);
    setContextTotalUsers(total); // Update the context
  };

  const handleDistributionChange = (value: number[]) => {
    setDistribution(value);
  };

  const handleModelDistributionChange = (value: number[]) => {
    setModelDistribution(value);
  };

  const getUserCounts = () => {
    const rarePct = distribution[0];
    const regularPct = distribution[1] - distribution[0];
    const frequentPct = 100 - distribution[1];

    return {
      'Sällananvändare': Math.round(totalUsers * (rarePct / 100)),
      'Vanliga användare': Math.round(totalUsers * (regularPct / 100)),
      'Flitiga användare': Math.round(totalUsers * (frequentPct / 100)),
    };
  };
  const getModelDistribution = () => {
    const miniPct = modelDistribution[0];
    const standardPct = modelDistribution[1] - modelDistribution[0];
    const reasoningPct = 100 - modelDistribution[1];

    return {
      'Mini-modeller': miniPct / 100,
      'Standard': standardPct / 100,
      'Reasoning': reasoningPct / 100,
    };
  };

  const calculateTotalTokens = () => {
    const userCounts = getUserCounts();
    return categories.reduce(
      (total, cat) => total + cat.tokensPerMonth * userCounts[cat.type],
      0
    );
  };

  const calculateMonthlyCost = () => {
    const totalTokens = calculateTotalTokens();
    const modelDist = getModelDistribution();
    return (totalTokens / 1000000) * (
      modelDist['Mini-modeller'] * modelCategories[0].pricePerMillion +
      modelDist['Standard'] * modelCategories[1].pricePerMillion +
      modelDist['Reasoning'] * modelCategories[2].pricePerMillion
    );
  };

  useEffect(() => {
    setMonthlyTotal(Math.round(calculateMonthlyCost()) + 10000);
  }, [calculateMonthlyCost(), setMonthlyTotal]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-900">
          Få en uppskattning av er månadskostnad
        </CardTitle>
        <p className="mt-4 text-lg text-gray-600">
          Beräkna ungefärlig kostnad baserat på era användarmönster. Basplattformen inkluderar kostnad för upp till 100 användare. Fler användare, större kunskapsbank och tilläggstjänster kostar extra.
        </p>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="space-y-4">
          <div className="flex items-baseline gap-2">
            <Label>Antal användare:</Label>
            <span className="text-2xl font-semibold">{totalUsers}</span>
          </div>
          <Slider
            defaultValue={[totalUsers]}
            value={[totalUsers]}
            max={5000}
            step={25}
            onValueChange={handleTotalUsersChange}
            className="w-full"
          />
          
          <div className="mt-8">
            <Label>Fördelning av användare</Label>
            <MultiRangeSlider
              value={distribution}
              max={100}
              step={1}
              onValueChange={handleDistributionChange}
              className="w-full mt-2"
            />
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4">
            {categories.map((category, index) => {
              const userCounts = getUserCounts();
              const percentage = index === 0 
                ? distribution[0] 
                : index === 1 
                ? distribution[1] - distribution[0]
                : 100 - distribution[1];
              return (
              <div key={category.type} className="space-y-2">
                <Label className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${category.color}`} />
                  {category.type}
                  {` (${percentage}%)`}
                </Label>
                <p className="text-2xl">{userCounts[category.type]}</p>
                <p className="text-sm text-gray-500">
                  {category.tokensPerMonth.toLocaleString()} tokens/mån
                </p>
              </div>
            )})}
          </div>
        </div>

        <div className="space-y-4">
          <Label>Fördelning av modeller</Label>
          <MultiRangeSlider
            value={modelDistribution}
            max={100}
            step={1}
            onValueChange={handleModelDistributionChange}
            className="w-full mt-2"
          />
          <div className="grid grid-cols-3 gap-4 mt-4">
            {modelCategories.map((category, index) => {
              const dist = getModelDistribution();
              const percentage = index === 0 
                ? modelDistribution[0] 
                : index === 1 
                ? modelDistribution[1] - modelDistribution[0]
                : 100 - modelDistribution[1];
              return (
                <div key={category.type} className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${category.color}`} />
                    {category.type}
                    {` (${Math.round(percentage)}%)`}
                  </Label>
                  <p className="text-sm text-gray-500">
                    {Math.round(category.pricePerMillion)} kr/1M tokens
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-lg bg-gray-50 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Uppskattningar:</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600 flex items-center">
                Förbrukning (tokens)
                <Tooltip text="Tokens är de minsta textenheterna som AI-modeller använder. En token motsvarar ungefär 4 tecken eller 3/4 av ett ord. Till exempel är 'privatestack' två tokens." />
              </span>
              <span>
                {calculateTotalTokens().toLocaleString()} tokens
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 flex items-center">
                Tokens per användare
                <Tooltip text="Det genomsnittliga antalet tokens som varje användare förbrukar per månad, beräknat genom att dela total tokenförbrukning med antalet användare." />
              </span>
              <span>
                {Math.round(calculateTotalTokens() / totalUsers).toLocaleString()} tokens
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 flex items-center">
                Genomsnittspris per 1M tokens
                <Tooltip text="Det viktade genomsnittspriset per miljon tokens, baserat på er valda fördelning mellan olika modelltyper (Mini, Standard och Reasoning)." />
              </span>
              <span>
                {Math.round(
                  modelCategories[0].pricePerMillion * getModelDistribution()['Mini-modeller'] +
                  modelCategories[1].pricePerMillion * getModelDistribution()['Standard'] +
                  modelCategories[2].pricePerMillion * getModelDistribution()['Reasoning']
                ).toLocaleString()} kr
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Förbrukningskostnad</span>
              <span>
                {Math.round(calculateMonthlyCost()).toLocaleString()} kr
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 flex items-center">
                Basplattform
                <Tooltip text="Grundkostnad som inkluderar upp till 100 användare, 100 GB vektordatabaslagring och supportportal. Vektordatabaslagring används för att tillgängliggöra er organisations kunskap för AI-modellerna genom semantisk sökning." />
              </span>
              <span>10 000 kr</span>
            </div>
            <div className="my-2 border-t border-gray-200" />
            <div className="flex justify-between">
              <span className="text-gray-600">Total månadskostnad</span>
              <span className="font-bold">
                {(Math.round(calculateMonthlyCost()) + 10000).toLocaleString()} kr
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Genomsnittskostnad per användare</span>
              <span className="font-bold">
                {Math.round((calculateMonthlyCost() + 10000) / totalUsers).toLocaleString()} kr
              </span>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500">
          * Detta är endast en preliminär uppskattning. Faktisk kostnad varierar med
          verkligt användningsmönster, modellval och tillkommande funktioner.
          En vanlig fråga använder ca 2-500 tokens. En större kontextuell sökning är ca 3-8000 tokens.
        </p>

        <ContactButton 
          className="w-full" 
          size="lg"
          title="Få en detaljerad kostnadsanalys"
          description="Fyll i formuläret så återkommer vi med en detaljerad kostnadsanalys anpassad för era behov"
          defaultMessage="Jag är intresserad av att få en detaljerad kostnadsanalys"
        >
          Få en detaljerad kostnadsanalys
        </ContactButton>
      </CardContent>
    </Card>
  );
}