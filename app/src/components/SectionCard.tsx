import type { HeadFC, PageProps, GatsbyNode } from 'gatsby'
import { css } from '@emotion/react'
import theme from '../styles/theme'
import takedaImg from '../images/takeda.png'

const SectionCard: React.FC<PageProps> = ({
    children,
    title,
}: {
    children: GatsbyNode
    title: string
}) => {
    return (
        <section css={card}>
            <h1 css={heading}>{title}</h1>
            {children}
        </section>
    )
}

const card = css`
    background: #c4c4c4;
    border-radius: 69px;
    padding: 35px 44px 80px 44px;
    &:not(:first-child) {
        margin-top: 90px;
    }
`
const heading = css`
    background: linear-gradient(90deg, #a2c8d8 4.17%, #d4c098 60.42%);
    margin: 0;
    padding: 9px 35px;
    width: 50%;

    font-family: 'Sawarabi Gothic';
    font-weight: 400;
    font-size: 40px;
    letter-spacing: 0.085em;
    color: ${theme.primaryFontColor};
    display: flex;
    align-items: center;
    &::before {
        display: inline-block;
        content: '';
        background: url(${takedaImg});
        width: 71px;
        height: 48px;
        margin: 0 22px 0 0;
    }
`

export default SectionCard
