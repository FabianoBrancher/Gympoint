import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 64px;
  background: #fff;

  -webkit-box-shadow: 1px 1px 1px 0px rgba(51, 51, 51, 0.1);
  -moz-box-shadow: 1px 1px 1px 0px rgba(51, 51, 51, 0.1);
  box-shadow: 1px 1px 1px 0px rgba(51, 51, 51, 0.1);
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 5px 20px;
  border-right: 1px solid #e3e3e3;

  img {
    height: 25px;
    width: auto;
  }

  span {
    color: #ee4d64;
    font-size: 15px;
    font-weight: 700;
    text-align: left;

    text-transform: uppercase;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-left: 20px;

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    li {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 10px;

      a {
        font-size: 15px;
        color: #999999;
        text-transform: uppercase;
        font-weight: 700;
      }

      a.active {
        color: #444444;
      }
    }
  }
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding: 20px;

  span.name {
    font-size: 14px;
    color: #666666;
    text-align: left;
    font-weight: 700;
    margin-bottom: 5px;
  }

  span.link {
    font-size: 14px;
    color: #de3b3b;
    text-align: right;
    font-weight: 400;
  }
`;
