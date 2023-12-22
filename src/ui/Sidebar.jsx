import styled from "styled-components"
import Logo from "../ui/Logo.jsx"
import MainNav from "../ui/MainNav.jsx"
const Sidebaer=styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 2px solid var(--color-grey-200);
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`

function Sidebar() {
  return (
    <Sidebaer>
    <Logo/>
    <MainNav/>
    </Sidebaer>
  )
}

export default Sidebar
