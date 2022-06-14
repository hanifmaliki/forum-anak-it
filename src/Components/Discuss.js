import React from 'react'
import color from './Color';

const Discuss = () => {
    const border = '1px solid ' + color.gray;
    return (
        <div style={{ borderRight: border, borderBottom: border, paddingBottom: '29px', paddingRight: '15px' }}>
            <h2 style={{ fontSize: '22px', margin: '0 0 13px 0' }}>Lampu webcam tiba-tiba menyala sendiri tanpa membuka aplikasi webcam</h2>
            <span style={{ fontSize: '13px' }}>Mau tanya, akhir-akhir ini webcam sering nyala sendiri. Apakah ada yang tahu penyebabnya dan solusi untuk memperbaiki hal itu? Apakah ada kemungkinan laptop saya di-hack karena kasus terjadi tiap terkoneksi di internet.</span>
        </div>
    )
}

export default Discuss
