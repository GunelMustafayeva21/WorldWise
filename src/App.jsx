import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useActionData, Navigate } from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";



function App() {

  const [cities, setCities]=useState([])
  const [isLoading, setIsLoading]= useState(false)

  useEffect(()=>{
     async function getCities(){
      try{
      setIsLoading(true)
       const result= await fetch("http://localhost:9000/cities")
       const data = await result.json()
       console.log(data)
       setCities(data)
      }
      catch(error){
        alert("Fetch failed")
      }
      finally{
        setIsLoading(false)
      }
     }
     getCities()
  }, [])

  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/app" element={<AppLayout/>}>
             <Route index element={<Navigate  replace to="cities"/>}/>
             <Route path="cities" element={<CityList cities={cities} isLoading={isLoading}/>}/>
             <Route path="countries" element={<CountryList cities={cities} isLoading={isLoading}/>}/>
             <Route path="form" element={<Form/>}/>

             <Route path="cities/:id" element={<City/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
