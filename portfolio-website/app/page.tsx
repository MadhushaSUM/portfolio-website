'use client';

import { useEffect, useState } from "react";

export default function Home() {

    const [typewriterText, setTypewriterText] = useState('');

    const words = ['Madhusha Laksitha ', '_ ', '_ ', 'a Software Engineer ', '_ ', '_ ', 'a Gamer ', '_ ', '_ '];
    let i = 0;
    let j = 0;
    let currentWord = "";
    let isDeleting = false;

    function typingAnimation() {
        currentWord = words[i];
        if (isDeleting) {
            setTypewriterText(currentWord.substring(0, j - 1));
            j--;
            if (j === 0) {
                isDeleting = false;
                i = (i + 1) % words.length;
            }
        } else {
            setTypewriterText(currentWord.substring(0, j + 1));
            j++;
            if (j === currentWord.length) {
                isDeleting = true;
            }
        }
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            typingAnimation();
        }, 100);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <div className='toplevel-text'>
                <h1 className='toplevel-text-hello'>Hi,</h1>

                <div className='flex gap-14 toplevel-text-other'>
                    <h1>I'm</h1>
                    <h1 id='typewriter'>{typewriterText}</h1>
                </div>
            </div>            
        </div>
    )
}