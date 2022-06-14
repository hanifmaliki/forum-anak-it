import React, { useState } from 'react'
import { FormWrapper, FormInput, FormInputArea, FormAlert, FormSubmit } from './StyledComponents'
import color from './Color'
import styled from '@emotion/styled';

const border = '1px solid ' + color.gray;

const Container = styled.div`
    border-right: ${border};
    @media (max-width: 990px) {
        border-right: 0;
    }
`

function InsertComment({ fetchComment }) {
  const [namaValue, setNamaValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [komenValue, setKomenValue] = useState('')

  // Mode: 0 =  Default, 1: Wrong, 2: Right 
  const [namaMode, setNamaMode] = useState(0)
  const [emailMode, setEmailMode] = useState(0)
  const [komenMode, setKomenMode] = useState(0)

  const handleClickSubmit = () => {
    namaValue.length > 0 ? setNamaMode(2) : setNamaMode(1)
    emailValue.match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/) ? setEmailMode(2) : setEmailMode(1)
    komenValue.length > 0 ? setKomenMode(2) : setKomenMode(1)

    if (namaValue.length > 0 && emailValue.match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/)
      && komenValue.length > 0) {
      fetchComment()
      handleClickReset()
    }
  }

  const handleClickReset = () => {
    setNamaValue('')
    setEmailValue('')
    setKomenValue('')
    setNamaMode(0)
    setEmailMode(0)
    setKomenMode(0)
  }

  return (
    <Container style={{ position: 'relative', marginBottom: '20px', borderTop: border, paddingTop: '18px' }}>
      <h3 style={{ position: 'absolute', margin: '0', top: '-16px', backgroundColor: 'white', width: '195px' }}>Tambahkan komentar</h3>
      <FormWrapper>
        <FormInput type='text' placeholder='Nama' value={namaValue} style={{
          borderColor: namaMode === 0 ? color.brown : namaMode === 1 ? color.red : color.green,
          width: '250px'
        }} onChange={(event) => setNamaValue(event.target.value)} />
        {namaMode === 1 && <FormAlert>Wajib diisi</FormAlert>}
      </FormWrapper>
      <FormWrapper>
        <FormInput type='text' placeholder='Email' value={emailValue} style={{
          borderColor: emailMode === 0 ? color.brown : emailMode === 1 ? color.red : color.green,
          width: '250px'
        }} onChange={(event) => setEmailValue(event.target.value)} />
        {emailMode === 1 && <FormAlert>Format email salah</FormAlert>}
      </FormWrapper>
      <FormWrapper>
        <FormInputArea placeholder='Komentar anda' value={komenValue} style={{
          borderColor: komenMode === 0 ? color.brown : komenMode === 1 ? color.red : color.green,
          width: '400px'
        }} onChange={(event) => setKomenValue(event.target.value)} />
        {komenMode === 1 && <FormAlert>Wajib diisi</FormAlert>}
      </FormWrapper>
      <div style={{ display: 'flex', gap: '5px' }}>
        <FormSubmit style={{ backgroundColor: 'rgb(194 194 194)', color: color.black }} onClick={() => handleClickReset()}>Reset</FormSubmit>
        <FormSubmit onClick={() => handleClickSubmit()}>Submit</FormSubmit>
      </div>
    </Container>
  )
}

export default InsertComment
