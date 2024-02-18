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
            <NavBar />
            <div className='w-4/5 mx-auto flex flex-col mt-10'>
                <div className='w-2/5 h-4/5 fixed'>
                    <Profile />
                </div>
                
                <div className='ml-auto w-1/2 flex flex-col space-y-10'>
                    <AboutMe />
                    <Education />
                    <Experience />
                    <Projects />
                    
                    <div className='py-20 text-white flex justify-center'>
                        Inspired by&nbsp;
                        <a className='hover:text-slate-400' href='https://brittanychiang.com/'>
                            Brittany Chiang's website
                        </a>. 
                    </div>                    
                </div>            
            </div>
        </div>
    )
}