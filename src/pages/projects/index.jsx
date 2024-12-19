import ProjectsSection from '@/components/projects/ProjectsSection'
import Head from 'next/head'
import React from 'react'

const index = () => {
    return (
        <>
            <Head>
                <title>Projects</title>
            </Head>
            <ProjectsSection />
        </>
    )
}

export default index