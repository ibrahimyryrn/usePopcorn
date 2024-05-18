function Navbar({ children }) {
  return (
    <div className="nav-bar">
      <div className="logo">
        <span role="img">🍿</span>
        <h1>usePopcorn</h1>
      </div>
      <input className="search" type="text" placeholder="Search" />
      {children}
    </div>
  );
}

export default Navbar;
