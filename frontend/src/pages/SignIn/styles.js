import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  background-color: #ee4d64;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  background: #fff;
  border-radius: 4px;
  max-width: 360px;
  width: 100%;
  -webkit-box-shadow: 1px 1px 5px 0px rgba(51, 51, 51, 0.1);
  -moz-box-shadow: 1px 1px 5px 0px rgba(51, 51, 51, 0.1);
  box-shadow: 1px 1px 5px 0px rgba(51, 51, 51, 0.1);

  .logoContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    margin-bottom: 10px;
  }

  h1 {
    font-size: 29.86px;
    font-weight: 700;
    color: #ee4d64;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  label {
    font-size: 14px;
    color: #444444;
    text-align: left;
    text-transform: uppercase;
    font-weight: 700;
  }

  input {
    font-size: 16px;
    text-align: left;
    color: #999;
    background: #fff;
    border: 1px solid #eee;
    border-radius: 4px;
    height: 50px;
    padding: 0 10px;
    margin: 10px 0 20px 0;

    &::placeholder {
      color: #999;
    }
  }

  button {
    background: #ee4d64;
    height: 50px;

    color: #fff;
    font-size: 16px;
    font-weight: bold;

    border: 0;
    border-radius: 4px;

    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, "#ee4d64")};
    }
  }
`;
