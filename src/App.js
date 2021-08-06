import './App.css';
import Background from "./assets/background.jpg";

function App() {
  return (
    <main className="w-screen h-screen typography">
        <div className="w-full h-auto text-center text-xs md:text-xl">Modified kelly criterion algorithm by Marjanov Milan</div>
        <img src={Background} className="background w-full md:w-2/3 h-auto md:h-5/6 flex items-center justify-center" alt="background"></img>
        <form>
          <input required type="text" placeholder="Enter odds" className="text-center"></input>
          <button type="submit">Submit</button>
        </form>
        <div className="text-center text-xs md:text-sm">Contact me via email : marjanovmilan12@gmail.com</div>
    </main>
  );
}

export default App;
