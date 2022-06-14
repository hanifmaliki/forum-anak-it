import React from 'react'
import styled from "@emotion/styled";
import { HeaderContainer, HeaderTitle } from './StyledComponents'
import color from './Color';
import SearchBox from './SearchBox';

const Menu = styled.div`
    display: flex;
    @media (max-width: 700px) {
        display: none;
    }
`

const Dropdown = styled.div`
    float: left;
    overflow: hidden;
    & > .dropbtn {
        border: none;
        outline: none;
        font-size: 15px;
        color: white;
        padding: 12px 13px;
        background-color: inherit;
        font-family: inherit; /* Important for vertical align on mobile phones */
        margin: 0; /* Important for vertical align on mobile phones */
    }
    &:hover {
        & > .dropbtn {
            background-color: ${color.black};
            cursor: pointer
        }
        & > .dropdown-content {
            display: block;
            cursor: pointer
        }
    }
`

const DropdownContent = styled.div`
    display: none;
    position: absolute;
    background-color: ${color.brownDark};
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    & > span {
        float: none;
        color: ${color.grayLight};
        padding: 12px 13px;
        text-decoration: none;
        display: block;
        text-align: left;
        &:hover {
            background-color: ${color.black};
            cursor: pointer
        }
    }
`

const MenuLineWrapper = styled.div`
    background-color: gray;
    padding: 4px;
    border-radius: 5px;
    display: none;
    &:hover {
        cursor: pointer;
    }
    @media (max-width: 700px) {
        display: block;
    }
`

const WrapperSearch = styled.div`
    width: 38%;
    margin-right: 22px;
    @media (max-width: 700px) {
        display: none;
    }
`

const MenuLine = styled.div`
    width: 30px;
    height: 3px;
    background-color: black;
    margin: 4px 0;
`

const Header = ({ setSideMenuVisible, setLoginVisible, setRegisterVisible }) => {
    return (
        <HeaderContainer>
            <HeaderTitle>Forum anak IT</HeaderTitle>
            <WrapperSearch>
                <SearchBox />
            </WrapperSearch>
            <Menu>
                <Dropdown className="dropdown">
                    <button className="dropbtn">Categories
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <DropdownContent className="dropdown-content">
                        <span>Linux</span>
                        <span>Windows</span>
                        <span>MAC OS</span>
                        <span>Android</span>
                        <span>iOS</span>
                    </DropdownContent>
                </Dropdown>
                <span onClick={() => setLoginVisible(true)}>Login</span>
                <span onClick={() => setRegisterVisible(true)}>Register</span>
            </Menu>
            <MenuLineWrapper onClick={() => setSideMenuVisible(true)}>
                <MenuLine />
                <MenuLine />
                <MenuLine />
            </MenuLineWrapper>
        </HeaderContainer>
    )
}

export default Header
