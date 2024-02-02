import styled from "styled-components";
import { WrapperContainer } from "../../styles/Container";


export const MainWrapper = styled.div`
position:fixed;
width:100%;
height:100px;
background-color:${props => props.theme.component};
left:0;
right:0;
top:0;

`

export const Wrapper = styled(WrapperContainer)`
display: flex;
justify-content:space-between;
align-items:center;
height:100%;

`

export const LogoDiv = styled.div`
`


export const NavItemsDiv = styled.div`

`