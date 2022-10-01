import styled from "styled-components";

const Container = styled.div`
  height: 211px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0 3px 6px #00000029;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 61px;
`;

const Content = styled.div`
  width: 80%;
`;

const PageHeader = styled.div`
  float: left;
  padding-top: 96px;
  font: normal normal 600 36px/48px Segoe UI;
  letter-spacing: 0;
  color: #000000;
  opacity: 1;
  padding-left: 71px;
`;

const SearchContainer = styled.div`
  position: relative;
  width: 357px;
  float: right;
  margin-top: 106px;
`;


const SearchIcon = styled.div`
  position: absolute;
  right: 0;
  bottom: 1px;
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 2px solid #707070;
  outline: none;
  padding: 2px 0 5px 0;

  ::placeholder {
    color: #707070;
    font: italic 100 20px Segoe UI;
  }
`;

export {
    Container,
    Content,
    PageHeader,
    SearchContainer,
    SearchIcon,
    SearchInput
}
