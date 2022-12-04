import type { HeadFC, PageProps } from 'gatsby'
import { css } from '@emotion/react'
import theme from '../styles/theme'
import barrelImg from '../images/barrel.png'

const AboutSection: React.FC<PageProps> = () => {
    return (
        <section>
            <div css={bg}>
                <div css={container}>
                    <h1 css={heading}>密かに佇む。確かにそこにある。</h1>
                    <p css={paragraph}>
                        祠（ほこら）。
                        <br />
                        世の中のありとあらゆる事物に八百万の神が宿ると信じる和の心から生まれた、伝統的な社です。それは、森の中、池の隅、洞窟の奥、そしてあなたの記憶の中、ありとあらゆる場所にひっそりと息を潜めている存在。
                        <br />
                        その小さな筐体に、造り手や管理の担い手の思いが詰まっています。手作りで、ひとつとして同じものはなく、それぞれに味がある。
                        <br />
                        先人が形にして遺した思いは、悠久の時を超えて現代の私達の目に止まります。中には数百年も前から鎮座し、大切に受け継がれているものもあります。
                        <br />
                        <br />
                        そんな祠のように、特有の個性と内なるパワーを秘め、人々を惹きつけ長く愛される作品を創りたい。
                        <br />
                        私はHOKORAという雅号を掲げ、新鮮な体験をこれからも生み出し続けます。
                    </p>
                </div>
            </div>
        </section>
    )
}

const bg = css`
    background: #4c4a69;
`
const container = css`
    margin: 0 auto;
    padding: 93px ${theme.containerPadding} 177px ${theme.containerPadding};
    max-width: ${theme.fullWidth};
    position: relative;
    &::before {
        display: block;
        content: '祠';
        position: absolute;
        right: ${theme.containerPadding};
        bottom: 30px;

        font-family: 'Noto Sans JP';
        font-weight: 400;
        font-size: 400px;
        letter-spacing: 0.05em;
        color: #5c5a7a;
        z-index: 0;
    }
`
const heading = css`
    font-family: 'Sawarabi Gothic';
    font-weight: 400;
    font-size: 40px;
    letter-spacing: 0.05em;
    color: #d3e7f7;
    margin: 0;
    position: relative;
    z-index: 0;
    &::before {
        display: block;
        content: '';
        background: url(${barrelImg});
        width: 100px;
        height: 83px;
        position: absolute;
        left: -44.5px;
        top: -23px;
        z-index: -1;
    }
`
const paragraph = css`
    font-family: 'Noto Sans JP';
    font-weight: 400;
    font-size: 18px;
    line-height: 1.8em;
    letter-spacing: 0.05em;
    color: #d3e7f7;
    position: relative;
    z-index: 0;
`

export default AboutSection
