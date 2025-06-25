import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarDays, ChevronDown } from 'lucide-react';

const PageHeader: React.FC = () => {
  const [activeTab, setActiveTab] = useState('leads');

  return (
    <div className="flex items-center justify-between">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="bg-transparent p-0">
          <TabsTrigger 
            value="sales" 
            className="text-muted-foreground data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4"
          >
            Sales
          </TabsTrigger>
          <TabsTrigger 
            value="leads"
            className="text-muted-foreground data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4"
          >
            Leads
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <Button variant="outline" className="flex items-center gap-2 text-muted-foreground">
        <CalendarDays className="h-4 w-4" />
        <span>last 6 months</span>
        <ChevronDown className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default PageHeader;
