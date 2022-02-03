import styled from "@emotion/styled";

const MainBannerWrap = styled.div`
  width: 100%;
  // border-bottom: 1px solid #eeeeee;
`;

export default function MainBanner({ background }) {
  return (
    <MainBannerWrap>
      <img src={background} alt="메인배너" />
    </MainBannerWrap>
  );
}
