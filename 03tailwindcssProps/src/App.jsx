import "./App.css";
import Card from "./components/Card";

function App() {
  let myObj = {
    userName: 'Haseeb',
    age: 19
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      {/* Centered Heading */}
      <h1 className="bg-green-400 text-black px-6 py-3 rounded-lg mb-8">
        Tailwind Test
      </h1>
      <Card username="haseeb"/>
      <Card username="Ali"/>
    </div>
  );
}

export default App;
