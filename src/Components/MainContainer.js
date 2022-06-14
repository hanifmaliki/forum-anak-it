import React, { useState } from 'react'
import Header from './Header'
import Body from './Body'
import LoginModal from './LoginModal'
import RegisterModal from './RegisterModal'

const MainContainer = () => {
    const [loginVisible, setLoginVisible] = useState(false)
    const [registerVisible, setRegisterVisible] = useState(false)
    return (
        <div style={{ color: 'rgb(64 61 58)', position: 'relative', fontFamily: 'SansWeb' }}>
            <Header
                setLoginVisible={setLoginVisible}
                setRegisterVisible={setRegisterVisible}
            />
            <Body />
            <LoginModal
                visible={loginVisible}
                onClose={() => setLoginVisible(false)}
            />
            <RegisterModal
                visible={registerVisible}
                onClose={() => setRegisterVisible(false)}
            />
        </div>
    )
}

export default MainContainer
