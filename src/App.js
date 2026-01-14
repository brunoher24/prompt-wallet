import './App.css';
import { signup } from './services/firebaseAuth';


function App() {

  const createUser = (e) => {
    e.preventDefault();
    signup("a@a.test", "super-motdepasse");
  }




  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={createUser}>
          <button>Ajouter un utilisateur</button>
        </form>
      </header>
    </div>
  );
}

export default App;
