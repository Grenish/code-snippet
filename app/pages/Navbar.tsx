export default function Navbar() {
  return (
    <header>
      <nav className="flex items-center justify-between w-[80%] m-auto p-4">
        <div >
          <img src="/coffee.svg" alt="Coffee" className="w-14" />
        </div>
        <div>
          <ul className="flex">
            <li className="">Home</li>
            <li className="ml-3">Discover</li>
            <li className="ml-3">Login</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
