import Navbar from "./components/Navbar";
import SecondaryNavbar from "./components/secondaryNavbar";
import ReviewMessage from "./components/ReviewMessage";

function App() {
  return (
    <div className="flex bg-black text-white font-navbar flex-col justify-start">
      <SecondaryNavbar />
      <Navbar />

      {/* <ReviewMessage
        name="jash Agrawal"
        message="best product ever"
        date={Date.now()}
        review={5.0}
      /> */}
    </div>
  );
}

export default App;
