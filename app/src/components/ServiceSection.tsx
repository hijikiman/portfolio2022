import type { HeadFC, PageProps } from 'gatsby'
import { css } from '@emotion/react'
import theme from '../styles/theme'
import SectionCard from '../components/SectionCard'
import withroidImg from '../images/withroid.png'
import talkmakerImg from '../images/talkmaker.png'
import hokoraImg from '../images/hokora.png'

const data = [
    {
        thumbnail: withroidImg,
        name: 'WithRoid',
        description: 'アンドロイドのレビューサイト',
    },
    {
        thumbnail: talkmakerImg,
        name: 'TalkMaker',
        description: 'トーク画面のジェネレータ',
    },
    {
        thumbnail: hokoraImg,
        name: 'HOKORA',
        description: 'プロフィールページ（このサイト）',
    },
]

const ServiceSection: React.FC<PageProps> = () => {
    return (
        <SectionCard title="作品">
            <ul css={serviceList}>
                {data.map((item, index) => (
                    <li css={serviceListItem} key={index}>
                        <img alt={item.name} src={item.thumbnail} />
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                    </li>
                ))}
            </ul>
        </SectionCard>
    )
}

const container = css`
    background: #c4c4c4;
    border-radius: 69px;
`
const serviceList = css`
    margin: 80px 0 0 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(265px, 1fr));
    column-gap: 20px;
    row-gap: 50px;
    justify-items: center;
`
const serviceListItem = css`
    list-style: none;
    h2 {
        margin: 10px 0 0 0;
        font-family: 'Sawarabi Gothic';
        font-weight: 400;
        font-size: 24px;
        letter-spacing: 0.085em;
        color: #7a5646;
    }
    p {
        font-family: 'Sawarabi Gothic';
        font-weight: 400;
        font-size: 16px;
        letter-spacing: 0.085em;
        color: #99796b;
        margin: 2px 0;
    }
`

export default ServiceSection
