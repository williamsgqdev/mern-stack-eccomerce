import styled from "styled-components";
import React from "react";

const Container = styled.div`
  height: 30px;
  background-color: black;
  color: white;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Announcement = () => {
  return <Container>Hooray free shipping for all Redimi Phones</Container>;
};

export default Announcement;
