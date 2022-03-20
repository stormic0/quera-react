import usersData from "./data/users.json";
import UserList from "./components/UserList";
import AverageAge from "./components/AverageAge";

const App = () => {
  const getUsers = () => {
    return usersData.filter((obj) => obj.role === "user");
  };

  const getAdminAgeAverage = () => {
    const admins = usersData.filter((obj) => obj.role === "admin");
    let total = 0;
    admins.forEach((obj) => {
      total += obj.age;
    });
    return total / admins.length;
  };

  return (
    <>
      <UserList users={getUsers()} />
      <AverageAge average={getAdminAgeAverage()} />
    </>
  );
};

export default App;
