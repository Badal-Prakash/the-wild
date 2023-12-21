import styled from "styled-components"

const Sidebaer=styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 2px solid var(--color-grey-200);
  grid-row: 1/-1;
`

function Sidebar() {
  return (
    <Sidebaer>
      sidebar
    </Sidebaer>
  )
}

export default Sidebar
