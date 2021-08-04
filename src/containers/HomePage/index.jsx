import React from 'react';
import AppLayout from 'components/layout/AppLayout';
import EnterpriseCard from 'components/EnterpriseCard';
import Banner from 'components/Banner';

export default function HomePage() {
  return (
    <AppLayout>
      <Banner />
      <EnterpriseCard />
    </AppLayout>
  );
}
