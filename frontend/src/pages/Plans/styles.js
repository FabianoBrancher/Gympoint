import styled from "styled-components";
import { Link } from "react-router-dom";
import { darken } from "polished";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: 0 auto;

  header {
    margin-top: 10px;
    padding: 30px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
      font-size: 24px;
      color: #444444;
      text-align: left;
    }

    div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }
`;

export const BtnNew = styled(Link)`
  height: 42px;
  border: 0;
  border-radius: 4px;
  padding: 10px 20px;

  display: flex;
  align-items: center;

  span {
    font-size: 14px;
    color: #ffffff;
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
    margin-left: 10px;
  }
  background-color: #ee4d64;
  margin-right: 15px;

  &:hover {
    background-color: ${darken(0.1, "#ee4d64")};
  }
`;

export const PlansList = styled.ul`
  display: flex;
  flex-direction: column;
  background: #fff;
`;

export const Plan = styled.li``;
