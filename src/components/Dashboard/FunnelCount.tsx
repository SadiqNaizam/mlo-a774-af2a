import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

interface FunnelStage {
  name: 'Discovery' | 'Qualified' | 'In conversation' | 'Negotiations' | 'Closed won' as const;
  count: number;
  value: number;
  duration: string;
  color: string;
}

const funnelData: FunnelStage[] = [
  { name: 'Discovery', count: 200, value: 200, duration: '2 days', color: 'bg-red-400' },
  { name: 'Qualified', count: 100, value: 100, duration: '2 days', color: 'bg-yellow-400' },
  { name: 'In conversation', count: 50, value: 100, duration: '5 days', color: 'bg-indigo-900' },
  { name: 'Negotiations', count: 20, value: 50, duration: '8 days', color: 'bg-green-400' },
  { name: 'Closed won', count: 20, value: 50, duration: '10 days', color: 'bg-purple-600' },
];

const FunnelCount: React.FC = () => {
  const totalCount = funnelData.reduce((sum, item) => sum + item.count, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Funnel count</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold">600</span>
          <span className="text-muted-foreground">active leads</span>
        </div>
        <div className="w-full flex h-2 rounded-full overflow-hidden my-4">
          {funnelData.map(stage => (
            <div key={stage.name} className={cn('h-full', stage.color)} style={{ width: `${(stage.count / totalCount) * 100}%` }} />
          ))}
        </div>
        <div className="space-y-3 text-sm">
          {funnelData.map((stage, index) => (
            <div key={stage.name} className="grid grid-cols-[auto_1fr_auto_auto_auto] items-center gap-x-4 text-muted-foreground">
              <div className={cn('w-2.5 h-2.5 rounded-full', stage.color)} />
              <span className="text-foreground font-medium">{stage.name}</span>
              <span className="justify-self-end">{stage.count}</span>
              <span className="justify-self-end text-right w-20">$ {stage.value.toLocaleString()}</span>
              {index === 2 ? (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="justify-self-end cursor-default w-20 text-right">{stage.duration}</span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>average time on this stage</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : (
                <span className="justify-self-end w-20 text-right">{stage.duration}</span>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FunnelCount;
