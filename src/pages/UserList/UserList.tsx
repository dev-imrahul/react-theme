import { FC } from 'react';

interface UserListProps {}

const UserList: FC<UserListProps> = () => (
  <div className="UserList" data-testid="UserList">
    UserList Component
  </div>
);

export default UserList;
