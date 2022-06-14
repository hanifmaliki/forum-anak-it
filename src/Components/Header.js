import React from 'react'
import styled from "@emotion/styled";
import { HeaderContainer, HeaderTitle } from './StyledComponents'
import color from './Color';
import { Search } from '@mui/icons-material';

const SearchWrapper = styled.div`
    width: 38%;
    margin-right: 22px;
    position: relative;
`

const SearchBox = styled.input`
    width: 100%;
    height: 28px;
    padding-inline: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 5px;
    background-color: #cfc9c2;
    &:focus {
        background-color: white;
    }
`

const SearchIcon = styled(Search)`
    position: absolute;
    font-size: 18px;
    right: 8px;
    top: 5px;
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

const Header = ({ setLoginVisible, setRegisterVisible }) => {
    return (
        <HeaderContainer>
            <HeaderTitle>Forum anak IT</HeaderTitle>
            <SearchWrapper>
                <SearchBox type="text" placeholder='Search'></SearchBox>
                <SearchIcon />
            </SearchWrapper>
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
        </HeaderContainer>
    )
}

export default Header
