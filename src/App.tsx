import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import RouteGuard from "./components/RouteGuard";
import NFTDetailsPage from "./pages/NFTDetailsPage";
import { StyledPageWrapper } from "./pages/styledPages/PageWrapper.styled";

function App() {
  return (
    <Router>
      <StyledPageWrapper>
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
      </StyledPageWrapper>
    </Router>
  );
}

export default App;
