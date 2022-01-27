import logo from "../../assets/logo.svg";
import menu from "../../assets/menu.svg";
import styled from "@emotion/styled";

const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 74px;
  padding: 0 18px;
  background: #656565;
`;

const Logo = styled.h1`
  font-family: "Newsreader", serif;
  font-style: italic;
  font-weight: 500;
  font-size: 35.5364px;
  line-height: 138.19%;
  color: #ffffff;
`;

export default function Header() {
  return (
    <HeaderWrap>
      <img src={logo} alt="로고" />
      <Logo>Hacker News</Logo>
      <span>
        <a href="">
          <img src={menu} alt="메뉴" />
        </a>
      </span>
    </HeaderWrap>
  );
}
