import React from 'react'
import styled from '@emotion/styled'
import color from './Color'
import SearchBox from './SearchBox'
import { Close } from '@mui/icons-material'

const CloseMenu = styled(Close)`
    background-color: ${color.red};
    border-radius: 5px;
    padding: 5px;
    margin-top: 10px;
    margin-right: 10px;
    width: 30px;
    color: white;
    &:hover {
        cursor: pointer;
    }
`

const OuterWrapper = styled.div`
    background-color: ${color.black};
    position: fixed;
    height: 100%;
    width: 300px;
    z-index: 1;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-end;
`

const Menu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 5px;
    width: 100%;
`

const MainMenu = styled.span`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: white;
    padding-right: 10px;
    box-sizing: border-box;
    width: 100%;
    height: 35px;
    &:hover {
        background-color: ${color.brownDark};
        cursor: pointer;
    }
`

const SubMenu = styled.span`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 10px;
    box-sizing: border-box;
    color: white;
    width: 90%;
    margin-right: 10%;
    height: 35px;
    &:hover {
        background-color: ${color.brownDark};
        cursor: pointer;
    }
    &:hover + .parent {
        background-color: ${color.brownDark};
    }
`

const SearchWrapper = styled.div`
    width: 90%;
    margin-right: 10px;
`

function SideMenu({ visible, setSideMenuVisible, setLoginVisible, setRegisterVisible }) {
    return (
        <OuterWrapper style={{ display: visible ? 'flex' : 'none' }}>
            <CloseMenu onClick={() => setSideMenuVisible(false)} />
            <SearchWrapper>
                <SearchBox />
            </SearchWrapper>
            <Menu>
                <MainMenu className='parent'>Categories</MainMenu>
                <SubMenu>Linux</SubMenu>
                <SubMenu>Windows</SubMenu>
                <SubMenu>MAC OS</SubMenu>
                <SubMenu>Android</SubMenu>
                <SubMenu>iOS</SubMenu>
                <MainMenu onClick={() => setLoginVisible(true)}>Login</MainMenu>
                <MainMenu onClick={() => setRegisterVisible(true)}>Register</MainMenu>
            </Menu>
        </OuterWrapper>
    )
}

export default SideMenu
