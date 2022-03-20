import PropTypes from "prop-types";

const UserItem = ({ name }) => {
  return (
    <div className="card">
      <img
        src={`https://avatars.dicebear.com/api/pixel-art/${name}.svg`}
        alt="avatar"
      />
      <h3 data-testid="user-name">{name}</h3>
    </div>
  );
};

UserItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default UserItem;
