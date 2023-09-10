import "./App.css";
import MyForm from "./components/myForm";

function App() {
    return (
        <div className="App">
            <p>Login</p>
            <MyForm user={{ name: "", email: "" }} />
        </div>
    );
}

export default App;
