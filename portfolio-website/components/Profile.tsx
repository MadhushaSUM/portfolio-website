import ContactDetails from "./ContactDetails"

export default function Profile(){
    return (
        <div className="profile-height sm:h-full grid content-between">
            <div className='toplevel-text flex flex-col gap-2 sm:gap-5'>
                <h1>Madhusha Laksitha</h1>
                <h3>Full Stack Software Engineer</h3>
                <p>
                    I engineer flexible, full-stack web and mobile apps,
                    seamlessly balancing creativity and technical prowess
                    for a harmonious user experience.
                </ p>
                <div className="sm:hidden block text-base font-normal">
                    <a href="/blog"><span>{`Visit my blog ->`}</span></a>                    
                </div>
            </div>
            <ContactDetails />
        </div>
    )
}