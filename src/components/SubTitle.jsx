import styled from "@emotion/styled";

const SubtitleWrap = styled.div`
  width: 123px;
  height: 31px;
  background: #ffc700;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-weight: bold;
  font-size: 18px;
  line-height: 138.19%;
  padding: 3px 30px;
  margin-bottom: 20px;
`;

export default function SubTitle({ children }) {
  return <SubtitleWrap>{children}</SubtitleWrap>;
}
