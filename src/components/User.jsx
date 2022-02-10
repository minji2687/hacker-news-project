import styled from "@emotion/styled";

const UserWrap = styled.div`
  background: #656565;
  height: 100vh;
  padding-top: 25px;
`;

const UserDetail = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Profile = styled.div`
  width: 90px;
  height: 90px;
  background: #ffffff;
  border: 0.0659091px solid #000000;
  border-radius: 13.1818;
  border-radius: 13.18px;
`;

const KarmaText = styled.div`
  font-weight: 500;
  font-size: 17.6842px;
  margin-top: 14px;
  span {
    color: FFC700;
  }
`;
const JoinedDate = styled.p`
  color: #bfbfbf;
  font-size: 14px;
  margin-top: 8px;
`;

const HomepageURL = styled.p`
  color: #ffffff;
  margin-top: 8px;
`;

export default function User() {
  return (
    <UserWrap>
      <UserDetail>
        <Profile></Profile>
        <KarmaText>
          Karma: <span>3848</span>
        </KarmaText>
        <JoinedDate>joined 2 years ago</JoinedDate>
        <HomepageURL>https://adnab.me/</HomepageURL>
      </UserDetail>
      {/* <UserActivity>
        <ButtonWrap>
          <SubmissionsBtn></SubmissionsBtn>
          <FavoritesBtn></FavoritesBtn>
        </ButtonWrap>
        <CardList>
          
        </CardList>
      </UserActivity> */}
    </UserWrap>
  );
}
