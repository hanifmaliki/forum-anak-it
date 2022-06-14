import React, { useState } from 'react'
import styled from "@emotion/styled";
import color from './Color'
import { ArrowUpward, ArrowDownward } from '@mui/icons-material'
import moment from 'moment'

const Upvote = styled(ArrowUpward)`
    margin-top: 3px;
    margin-right: 3px;
    background-color: ${color.gray};
    padding: 3px;
    font-size: 12px;
    font-weight: bold;
    &:hover {
        background-color: ${color.green};
        color: ${color.grayLight};
        cursor: pointer
    }
`

const Downvote = styled(ArrowDownward)`
    margin-top: 3px;
    background-color: ${color.gray};
    padding: 3px;
    font-size: 12px;
    font-weight: bold;
    &:hover {
        background-color: ${color.red};
        color: ${color.grayLight};
        cursor: pointer
    }
`

function CommentCard({ data, paddingLeft = '0', imageWidth = 60 }) {
    const [point, setPoint] = useState(data.point)
    const [disable, setDisable] = useState(false)
    const [upClick, setUpClick] = useState(false)
    const [downClick, setDownClick] = useState(false)

    const date = moment(data.date)

    return (
        <div style={{ display: 'flex', paddingLeft: paddingLeft }}>
            <div>
                <img src='https://indoberkainvestama.com/images/placeholder/basic.png' alt='Avatar' width={imageWidth}></img>
            </div>
            <div style={{ marginLeft: '16px' }}>
                <div style={{ fontSize: '13px', fontWeight: 'bold', marginBottom: '4px' }}>{data.author}</div>
                <div style={{ fontSize: '11px', marginBottom: '3px' }}>{date.format('DD MMMM YYYY HH:mm')}</div>
                <div style={{ fontSize: '13px', marginBottom: '15px' }}>{data.message}</div>
                <div style={{ position: 'relative' }}><span style={{ fontSize: '11px' }}>{point + ' point'}</span>
                    <div style={{ position: 'absolute', top: '1px', left: '38px' }}>
                        <Upvote style={upClick ? style.upClick : {}} onClick={() => {
                            disable || setPoint((val) => (val + 1))
                            disable || setDisable(true)
                            disable || setUpClick(true)
                        }} />
                        <Downvote style={downClick ? style.downClick : {}} onClick={() => {
                            disable || setPoint((val) => (val - 1))
                            disable || setDisable(true)
                            disable || setDownClick(true)
                        }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

const style = {
    upClick: {
        backgroundColor: color.green,
        color: color.grayLight,
    },
    downClick: {
        backgroundColor: color.red,
        color: color.grayLight,
    }
}

export default CommentCard
