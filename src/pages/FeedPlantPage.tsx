import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Table from '@/components/table';

const FeedPlantPage: React.FC = () => {
  const tableData = [
    { model: 'SVRDG10', power: '23 hp', capacity: '2-3 TPH' },
    { model: 'SVRDG20', power: '36 hp', capacity: '4-5 TPH' },
    { model: 'SVRDG30', power: '46 hp', capacity: '6-7 TPH' },
    { model: 'SVRDG40', power: '61 hp', capacity: '7-8 TPH' },
    { model: 'SVRDG50', power: '71 hp', capacity: '10-12 TPH' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Feed Plant Specifications</h1>
      
      <Card className="mb-8">
        <CardContent className="pt-6">
          <h2 className="text-2xl font-semibold mb-6">Technical Specifications</h2>
          <p className="mb-6 text-muted-foreground">
            Below are the technical specifications for our feed plant equipment. Please contact us for more detailed information.
          </p>
          
          <Table 
            data={tableData}
            title=""
            className="mt-4"
          />
        </CardContent>
      </Card>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4">Features</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• High efficiency and low power consumption</li>
              <li>• Durable construction for long service life</li>
              <li>• Easy to operate and maintain</li>
              <li>• Customizable configurations available</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4">Applications</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Poultry feed production</li>
              <li>• Livestock feed processing</li>
              <li>• Aqua feed manufacturing</li>
              <li>• Feed mills and processing plants</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FeedPlantPage;
