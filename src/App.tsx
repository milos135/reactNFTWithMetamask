import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./headerr/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import RouteGuard from "./components/RouteGuard";
import NFTDetailsPage from "./pages/NFTDetailsPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile"
          element={
            <>
              <RouteGuard />
              <Profile />
            </>
          }
        />

        <Route path="/nft/:nftId" element={<NFTDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
