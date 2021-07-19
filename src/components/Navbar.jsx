import React from "react";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  width: 100%;
  border-bottom: 2px solid #f4f4f4;
`;

const NavLink = styled.li`
  margin-left: 15px;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  transition: all 300ms;

  &:hover {
    color: salmon;
    font-weight: bold;
  }
`;

const NavWrapper = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
`;

const Logo = styled.h1`
  color: #303030;
  font-family: "Poppins", sans-serif;
`;

function Navbar() {
  return (
    <Header>
      <div style={{ flex: 1 }}>
        <Logo>
          <span style={{ color: "salmon" }}>Wah</span>yu
        </Logo>
      </div>
      <NavWrapper>
        <NavLink>About</NavLink>
        <NavLink>Projects</NavLink>
        <NavLink>Contact</NavLink>
      </NavWrapper>
    </Header>
  );
}

export default Navbar;