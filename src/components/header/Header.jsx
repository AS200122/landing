import Nav from "./header-nav/Nav";
import Logo from "./header-logo/Logo";
import SearchUser from "./header-search/Search";

import "./Header.scss";

export default function Header() {
  return (
    <header>
        <Nav />
        <Logo />
        <SearchUser />
    </header>
  );
}
