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
            <button onClick={(e) => handleButtonClick(e, 'aboutme-section')}>01. About Me</button>
            <button onClick={(e) => handleButtonClick(e, 'education-section')}>02. Education</button>
            <button onClick={(e) => handleButtonClick(e, 'experience-section')}>03. Experience</button>
            <button onClick={(e) => handleButtonClick(e, 'projects-section')}>04. Projects</button>
            <button onClick={gotoBlog}>05. Blog</button>
        </div>
    )
}

export default NavBar