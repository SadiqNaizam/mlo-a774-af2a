import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip as RechartsTooltip } from 'recharts';
import { cn } from '@/lib/utils';

interface SourceData {
  name: string;
  value: number;
  percentage: number;
  color: string;
}

const sourcesData: SourceData[] = [
  { name: 'Clutch', value: 3000, percentage: 50, color: '#f87171' }, // red-400
  { name: 'Behance', value: 1000, percentage: 40, color: '#facc15' }, // yellow-400
  { name: 'Instagram', value: 1000, percentage: 10, color: '#0d9488' }, // teal-600
  { name: 'Dribbble', value: 1000, percentage: 10, color: '#86efac' }, // green-300
];

const SourcesChart: React.FC = () => {
  const [activeToggle, setActiveToggle] = useState('leadsConverted');

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sources</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="h-48 md:h-56">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <RechartsTooltip 
                  contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }} 
                />
                <Pie data={sourcesData} dataKey="percentage" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={2}>
                  {sourcesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3 text-sm">
            {sourcesData.map(source => (
              <div key={source.name} className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-x-3">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: source.color }} />
                <span className="text-foreground font-medium">{source.name}</span>
                <span className="text-muted-foreground">$ {source.value.toLocaleString()}</span>
                <span className="text-muted-foreground text-right w-12">{source.percentage}%</span>
              </div>
            ))}
            <div className="text-right pt-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                        <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">from leads total</span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Percentage from total leads</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <ToggleGroup type="single" value={activeToggle} onValueChange={(value) => value && setActiveToggle(value)} className="border border-border rounded-md p-0.5">
            <ToggleGroupItem value="leadsCame" className="text-xs px-3 py-1 data-[state=on]:bg-secondary">Leads came</ToggleGroupItem>
            <ToggleGroupItem value="leadsConverted" className="text-xs px-3 py-1 data-[state=on]:bg-secondary">Leads Converted</ToggleGroupItem>
            <ToggleGroupItem value="totalDealsSize" className="text-xs px-3 py-1 data-[state=on]:bg-secondary">Total deals size</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </CardContent>
    </Card>
  );
};

export default SourcesChart;
