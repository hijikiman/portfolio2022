import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import { css } from '@emotion/react'
import 'sanitize.css'
import './index.css'
import heroImg from '../images/hero.png'
// import { StaticImage } from "gatsby-plugin-image";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <div>
            <div css={hero}></div>
        </div>
    )
}

const hero = css`
    background: url(${heroImg}) 70% top/cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
`

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
