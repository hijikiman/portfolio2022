import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import 'sanitize.css'
import '../styles/index.css'
import HeaderSection from '../components/HeaderSection'

const IndexPage: React.FC<PageProps> = () => {
    return (
        <div>
            <HeaderSection />
        </div>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
