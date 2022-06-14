// eslint-disable-next-line
import React from 'react'
import data from '../comments.json'
import CommentCard from './CommentCard'
import color from './Color'

const CommentList = () => {
    const border = '1px solid ' + color.gray;
    return (
        <div style={{ position: 'relative', borderRight: border, borderBottom: border, borderTop: border, paddingTop: '28px', paddingBottom: '20px', paddingRight: '15px' }}>
            <h3 style={{ position: 'absolute', margin: '0', top: '-16px', backgroundColor: 'white', width: '95px' }}>Komentar</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '35px' }}>
                {data.map(el1 => {
                    return (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <CommentCard
                                data={el1}
                            />
                            {
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '19px' }}>
                                    {el1.replies.map(el2 => {
                                        return (
                                            <CommentCard
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
        </div>
    )
}

export default CommentList
