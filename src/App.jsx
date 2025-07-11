import {Routes, Route} from "react-router-dom";
import './App.css'
import Home from "./Pages/Home"
//import RecipeDetails from "./Pages/RecipeDetails"

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" Component={()=><Home/>}/>
          {/* <Route path="/recipes/:recipeId" Component={() => <RecipeDetails/>} /> */}
        </Routes>
    </div>
  )
}

export default App
