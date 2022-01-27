import { useState } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import jobsImg from "../../assets/jobs.svg";
import showImg from "../../assets/show.svg";
import askImg from "../../assets/ask.svg";
import newsImg from "../../assets/news.svg";
import homeImg from "../../assets/home.svg";

const NavWrap = styled.nav`
  background: #ffc700;
  height: 83px;
  display: flex;
  justify-content: center;
`;

const Nav = styled.ul`
  display: flex;
`;

const NavItem = styled.li`
  width: 78px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  a {
    height: 100%;
    color: white;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    img {
      margin-bottom: 18px;
    }
    span {
      position: absolute;
      bottom: 8px;
    }
  }
`;

export default function Navigation() {
  const [navigation, setNav] = useState([
    {
      routeName: "/",
      imgUrl: homeImg,
      label: "HOME",
    },
    {
      routeName: "/news",
      imgUrl: newsImg,
      label: "NEWS",
    },
    {
      routeName: "/show",
      imgUrl: showImg,
      label: "SHOW",
    },
    {
      routeName: "/ask",
      imgUrl: askImg,
      label: "ASK",
    },
    {
      routeName: "/jobs",
      imgUrl: jobsImg,
      label: "JOBS",
    },
  ]);

  return (
    <NavWrap>
      <Nav>
        {navigation.map((item) => (
          <NavItem key={item.routeName}>
            <Link to={item.routeName}>
              <img src={item.imgUrl} alt={item.label} />
              <span>{item.label}</span>
            </Link>
          </NavItem>
        ))}
      </Nav>
    </NavWrap>
  );
}
