import '@/css/Projects.css'
import ProjectsTile from './ProjectsTile'

const Projects = () => {
    return (
        <div id='projects-section' className='projects-wrapper'>
            <h3 className='projects-h3'>Projects</h3>
            <ProjectsTile
                timePeriod='2023 Dec. - 2024 Jan.'
                projectName='Inventro'
                details='A standalone inventory management software created in C# using the Windows 
                Presentation Foundation (WPF) UI framework. Developed for a local trading agency 
                that buys a variety of products from customers, the users are given functionalities 
                to register new products, record transactions, print receipts, and balance cash.'
                tagTexts={['C#', 'WPF']}
            />

            <ProjectsTile
                timePeriod='2023 Jul. - 2024 Aug.'
                projectName='LabSync-Plus'
                details='A web application created using Next.js to manage patient details and test 
                report details in a medical laboratory. Users can add and manage patient details, 
                save their different test results, print out reports, and analyze patient history 
                with charts. Admin users are provided with tools to analyze the financial status as well.'
                tagTexts={['React', 'Next.js', 'Typescript', 'PostgreSQL']}
            />

            <ProjectsTile
                timePeriod='2019 Dec. - 2020 Apr.'
                projectName='MediLab Manager'
                details='A standalone version of LabSync-Plus developed in Java. JavaFX is used for the UI,
                MySQL for database.'
                tagTexts={['Java', 'JavaFX', 'MySQL']}
            />
        </div>
    )
}

export default Projects