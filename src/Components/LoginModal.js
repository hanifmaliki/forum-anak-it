import React, { useState } from 'react'
import { ModalOuter, ModalInner, ModalTitle, FormWrapper, FormTitle, FormInput, FormAlert, FormSubmit, ModalClose } from './StyledComponents'
import color from './Color'

function LoginModal({ visible, onClose }) {
    const [emailValue, setEmailValue] = useState('')
    const [passValue, setPassValue] = useState('')

    // Mode: 0 =  Default, 1: Wrong, 2: Right 
    const [emailMode, setEmailMode] = useState(0)
    const [passMode, setPassMode] = useState(0)

    const handleClickSubmit = () => {
        emailValue.match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/) ? setEmailMode(2) : setEmailMode(1)
        passValue.length > 0 ? setPassMode(2) : setPassMode(1)
    }

    const handleClickClose = () => {
        setEmailValue('')
        setPassValue('')
        setEmailMode(0)
        setPassMode(0)
        onClose()
    }

    return (
        <ModalOuter style={{ display: visible ? 'flex' : 'none' }}>
            <ModalInner>
                <ModalTitle>Login</ModalTitle>
                <FormWrapper>
                    <FormTitle>Email</FormTitle>
                    <FormInput type='text' value={emailValue} style={{
                        borderColor: emailMode === 0 ? color.brown : emailMode === 1 ? color.red : color.green
                    }} onChange={(event) => setEmailValue(event.target.value)} />
                    {emailMode === 1 && <FormAlert>Format email salah</FormAlert>}
                </FormWrapper>
                <FormWrapper>
                    <FormTitle>Password</FormTitle>
                    <FormInput type='password' value={passValue} style={{
                        borderColor: passMode === 0 ? color.brown : passMode === 1 ? color.red : color.green
                    }} onChange={(event) => setPassValue(event.target.value)} />
                    {passMode === 1 && <FormAlert>Wajib diisi</FormAlert>}
                </FormWrapper>
                <FormSubmit onClick={() => handleClickSubmit()}>Login</FormSubmit>
                <ModalClose onClick={() => handleClickClose()} />
            </ModalInner>
        </ModalOuter>
    )
}

export default LoginModal
