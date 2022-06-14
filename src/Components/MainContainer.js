import React, { useState } from 'react'
import Header from './Header'
import Body from './Body'
import LoginModal from './LoginModal'
import RegisterModal from './RegisterModal'
import SideMenu from './SideMenu'

const MainContainer = () => {
    const [sideMenuVisible, setSideMenuVisible] = useState(false)
    const [loginVisible, setLoginVisible] = useState(false)
    const [registerVisible, setRegisterVisible] = useState(false)
    return (
        <div style={{ color: 'rgb(64 61 58)', position: 'relative', fontFamily: 'SansWeb' }}>
            <Header
                setSideMenuVisible={setSideMenuVisible}
                setLoginVisible={setLoginVisible}
                setRegisterVisible={setRegisterVisible}
            />
            <Body />
            <SideMenu
                visible={sideMenuVisible}
                setSideMenuVisible={setSideMenuVisible}
                setLoginVisible={setLoginVisible}
                setRegisterVisible={setRegisterVisible}
            />
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
