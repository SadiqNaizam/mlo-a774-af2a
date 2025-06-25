import React from 'react';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import PageHeader from '../components/Dashboard/PageHeader';
import FunnelCount from '../components/Dashboard/FunnelCount';
import SourcesChart from '../components/Dashboard/SourcesChart';
import LeadsTrackingGraph from '../components/Dashboard/LeadsTrackingGraph';
import ReasonsAndOtherData from '../components/Dashboard/ReasonsAndOtherData';

/**
 * The main dashboard page for the "Leads Analytics Overview".
 * This component acts as the primary view, organizing various data visualization
 * components into a cohesive layout. It utilizes a fixed sidebar and header,
 * with a main content area that displays analytics widgets in a responsive grid.
 */
const IndexPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-background">
      <Sidebar />
      <div className="flex flex-col md:pl-64">
        <Header />
        <main className="flex-1 pt-16">
          <div className="p-6 space-y-6">
            <PageHeader />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <FunnelCount />
              <SourcesChart />
              <LeadsTrackingGraph />
              <ReasonsAndOtherData />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default IndexPage;
