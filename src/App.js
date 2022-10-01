import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import UserList from "./components/UserList/UserList";
import styled from "styled-components";

const Content = styled.div`
  background-color: #F3F3F3;
  padding-bottom: 100px;
`;


const App = () => {

    const [search, setSearch] = useState('')

    return (
        <Content>
            <Header search={search} setSearch={setSearch}/>
            <UserList search={search}/>
        </Content>
    );
}

export default App;
