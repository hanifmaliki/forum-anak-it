import React from 'react'
import color from './Color';
import styled from '@emotion/styled';

const border = '1px solid ' + color.gray;

const Container = styled.div`
    border-right: ${border};
    @media (max-width: 990px) {
        border-right: 0;
    }
`

const Discuss = () => {
    return (
        <Container style={{ borderBottom: border, paddingBottom: '29px', paddingRight: '15px' }}>
            <h2 style={{ fontSize: '22px', margin: '0 0 13px 0' }}>Lampu webcam tiba-tiba menyala sendiri tanpa membuka aplikasi webcam</h2>
            <span style={{ fontSize: '13px' }}>Mau tanya, akhir-akhir ini webcam sering nyala sendiri. Apakah ada yang tahu penyebabnya dan solusi untuk memperbaiki hal itu? Apakah ada kemungkinan laptop saya di-hack karena kasus terjadi tiap terkoneksi di internet.</span>
        </Container>
    )
}

export default Discuss
