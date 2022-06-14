// eslint-disable-next-line
import React from 'react'
import CommentCard from './CommentCard'
import color from './Color'
import styled from '@emotion/styled'

const border = '1px solid ' + color.gray;

const Container = styled.div`
    border-right: ${border};
    @media (max-width: 990px) {
        border-right: 0;
    }
`

const CommentList = ({ data }) => {
    return (
        <Container style={{ position: 'relative', borderBottom: border, borderTop: border, paddingTop: '28px', paddingBottom: '20px', paddingRight: '15px' }}>
            <h3 style={{ position: 'absolute', margin: '0', top: '-16px', backgroundColor: 'white', width: '95px' }}>Komentar</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '35px' }}>
                {data?.map((el1, idx1) => {
                    return (
                        <div key={idx1} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <CommentCard
                                data={el1}
                            />
                            {
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '19px' }}>
                                    {el1.replies.map((el2, idx2) => {
                                        return (
                                            <CommentCard
                                                key={idx2}
                                                data={el2}
                                                paddingLeft={'76px'}
                                                imageWidth={35}
                                            />
                                        )
                                    })}
                                </div>
                            }
                        </div>
                    )
                })}
            </div>
        </Container>
    )
}

export default CommentList
