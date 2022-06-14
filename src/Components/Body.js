import React from 'react'
import Discuss from './Discuss'
import CommentList from './CommentList'
import InsertComment from './InsertComment'
import TopDiscuss from './TopDiscuss'
import styled from '@emotion/styled'

const BodyOuter = styled.div`
    display: flex;
    margin-top: 23px;
    justify-content: center;
`

const BodyInner = styled.div`
    width: 70%;
    display: flex;
    gap: 15px;
`

const Left = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
`

const Right = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
`

const Body = () => {
    return (
        <BodyOuter>
            <BodyInner>
                <Left>
                    <Discuss />
                    <CommentList />
                    <InsertComment />
                </Left>
                <Right>
                    <TopDiscuss />
                </Right>
            </BodyInner>
        </BodyOuter>
    )
}

export default Body
