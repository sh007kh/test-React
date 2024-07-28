import UserContainer from "./UserContainer";

const NavLinks = (props) => {
  const { name, login } = props;

  return (
    <div className="flex  justify-between flex-row items-center pl-4">
      <ul className="flex  justify-between space-x-2 capitalize pr-2 border-r-2 border-blue-400">
        <li className="inline-block hover:text-blue-500 transition-all duration-200 ease-linear">
          <a href="#about">about</a>
        </li>
        <li className="inline-block">
          <a href="#home">home</a>
        </li>
      </ul>
      <UserContainer name={name} login={login} />
    </div>
  );
};
export default NavLinks;
