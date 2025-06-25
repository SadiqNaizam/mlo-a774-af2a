import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, ChevronDown } from 'lucide-react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Area 
} from 'recharts';

const graphData = [
  { name: 'March', closedWon: 65, closedLost: 68 },
  { name: 'April', closedWon: 22, closedLost: 45 },
  { name: 'May', closedWon: 64, closedLost: 52 },
  { name: 'June', closedWon: 70, closedLost: 10 },
  { name: 'July', closedWon: 85, closedLost: 42 },
  { name: 'August', closedWon: 30, closedLost: 95 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card p-2 border border-border rounded-md shadow-lg">
        <p className="label text-sm font-bold">{`${label}`}</p>
        <p className="text-teal-500 text-sm">{`Closed won: ${payload[0].value}`}</p>
        <p className="text-red-500 text-sm">{`Closed lost: ${payload[1].value}`}</p>
      </div>
    );
  }
  return null;
};

const LeadsTrackingGraph: React.FC = () => {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold">Leads tracking</h2>
            <div className="flex items-baseline gap-4 text-muted-foreground">
              <p><span className="text-2xl font-bold text-foreground">680</span> total closed</p>
              <p><span className="text-2xl font-bold text-foreground">70</span> total lost</p>
            </div>
          </div>
          <Button variant="outline" className="flex items-center gap-2 text-muted-foreground">
            <CalendarDays className="h-4 w-4" />
            <span>last 6 months</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={graphData} margin={{ top: 5, right: 20, left: -10, bottom: 20 }}>
              <defs>
                <linearGradient id="colorWon" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#14b8a6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorLost" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))"/>
              <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} dy={10} />
              <YAxis tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="closedWon" stroke="#14b8a6" strokeWidth={2} fillOpacity={1} fill="url(#colorWon)" dot={{ r: 4, fill: '#14b8a6' }} activeDot={{ r: 6, strokeWidth: 2 }} />
              <Area type="monotone" dataKey="closedLost" stroke="#ef4444" strokeWidth={2} fillOpacity={1} fill="url(#colorLost)" dot={{ r: 4, fill: '#ef4444' }} activeDot={{ r: 6, strokeWidth: 2 }}/>
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center items-center gap-6 mt-4">
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-[#14b8a6]"></div>
                <span className="text-sm text-muted-foreground">Closed won</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-[#ef4444]"></div>
                <span className="text-sm text-muted-foreground">Closed lost</span>
            </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadsTrackingGraph;
