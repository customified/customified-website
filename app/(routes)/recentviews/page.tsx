
import Container from '@/components/ui/Container'
import Item from './components/Item'

export const revalidate = 0

const CartPage = () => {

    return (
        <div className='bg-white'>
            <Container>
                <div className='px-4 py-16 sm:px-6 lg:px-8 2xl:px-10'>
                    <h1 className='text-3xl font-bold text-black'>Recently Viewed</h1>
                    <Item />
                </div>
            </Container>
        </div>
    )
}

export default CartPage