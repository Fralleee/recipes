import { FC } from "react"
import styled from "styled-components"

const GridContainer = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  caret-color: transparent;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  padding-top: 2rem;
  justify-content: space-around;
`

const Grid: FC = ({ children }) => (
  <GridContainer>
    {children}
  </GridContainer>
)

export default Grid