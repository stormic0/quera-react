import UserItem from "./UserItem";
import PropTypes from "prop-types";

const UserList = ({ users }) => {
  return (
    <>
      {users.map((user, index) => (
        <UserItem name={user.name} key={index} />
      ))}
    </>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number,
    })
  ).isRequired,
};

export default UserList;
