import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import Badge from "@material-ui/core/Badge";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  dislay: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ marginLeft: "10px", display: "flex" })}
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "20px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: "center", flex: 2 })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>WILLIAMS.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Link to="/cart">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
