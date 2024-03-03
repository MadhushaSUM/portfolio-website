import NavBar from '@/components/NavBar'
import AboutMe from '@/components/AboutMe'
import Education from '@/components/Education'
import Profile from '@/components/Profile'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'

export default function Home() {

    return (
        <div>
            <div className='background' />
            <div className='hidden sm:block'>
                <NavBar />
            </div>
            <div className='w-4/5 mx-auto flex flex-col pt-10'>
                <div className='sm:w-2/5 sm:h-4/5 sm:fixed'>
                    <Profile />
                </div>
                
                <div className='sm:ml-auto sm:w-1/2 flex flex-col gap-5 mt-5 sm:mt-0'>
                    <AboutMe />
                    <Education />
                    <Experience />
                    <Projects />
                    
                    <div className='py-20 text-white flex justify-center gap-1'>
                        <span>Inspired by</span>
                        <a className='hover:text-slate-400' href='https://brittanychiang.com/'>
                            {`Brittany Chiang's website`}
                        </a>. 
                    </div>                    
                </div>            
            </div>
        </div>
    )
}