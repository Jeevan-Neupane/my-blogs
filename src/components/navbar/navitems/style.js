
import styled from "styled-components"
import { Link } from "react-router-dom"

export const NavItemsWrapper = styled.div``
export const NavItemLists = styled.ul`
display: flex;
gap:5rem;
`
export const NavItemList = styled.li`
font-size:2rem;
`
export const NavItemLink = styled(Link)`
color:${props=>props.theme.text};

`