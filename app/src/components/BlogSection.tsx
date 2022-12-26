import type { PageProps } from 'gatsby'
import { css } from '@emotion/react'
import theme from '../styles/theme'
import SectionCard from '../components/SectionCard'
import posts from '../../.feed/posts.json'

const BlogSection: React.FC<PageProps> = () => {
    return (
        <SectionCard title="技術ブログ">
            <ul css={postList}>
                {posts.map(({ title, link, contentSnippet }, index) => (
                    <a href={link}>
                        <li css={postListItem} key={index}>
                            <h2>{title}</h2>
                            <p>{contentSnippet}</p>
                        </li>
                    </a>
                ))}
            </ul>
            <div css={buttonArea}>
                <a css={moveToBlogButton} href="https://konseki.hokora.jp">
                    ブログ一覧へ →
                </a>
            </div>
        </SectionCard>
    )
}

const postList = css`
    margin: 0;
    padding: 80px 0;
    a {
        display: block;
        &:not(:first-child) {
            margin-top: 35px;
        }
    }
`
const postListItem = css`
    padding: 21px;
    margin: 0;
    background: #dbdbdb;
    border-radius: 23px;
    color: ${theme.primaryFontColor};
    list-style-type: none;
    h2 {
        font-size: 24px;
        margin: 0;
    }
    p {
        font-size: 16px;
        margin: 0;
        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
    }
`
const buttonArea = css`
    display: flex;
    justify-content: center;
`
const moveToBlogButton = css`
    background: #dbdbdb;
    border-radius: 23px;
    color: ${theme.primaryFontColor};
    display: inline-block;
    margin: 0 auto;
    padding: 16px 24px;
    font-size: 24px;
`

export default BlogSection
