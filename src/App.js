import { useState } from 'react';
import Header from "./components/Header/Header";
import Sidebar from './components/Sidebar/Sidebar';
import AppRoutes from './components/AppRoutes';
import Backdrop from './components/Backdrop/Backdrop';
import Footer from './components/Footer/Footer';



function App() {
  const [showSearch, setShowSearch] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [sideShow, setSideShow] = useState(false);
  const [backdropShow, setBackdropShow] = useState(true);
  const handleClose = () => {
    if (showSearch) {
      setShowSearch(false)
    } else if (showUserDropdown) {
      setShowUserDropdown(false)
    } else if (sideShow) {
      setSideShow(false)
    }
  }
  return (
    <div onClick={() => { handleClose() }}>
      <Header showSearch={showSearch} setShowSearch={setShowSearch} showUserDropdown={showUserDropdown} setShowUserDropdown={setShowUserDropdown} setSideShow={setSideShow} />
      <main>
        <AppRoutes />
      </main>
      <Sidebar sideShow={sideShow} setSideShow={setSideShow} />
      <Backdrop backdropShow={backdropShow} setBackdropShow={setBackdropShow} />
      <Footer />
    </div>
  );
}

export default App;
