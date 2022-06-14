import React from 'react'
import color from './Color'
import styled from '@emotion/styled'

const Isi = styled.div`
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

const discuss = [
  { no: 1, isi: 'Bersihkan laptop dari butiran debu' },
  { no: 2, isi: 'Cara akses website menggunakan koneksi openVPN' },
  { no: 3, isi: 'Batas aman overclock PC rakitan' },
  { no: 4, isi: 'Cara mengetahui akun Facebook di-hack melalui aplikasi' },
  { no: 5, isi: 'Tutorial: langkah-langkah mencegah website untuk track user' }
]

const TopDiscuss = () => {
  return (
    <div>
      <h3 style={{ fontSize: '17px', margin: '0 0 13px 0' }}>Diskusi 5 teratas</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {discuss.map((el, idx) => {
          return (
            <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
              <div style={{
                backgroundColor: color.brown,
                width: '20px',
                height: '19px',
                color: 'white',
                alignContent: 'center',
                display: 'flex',
                justifyContent: 'center'
              }}>{el.no}</div>
              <Isi style={{ width: '88%' }}>{el.isi}</Isi>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TopDiscuss
