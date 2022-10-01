import UserProfileImage from "../UserList/icons/UserProfileImage";

import styled from "styled-components";
import {Switch} from "@mui/material";

const UserProfileImageContainer = styled.div`
  position: absolute;
  margin-left: -90px;
  margin-top: -8px;
`;


const AdminKeyContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AdminKeyImgContainer = styled.div`
  background-color: #7E7EF1;
  width: 48px;
  height: 32px;
  border-radius: 30px;
  text-align: center;
  padding-top: 4px;
  margin-right: 22px;

`;


const TableBody = ({tableData, columns}) => {

    return (
        <tbody>
        {tableData?.map((data) => {
            return (
                <tr key={data.id}>
                    {columns.map(({accessor}, index) => {
                        let render = data[accessor] ? data[accessor] : "";

                        if (accessor === 'role' && render.toLowerCase() === 'admin') {
                            render = <AdminKeyContainer>
                                <AdminKeyImgContainer>
                                    <img height={24}
                                         src={require('../../images/adminKey.png')}
                                         alt={'image'}/>
                                </AdminKeyImgContainer>
                                {render}
                            </AdminKeyContainer>
                        }
                        return <td key={accessor}>
                            {index === 0 && <UserProfileImageContainer><UserProfileImage/></UserProfileImageContainer>}
                            {accessor === 'status' ? <Switch color="primary" defaultChecked={render}/> : render}
                        </td>;
                    })}
                </tr>
            );
        })}
        </tbody>
    );
};

export default TableBody;
