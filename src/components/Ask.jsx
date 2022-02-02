import styled from "@emotion/styled";
import profile from "../assets/profile.svg";
import replyArrow from "../assets/replyArrow.svg";

const CommentWrap = styled.div`
  margin: 10px 20px;
  border-radius: 10px;
  overflow: hidden;
`;

const CommentAdditionalInfo = styled.div`
  height: 65px;
  background: #eddb9b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  box-sizing: border-box;
`;
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 45px;
    height: 45px;
    border: 0.1px solid rgba(0, 0, 0, 0.2);
    border-radius: 25px;
    background: #fff;
    margin-right: 10px;
  }
`;

export const UserName = styled.div`
  color: rgba(0, 0, 0, 0.6);
`;

const CommentedDate = styled.span`
  font-size: 14px;
  line-height: 138.19%;
  color: #2a6b25;
  margin-right: 12px;
`;

const CommnetContents = styled.div`
  padding: 10px 11px;
  font-size: 16px;
  line-height: 138.19%;
`;

export default function Ask() {
  return (
    <CommentWrap>
      <CommentAdditionalInfo>
        <UserInfo>
          <img src={profile} alt="profile" />
          <UserName>linsomniac</UserName>
        </UserInfo>
        <div>
          <CommentedDate>a day ago</CommentedDate>
          <img src={replyArrow} alt="댓글닫기" />
        </div>
      </CommentAdditionalInfo>
      <CommnetContents>
        As someone who, over the last year, has gone from sedentary, in front of
        the computer lifestyle, to jogging 5K 3 times a week on the treadmill
        and getting 10K steps per day half the days in the last month... My wife
        and I both feel 20 years younger. The change brought on through a number
        of lifestyle changes has been dramatic and basically entirely positive.
      </CommnetContents>
    </CommentWrap>
  );
}
