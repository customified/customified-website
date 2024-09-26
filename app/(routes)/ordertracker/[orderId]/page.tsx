// app/orders/[orderId]/page.tsx
import React from 'react';

import GetOrder from '@/actions/get-order';
import Container from '@/components/ui/Container';
import Summary from './components/Summary';

interface OrderDetailPageProps {
  params: {
    orderId: string;
  };
}

export const revalidate = 0;

const fetchOrderById = async (orderId: string) => {
  const order = await GetOrder(orderId)
  return order;
};

const OrderDetailPage: React.FC<OrderDetailPageProps> = async ({ params }) => {
  const order = await fetchOrderById(params.orderId);


  return (
    <Container>
      <div className='md:my-20 lg:mx-32 my-10  mx-5'>
      <h2 className='md:text-3xl text-2xl font-bold mb-4 my-10 text-center'>Order Details</h2>
      <Summary order={order}/>
      </div>
      </Container>
  );
};

export default OrderDetailPage;
