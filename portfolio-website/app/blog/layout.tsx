import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import RightPanel from '@/components/Blog/RightPanel'
import { BlogSearchContextProvider } from '@/context/BlogSearchContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Madhusha Laksitha',
    description: 'Madhusha Laksitha\'s portfolio website',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (
        <BlogSearchContextProvider>
            <div className={inter.className}>
                <div className='background' />

                <div className='w-4/5 flex flex-row mx-auto pt-16 pb-16'>
                    <div className='w-2/3'>
                        {children}
                    </div>
                    <div className='w-1/3'>
                        <div className='fixed h-5/6'>
                            <RightPanel />
                        </div>
                    </div>
                </div>
            </div>
        </BlogSearchContextProvider>
    )
}
