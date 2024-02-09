import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home';
import Profile from './component/Profile';
import logo from './logo.svg';
// import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/profile/:id",
      element: <Profile />
    },
  ]);

  const handleSelectChange = (event) => {
    const selectedPath = event.target.value;
    router.navigate(selectedPath);
  };


  return (
    <div className="App">
      <div>
        <select onChange={handleSelectChange}>
          <option value="/">Home</option>
          <option value="/about">About</option>
          <option value="/contact">Contact</option>
          <option value="/profile/2">Profile</option>
        </select>
      </div>
      <hr></hr>
      <div><RouterProvider router={router} /></div>
    </div>
  );
}

export default App;
