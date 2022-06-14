import styled from "@emotion/styled";
import color from "./Color";
import { Close } from "@mui/icons-material";

export const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    position: sticky;
    font-size: 15px;
    top: 0;
    z-index: 1;
    height: 45px;
    justify-content: center;
    align-items: center;
    background-color: ${color.brown};
    & > span {
        color: white;
        text-align: center;
        padding: 12px 13px;
        text-decoration: none;  
        &:hover {
            background-color: ${color.black};
            cursor: pointer;
        }
    }
`

export const HeaderTitle = styled.h1`
    font-size: 20px;
    color: ${color.grayLight};
    margin-right: 23px;
`

export const ModalOuter = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto; // Enable scroll if needed
    background-color: rgba(0,0,0,0.4);
`

export const ModalInner = styled.div`
    position: relative;
    background-color: #fefefe;
    margin: auto;
    padding: 15px;
    border: 1px solid #888;
    width: 36%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
`

export const ModalTitle = styled.h3`
    margin: 0 0 15px 0;
`

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 8px 0;
`

export const FormTitle = styled.span`
    font-size: 14px;
    margin-bottom: 2px;
`

export const FormInput = styled.input`
    width: 100%;
    height: 24px;
    border: 1px solid ${color.brown};
    border-radius: 3px;
    max-width: 100%;
`

export const FormInputArea = styled.textarea`
    width: 100%;
    height: 48px;
    border: 1px solid ${color.brown};
    border-radius: 3px;
    max-width: 100%;
`

export const FormAlert = styled.span`
    color: ${color.red};
    font-size: 13px;
`

export const FormSubmit = styled.button`
    color: ${color.grayLight};
    background-color: ${color.brown};
    border: 0;
    margin-top: 4px;
    padding: 8px 18px;
    border-radius: 4px;
`

export const ModalClose = styled(Close)`
    position: absolute;
    z-index: 2;
    right: -10px;
    top: -10px;
    width: 20px;
    height: 20px;
    color: ${color.grayLight};
    background-color: ${color.red};
`