import React from 'react'
import { Link } from 'gatsby'

import styled from '@emotion/styled'

const StyledNav = styled.nav`
  background-color: rgba(100, 100, 100, 0.9);
  position: sticky;
  top: 0;
  height: 100px;
  z-index: 1;
`

const Nav = ({ siteTitle }) => (
  <StyledNav>
    <Link
      to="/"
      style={{
        color: 'white',
        textDecoration: 'none',
      }}
    >
      Work
    </Link>
    {siteTitle}
  </StyledNav>
)

export default Nav
