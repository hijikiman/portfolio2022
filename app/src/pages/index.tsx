import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import 'sanitize.css'
import '../styles/index.css'
import HeaderSection from '../components/HeaderSection'
import AboutSection from '../components/AboutSection'
import MainLayout from '../components/MainLayout'
import ServiceSection from '../components/ServiceSection'

const IndexPage: React.FC<PageProps> = () => {
    return (
        <div>
            <HeaderSection />
            <AboutSection />
            <MainLayout>
                <ServiceSection />
            </MainLayout>
        </div>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
