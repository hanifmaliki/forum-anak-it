import React from 'react'
import styled from "@emotion/styled";
import { Search } from '@mui/icons-material';

const SearchWrapper = styled.div`
    width: 100%;
    position: relative;
`

const SearchInput = styled.input`
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

function SearchBox() {
    return (
        <SearchWrapper>
            <SearchInput type="text" placeholder='Search'></SearchInput>
            <SearchIcon />
        </SearchWrapper>
    )
}

export default SearchBox
