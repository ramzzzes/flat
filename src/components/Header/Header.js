import React from 'react';
import {ReactComponent as Search} from '../../icons/search.svg';
import {
    Container,
    Content,
    PageHeader,
    SearchContainer,
    SearchIcon,
    SearchInput
} from "./HeaderStyles";


const Header = ({search, setSearch}) => {
    return (
        <Container>
            <Content>
                <PageHeader>
                    Project Access
                </PageHeader>
                <SearchContainer>
                    <SearchIcon>
                        <Search/>
                    </SearchIcon>
                    <SearchInput value={search} onChange={(e) => setSearch(e.target.value)}
                                 placeholder="Type to filter the table"/>
                </SearchContainer>
            </Content>
        </Container>
    )
}

export default Header
