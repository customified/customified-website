
import React from 'react'
import { Frown, ChevronsLeft } from 'lucide-react'
import Link from 'next/link'

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center  bg-gray-100">
            <div className="flex flex-col items-center justify-center bg-gray-100 h-full py-10">
                <Frown className="w-16 h-16 text-red-500 mb-4" />
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Page Not Found</h1>
                <p className="text-gray-600 mb-6">Sorry, the page you are looking for does not exist.</p>
                <Link href="/" className="px-4 py-2 text-white rounded bg-teal-600 transition-colors flex items-center">
                    <ChevronsLeft className="w-4 h-4 mr-2" />
                    Go Back Home
                </Link>
            </div>
        </div>
    )
}

export default NotFound
