import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HomePage from 'pages/home';
import Layout from 'shared/components/Layout';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <HomePage />
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
