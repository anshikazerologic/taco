import Header from "./components/Header";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header/>
      <main>
        <Home/>
      </main>
      
    </div>
  );
}
