import NavLinks from "../prop drilling/NavLinks";

const Navbar = () => {
  const name = "ali";
  const login = true;
  return (
    <nav className="grid grid-cols-[1fr_3fr] items-center h-16 bg-gray-200 px-2">
      <h1 className="uppercase font-bold">context api</h1>
      <NavLinks name={name} login={login} />
    </nav>
  );
};
export default Navbar;
