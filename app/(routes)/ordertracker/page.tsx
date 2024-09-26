import GetOrdersByEmail from '@/actions/get-orders';
import Container from '@/components/ui/Container';
import { currentUser } from '@clerk/nextjs/server';
import OrderItem from './components/OrderItem';

export const revalidate = 0

const OrdersPage = async () => {
  const user = await currentUser();
  const email = user?.primaryEmailAddress?.emailAddress;

  const orders = await GetOrdersByEmail(email ? email : '', { cache: 'no-store' });

  return (
    <Container>
    <div className='flex my-10 md:my-20 md:mx-10  w-[100%]'>
      {orders.length === 0 ? (
        <div>No Orders yet</div>
      ) : (
        <div className="flex flex-col gap-3 md:gap-6 w-[100%] justify-center items-center">
          <h2 className='text-2xl md:text-3xl font-bold mb-4 text-center'>Order History</h2>
          {orders.map(order => (
            <OrderItem key={order._id} order={order} />
          ))}
        </div>
      )}
    </div>
    </Container>
  );
};

export default OrdersPage