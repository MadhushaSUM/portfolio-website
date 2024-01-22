import Image from "next/image"


const ContactDetails = () => {
    return (
        <div className="flex justify-start items-center space-x-5">
            <a
                className="block"
                target='_blank'
                href='https://github.com/MadhushaSUM'>
                <span className="text-slate-300 fill-white">
                    <Image
                        src='/icons/github.png'
                        width={30}
                        height={30}
                        alt="github"
                    />
                </span>
                </a>
            <a
                target='_blank'
                href='https://www.linkedin.com/in/madhusha-laksitha/'>
                <Image 
                    src='/icons/linkedin.png'
                    width={30}
                    height={30}
                    alt="linkedin-image"
                />
            </a>
            <a
                target='_blank'
                href='https://www.facebook.com/madusha.egodagamage'>
                <Image 
                    src='/icons/facebook.png'
                    width={30}
                    height={30}
                    alt="facebook-image"
                />
            </a>
            <a
                target='_blank'
                href='https://www.reddit.com/user/madhusha-sum/'>
                <Image 
                    src='/icons/reddit.png'
                    width={30}
                    height={30}
                    alt="reddit-image"
                />
            </a>    
        </div>
    )
}

export default ContactDetails