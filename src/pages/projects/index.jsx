import ContactCTA from '@/components/common/ContactCTA'
import ProjectsSection from '@/components/projects/ProjectsSection'
import Head from 'next/head'
import React from 'react'

const index = () => {
    return (
        <>
            <Head>
                <title>Projects | Pavan Kumar</title>
                <meta name="description" content="Explore the featured projects by Pavan Kumar, showcasing a variety of modern and responsive web applications." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <ProjectsSection />
            <ContactCTA />
        </>
    )
}

export default index