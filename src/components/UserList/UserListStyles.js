import styled from "styled-components";

const UserListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const UsersList = styled.div`
  width: 80%;
`;

const UserListHeader = styled.div`
  border-bottom: 2px solid #D8D8D8;
  padding-bottom: 31px;
  display: flex;
  margin-left: 71px;
`;

const UserListHeaderItem = styled.div`
  display: flex;
  width: 20%;

  :nth-child(1) {
    width: 40%;
  }

  :last-child {
    justify-content: flex-end;
    padding-right: 38px;
  }

  :hover {
    cursor: pointer;
  }
`;

const UserListHeaderLabel = styled.div`
  padding-right: 8px;
  font-weight: bold;
`;

const UserListHeaderSort = styled.div`
  padding-top: 0;
`;

const UserListContentItem = styled.div`
  padding-bottom: 19px;
  padding-top: 37px;
  display: flex;
`;

const UserInfoContainer = styled.div`
  display: flex;
  margin-left: 32px;
  width: 100%;
  border-bottom: 1px solid #D8D8D8;

`;

const UserInfo = styled.div`
  padding-top: 0;
  padding-bottom: 19px;

  width: 20%;

  :nth-child(1) {
    width: calc(40% - 16px);
  }

  :last-child {
    justify-content: flex-end;
    padding-right: 38px;
  }

`;


const UserInfoItem = styled.div`
  font-weight: bold;
  color: #000000;
`;

const UserEmail = styled.div`
  color: #000000;
  padding-top: 8px;
`;


export {
    UserListContainer,
    UsersList,
    UserListHeader,
    UserListHeaderItem,
    UserListHeaderLabel,
    UserListHeaderSort,
    UserListContentItem,
    UserInfoItem,
    UserInfo,
    UserInfoContainer,
    UserEmail,
}
