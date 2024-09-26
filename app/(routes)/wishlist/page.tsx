
import Container from '@/components/ui/Container'
import WishlistClient from './components/WishlistClient'

export const revalidate = 0

const WishListPage = () => {

    return (
        <div className='bg-white'>
            <Container>
                <div className='px-4 py-16 sm:px-6 lg:px-8'>
                    <h1 className='text-2xl md:text-3xl font-bold text-black'>Your WishList</h1>
                        <WishlistClient />
                </div>
            </Container>
        </div>
    )
}

export default WishListPage