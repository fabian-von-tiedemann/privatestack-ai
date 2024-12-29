import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { useContext } from 'react';
import { CostContext } from '@/contexts/CostContext';

interface Service {
  name: string;
  costPerUser: number;
  description: string;
}

const services: Service[] = [
  { 
    name: 'ChatGPT Teams (300 kr/anv)',
    costPerUser: 300,
    description: 'Grundläggande AI-assistans'
  },
  { 
    name: 'Microsoft 365 Copilot (350 kr/anv)',
    costPerUser: 350,
    description: 'AI-integrerat i Microsoft 365'
  },
  { 
    name: 'Google One AI (225 kr/anv)',
    costPerUser: 225,
    description: 'AI-funktioner i Google Workspace'
  },
  { 
    name: 'Midjourney (350 kr/anv)',
    costPerUser: 350,
    description: 'Bildgenerering'
  },
  { 
    name: 'Övriga AI tjänster (300 kr/anv)',
    costPerUser: 300,
    description: 'Mötesantecknare, videogenerering, marketing'
  },
  { 
    name: 'AI i befintliga tjänster (100 kr/anv)',
    costPerUser: 100,
    description: 'CRM, CMS, Notion'
  }
];

export function CostComparison() {
  const [serviceUsage, setServiceUsage] = useState<Record<string, number>>({});
  const [totalCost, setTotalCost] = useState(0);
  const { monthlyTotal, totalUsers } = useContext(CostContext);
  
  // Reset service usage when total users changes
  useEffect(() => {
    const initialUsage = {
      'ChatGPT Teams (300 kr/anv)': 100,
      'Microsoft 365 Copilot (350 kr/anv)': 20,
      'Google One AI (225 kr/anv)': 0,
      'Midjourney (350 kr/anv)': 2,
      'Övriga AI tjänster (300 kr/anv)': 5,
      'AI i befintliga tjänster (100 kr/anv)': 25
    };
    setServiceUsage(initialUsage);
  }, [totalUsers]);

  useEffect(() => {
    // Calculate total cost whenever service usage changes
    const cost = Object.entries(serviceUsage).reduce((total, [service, percentage]) => {
      const serviceObj = services.find(s => s.name === service);
      if (serviceObj) {
        return total + (totalUsers * (percentage / 100) * serviceObj.costPerUser);
      }
      return total;
    }, 0);
    setTotalCost(cost);
  }, [serviceUsage, totalUsers, monthlyTotal]);

  const handlePercentageChange = (service: string, value: number) => {
    setServiceUsage(prev => ({
      ...prev,
      [service]: value
    }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-900">
          Jämför med alternativ
        </CardTitle>
        <p className="mt-4 text-lg text-gray-600">
          Se kostnadsjämförelse med traditionella AI-tjänster
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          <div>
            <Label>Antal användare: <span className="font-semibold">{totalUsers}</span></Label>
            <p className="text-sm text-gray-500 mt-1">
              Baserat på antalet användare från kostnadskalkylatorn ovan
            </p>
          </div>

          <div className="space-y-6">
            {services.map((service) => (
              <div key={service.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label>{service.name}</Label>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">
                      {Math.round(totalUsers * ((serviceUsage[service.name] || 0) / 100))} användare ({serviceUsage[service.name] || 0}%)
                    </span>
                  </div>
                </div>
                <div className="mt-2">
                  <Slider
                    value={[serviceUsage[service.name] || 0]}
                    max={100}
                    step={1}
                    onValueChange={(value) => handlePercentageChange(service.name, value[0])}
                    className="w-full"
                  />
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-gray-500">{service.description}</span>
                  <span className="text-gray-900">
                    {Math.round(totalUsers * ((serviceUsage[service.name] || 0) / 100) * service.costPerUser).toLocaleString()} kr/mån
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-lg bg-gray-50 p-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Total kostnad för separata tjänster</span>
                <span>{Math.round(totalCost).toLocaleString()} kr/mån</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Kostnad med privatestack.ai</span>
                <span>
                  {monthlyTotal.toLocaleString()} kr/mån
                </span>
              </div>
              <div className="my-2 border-t border-gray-200" />
              <div className="flex justify-between">
                <span className="text-gray-600">Potentiell besparing</span>
                <span className="font-bold text-green-600">
                  <span className={totalCost - monthlyTotal >= 0 ? "text-green-600" : "text-red-600"}>
                    {Math.round(totalCost - monthlyTotal).toLocaleString()} kr/mån
                  </span>
                </span>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-500">
            * Beräkningen är en uppskattning baserad på genomsnittliga kostnader för olika AI-tjänster. 
            Faktiska kostnader kan variera beroende på specifika avtal och användningsmönster.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}