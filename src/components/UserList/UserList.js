import React, {useEffect, useState} from 'react';

import {
    UserListContainer,
    UsersList,
} from "./UserListStyles";
import Table from "../Table/Table";

const columns = [
    {label: "User", accessor: "user", sortable: true},
    {label: "Role", accessor: "role", sortable: true},
    {label: "Status", accessor: "status", type: 'checkbox', sortable: true, sortbyOrder: "desc"},
    {label: "Actions", accessor: "actions", sortable: false},
];

const UserList = ({search}) => {


    return (
        <UserListContainer>
            <UsersList>
                <Table
                    search={search}
                    columns={columns}
                />
            </UsersList>
        </UserListContainer>
    );
}

export default UserList;
