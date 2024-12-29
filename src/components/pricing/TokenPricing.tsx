import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { useState, useEffect } from 'react';
import { useTokenPrices } from '@/contexts/TokenPriceContext';
import { cn } from '@/lib/utils';

const calculateCategoryAverage = (models: Model[], category: string, inputRatio: number) => {
  const categoryModels = models.filter(model => model.category === category);
  if (categoryModels.length === 0) return 0;
  
  const blendedPrices = categoryModels.map(model => 
    (model.input * (inputRatio / 100) + model.output * ((100 - inputRatio) / 100))
  );
  
  return blendedPrices.reduce((a, b) => a + b, 0) / blendedPrices.length;
};

interface Model {
  name: string;
  input: number;
  output: number;
  category: 'mini' | 'standard' | 'reasoning';
}

const models: Model[] = [
  { name: 'Gemini 1.5 Flash', input: 1.00, output: 4.29, category: 'mini' },
  { name: 'GPT4o mini', input: 2.15, output: 8.58, category: 'mini' },
  { name: 'Llama 3.1 70B', input: 10.01, output: 10.01, category: 'mini' },
  { name: 'Gemini 1.5 Pro', input: 17.88, output: 71.50, category: 'standard' },
  { name: 'Mistral Large 2', input: 28.60, output: 85.80, category: 'standard' },
  { name: 'GPT4o', input: 35.75, output: 143.00, category: 'standard' },
  { name: 'o1 mini', input: 42.90, output: 171.60, category: 'standard' },
  { name: 'Claude Sonnet 3.5', input: 42.90, output: 214.50, category: 'standard' },
  { name: 'o1', input: 214.50, output: 858.00, category: 'reasoning' },
];

const categoryColors = {
  mini: 'bg-green-500',
  standard: 'bg-blue-500',
  reasoning: 'bg-purple-500'
};
export function TokenPricing() {
  const [inputRatio, setInputRatio] = useState(75);
  const { setTokenPrices } = useTokenPrices();

  useEffect(() => {
    const miniAvg = calculateCategoryAverage(models, 'mini', inputRatio);
    const standardAvg = calculateCategoryAverage(models, 'standard', inputRatio);
    const reasoningAvg = calculateCategoryAverage(models, 'reasoning', inputRatio);
    
    setTokenPrices({
      mini: miniAvg,
      standard: standardAvg,
      reasoning: reasoningAvg
    });
  }, [inputRatio, setTokenPrices]);

  const categoryLabels = {
    mini: `Mini (${calculateCategoryAverage(models, 'mini', inputRatio).toFixed(0)} kr/1M tokens)`,
    standard: `Standard (${calculateCategoryAverage(models, 'standard', inputRatio).toFixed(0)} kr/1M tokens)`,
    reasoning: `Reasoning (${calculateCategoryAverage(models, 'reasoning', inputRatio).toFixed(0)} kr/1M tokens)`
  };

  const calculateBlendedPrice = (input: number, output: number) => {
    return (input * (inputRatio / 100) + output * ((100 - inputRatio) / 100)).toFixed(2);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-900">
          Betala bara för det ni använder
        </CardTitle>
        <p className="mt-4 text-lg text-gray-600">
          Pris per 1M tokens
        </p>
      </CardHeader>
      <CardContent>
        <div className="mb-8 flex gap-4">
          {Object.entries(categoryLabels).map(([category, label]) => (
            <div key={category} className="flex items-center gap-2">
              <div className={cn('w-6 h-4 rounded-lg', {
                'bg-[#fdc500]': category === 'mini',
                'bg-[#f72585]': category === 'standard',
                'bg-[#7209b7]': category === 'reasoning'
              })} />
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>

        <div className="mb-8 space-y-4">
          <div className="flex items-baseline gap-2">
            <Label>Input-output ratio:</Label>
            <span className="text-2xl font-semibold">{inputRatio}% – {100 - inputRatio}%</span>
          </div>
          <Slider
            defaultValue={[75]}
            value={[inputRatio]}
            max={100}
            step={1}
            onValueChange={(value) => setInputRatio(value[0])}
          />
        </div>

      <table className="w-full border-t border-gray-200">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 bg-gray-50 w-1/3">
              Modell
            </th>
            <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900 bg-gray-50">
              Input
            </th>
            <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900 bg-gray-50">
              Output
            </th>
            <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900 bg-gray-50">
              Blended ({inputRatio}:{100-inputRatio})
            </th>
          </tr>
        </thead>
        <tbody>
          {models.map((model, index) => (
            <tr
              key={model.name}
              className={cn(
                'transition-colors',
                index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              )}
            >
              <td className="px-6 py-4 text-sm text-gray-900">
                <div className="flex items-center gap-3">
                  <div className={cn('w-6 h-4 rounded-lg flex-shrink-0', {
                    'bg-[#fdc500]': model.category === 'mini',
                    'bg-[#f72585]': model.category === 'standard',
                    'bg-[#7209b7]': model.category === 'reasoning'
                  })} />
                  {model.name}
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-gray-900 text-center">
                <div className="flex items-center justify-center">
                  <span>{model.input.toFixed(2)} kr</span>
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-gray-900 text-center">
                <div className="flex items-center justify-center">
                  <span>{model.output.toFixed(2)} kr</span>
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-gray-900 text-center">
                <div className="flex items-center justify-center">
                  <span>{calculateBlendedPrice(model.input, model.output)} kr</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="px-6 py-4 bg-gray-50 text-sm text-gray-500">
        * Priserna inkluderar 30% påslag på underliggande API-kostnad och kan justeras baserat på aktuella API-kostnader.
      </div>
      </CardContent>
    </Card>
  );
}