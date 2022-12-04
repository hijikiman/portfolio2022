import type { HeadFC, PageProps, GatsbyNode } from 'gatsby'
import { css } from '@emotion/react'
import theme from '../styles/theme'

const MainLayout: React.FC<PageProps> = ({ children }: { children: GatsbyNode }) => {
    return (
        <div css={bg}>
            <div css={container}>{children}</div>
        </div>
    )
}

const bg = css`
    background: #8b8b8b;
`
const container = css`
    margin: 0 auto;
    max-width: ${theme.fullWidth};
    padding: 119px ${theme.containerPadding};
`

export default MainLayout
