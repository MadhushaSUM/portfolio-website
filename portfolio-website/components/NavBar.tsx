'use client';

import { useRouter } from "next/navigation";

const NavBar = () => {
    const router = useRouter();

    const scrollToSection = (elementID: string) => {
        window.scrollTo({
            top: document.getElementById(elementID)!.offsetTop - 30,
            behavior: 'smooth'
        });
    }

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>, elementID: string) => {
        e.preventDefault();
        setTimeout(() => {
            scrollToSection(elementID);
        }, 200);
    };

    const gotoBlog = () => {
        router.push("/blog");
    };


    return (
        <div className='navbar'>
            <button onClick={(e) => handleButtonClick(e, 'aboutme-section')}>About Me</button>
            <button onClick={(e) => handleButtonClick(e, 'education-section')}>Education</button>
            <button onClick={(e) => handleButtonClick(e, 'experience-section')}>Experience</button>
            <button onClick={(e) => handleButtonClick(e, 'projects-section')}>Projects</button>
            <button onClick={gotoBlog}>Blog</button>
        </div>
    )
}

export default NavBar