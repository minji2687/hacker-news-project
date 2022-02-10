import styled from "@emotion/styled";

const MainContent = styled.section`
  background: #656565;
  padding-bottom: 83px;
`;

export default function MainContentWrap({ children }) {
  return <MainContent>{children}</MainContent>;
}
