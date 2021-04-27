import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Tim Smith',
      image: 'https://images.unsplash.com/photo-1613672859258-8608f15f2d3d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
      places: 3
    },
  ];

  return <UsersList items={USERS}/>;
};

export default Users;