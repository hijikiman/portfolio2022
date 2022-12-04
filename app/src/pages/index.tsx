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
            <header css={hero}>
                <h1 css={title}>HOKORA</h1>
                <img css={icon} />
            </header>
        </div>
    )
}

const hero = css`
    background: url(${heroImg}) 70% top/cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const title = css`
    font-size: 96px;
    letter-spacing: 0.435em;
    font-family: 'Rajdhani';
    font-weight: 500;
    color: #7a5646;
    margin: 0;
`
const icon = css`
    width: 112px;
    height: 112px;
    background: #ffebb9;
    border-radius: 50%;
    margin-bottom: 144px;
`

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
