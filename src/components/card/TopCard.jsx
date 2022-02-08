import styled from "@emotion/styled";
import { Title, CardWrap, CreatedDate } from "./Card";
import CardAdditionalInfo from "./CardAdditionalInfo";

const TopCardWrap = styled(CardWrap)`
  flex-direction: column;
  width: 322px;
  height: 297px;
  padding: 25px 12px 0 12px;
  border: 1px solid #000000;
  position: relative;
  overflow: hidden;
`;

const TopTitle = styled(Title)`
  text-align: center;
  margin-bottom: 31px;
  font-size: 20px;
`;

const TopCreatedDate = styled(CreatedDate)`
  text-align: right;
  margin-bottom: 29px;
  font-weight: 600;
  font-size: 16px;
`;

const IdSection = styled.div`
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid #000000;
  height: 46px;
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;
export default function TopCard({ data }) {
  return (
    <TopCardWrap>
      <TopCreatedDate>1 min ago</TopCreatedDate>
      <TopTitle>
        Huginn: System for building agents that perform automated tasks online
      </TopTitle>
      <CardAdditionalInfo />
      <IdSection>idmyd</IdSection>
    </TopCardWrap>
  );
}
