import type { HeadFC, PageProps } from 'gatsby'
import { css } from '@emotion/react'
import theme from '../styles/theme'
import heroImg from '../images/hero.png'

const HeaderSection: React.FC<PageProps> = () => {
    return (
        <section>
            <header css={hero}>
                <h1 css={title}>HOKORA</h1>
                <img css={icon} />
            </header>
            <div css={gradation} />
        </section>
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
const headerTitleLetterSpacing: string = '0.435em'
const title = css`
    font-size: 96px;
    letter-spacing: ${headerTitleLetterSpacing};
    font-family: 'Rajdhani';
    font-weight: 500;
    color: ${theme.primaryFontColor};
    margin: 0 -${headerTitleLetterSpacing} 0 0;
`
const icon = css`
    width: 112px;
    height: 112px;
    background: #ffebb9;
    border-radius: 50%;
    margin-bottom: 144px;
`
const gradation = css`
    height: 231px;
    background: linear-gradient(180deg, #858ca6 0%, #4c4a69 100%);
`

export default HeaderSection
