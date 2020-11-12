
function Header() {
  return (
    <header className="container flex text-center mx-auto py-10">
      <div className="md:w-4/6 mx-auto">
        <img src="./profile-pic.jpg" className="h-24 rounded-full mx-auto mb-5 shadow-lg" />
        <h1 className="font-bold text-3xl font-bold">shwarma</h1>
        <p className="text-xl">psychedelic rock from denver, co</p>
      </div>
    </header>
  );
}

export default Header;
