import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap'; 
import { getUsersAction } from '../../redux/action';

function UserListPage() {
  const dispatch = useDispatch();
  const { users } = useSelector(state => state.UserListReducer);

  useEffect(() => {
    dispatch(getUsersAction());
  }, [dispatch]);

  return (
    <div>
      <h1>Список пользователей</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Имя</th>
            <th>Имя пользователя</th>
            <th>Электронная почта</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default UserListPage;
