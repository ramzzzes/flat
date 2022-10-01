import React, {FC, useEffect, useState} from 'react';
import TableContent from "./TableContent";
import TableHeader from "./TableHeader";
import {useSortableTable} from "./UserSortableTable";


const Table = ({search, columns}) => {

    const initialValues = [
        {
            "id": 1,
            "user": "Brion",
            "title": "brion@gmail.com",
            "role": "Admin",
            "status": true
        }, {
            "id": 2,
            "user": "Ariana",
            "title": "Ariana@gmail.com",
            "role": "user",
            "status": true
        }, {
            "id": 3,
            "user": "Alonzo",
            "title": "Alonzo@gmail.com",
            "role": "user",
            "status": true
        }, {
            "id": 4,
            "user": "Trudie",
            "title": "Trudie@gmail.com",
            "role": "user",
            "status": true
        }, {
            "id": 5,
            "user": "Korella",
            "title": "Korella@gmail.com",
            "role": "user",
            "status": false
        }
    ]

    const [data, setData] = useState(initialValues)

    useEffect(() => {
        if (search.length > 0) {
            setData(data.filter(user => user.user.toLowerCase().includes(search.toLowerCase())))
        } else {
            setData(initialValues)
        }

    }, [search])


    const [tableData, handleSorting] = useSortableTable(data, columns);


    return (
        <>
            <table className="table">
                <TableHeader {...{columns, handleSorting}} />
                <TableContent {...{columns, tableData}} />
            </table>
        </>
    );
};
export default Table;
