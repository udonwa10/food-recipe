import './App.css';
import Home from './pages/Home';
import {Routes,Route} from 'react-router-dom'
import Recipe from './components/Recipe';
import Meal from './pages/Meal';
import {useState,useEffect} from 'react'
import Navbar from './components/Navbar';


function App() {
  const [hello,setHel] = useState([])
  const [query,setQuery] = useState()
  const [loading,setLoading] = useState(true)
  const [searchInput, setSearchInput] = useState('')


  const fetchData=async()=>{
    const app_id ='4428ceda'
    const app_key ='078ba0b216a4760fddb28d56933ad017'
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?app_id=${app_id}&app_key=${app_key}&q=${query} &type=public`)
    const data = await response.json()
    setHel(data.hits)
}

  const getInfo=(e)=>{
      e.preventDefault()
      setQuery(searchInput)
  }

useEffect(()=>{
  setLoading(true)
  fetchData()
  setLoading(false)
},[query])

console.log(hello)

  return (
    <div className="App">
      <div className="Router">
        <Routes>
          <Route path={'/'} exact element={<Home/>}/>
          <Route path={'/meal'}  element={<Meal
            getInfo={getInfo}
             setSearchInput={setSearchInput}
              searchInput={searchInput}
              hello={hello}
              loading={loading}
              setLoading={setLoading}
              />}/>
          <Route path={'/meal/:label'} element={<Recipe hello={hello} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
