import styled from "@emotion/styled";

const MainBannerWrap = styled.div`
  border-bottom: 1px solid #eeeeee;
  padding: 24px 12%;
  img {
    width: 100%;
  }
`;

export default function MainBanner({ background }) {
  return (
    <MainBannerWrap>
      <img src={background} alt="메인배너" />
    </MainBannerWrap>
  );
}
