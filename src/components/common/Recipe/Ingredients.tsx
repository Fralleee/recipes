import { FC } from "react"
import styled from "styled-components"

const UnorderedList = styled.ul`
  position: relative;
  max-width: 50ch;
  margin: 0 auto;
  margin-block-start: 3rem;
  margin-block-end: 3rem;
  list-style: circle;
`

const Title = styled.li`
  position: absolute;
  top: 0;
  left: 0;
  list-style: none;
  font-size: 2.25rem;
  text-transform: capitalize;
  font-family: 'Oleo Script', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`

type IngredientsType = {
  title?: string
}
const Ingredients: FC<IngredientsType> = ({ children, title }) => {
  return (
    <>
      <UnorderedList style={{ paddingTop: title ? 60 : 0 }}>
        {title && <Title>{title}</Title>}
        {children}
      </UnorderedList>
    </>
  )
}

export default Ingredients
