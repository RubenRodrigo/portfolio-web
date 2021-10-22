import { useState } from "react";
import { Container } from "./components/Container";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { NavItem } from "./interfaces/NavItem";
import { NavItems } from "./staticData";

function App() {
  const [navItem, setNavItem] = useState<NavItem>(NavItems[0])

  const setNewNavState = (navItem: NavItem): void =>
    setNavItem(navItem);

  return (
    <div className="App">
      <Navbar setNewNavState={setNewNavState} />
      <Container navItem={navItem} />
      <Footer />
    </div>
  );
}

export default App;
