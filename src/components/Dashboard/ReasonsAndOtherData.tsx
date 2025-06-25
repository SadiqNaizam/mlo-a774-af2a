import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Info } from 'lucide-react';

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, className }) => (
  <div className={className}>
    <p className="text-4xl font-light text-foreground">{value}</p>
    <p className="text-sm text-muted-foreground">{label}</p>
  </div>
);

const ReasonsAndOtherData: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 col-span-2">
      <Card>
        <CardHeader>
          <CardTitle>Reasons of leads lost</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <StatCard value="40%" label="The proposal is unclear" />
            <StatCard value="20%" label="However venture pursuit" />
            <StatCard value="10%" label="Other" />
            <StatCard value="30%" label="The proposal is unclear" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Other data</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <StatCard value="900" label="total leads count" />
            <StatCard value="12" label="days in average to convert lead" />
            <div>
              <p className="text-4xl font-light text-foreground">30</p>
              <div className="flex items-center gap-1">
                <p className="text-sm text-muted-foreground">inactive leads</p>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-3 w-3 text-muted-foreground cursor-pointer" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Leads with no activity in 30 days.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReasonsAndOtherData;
