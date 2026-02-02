
import './App.css'
import {useState , useEffect} from "react"
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from "./components/Card.jsx"
function App() {
  //abh iss se mere themeMode me direct value agyi light aur yeh joh methods hain inka access ha but abhi kuch kr nhi rhe mtlb declared hai but unki functionality defined nhi ha method ha but yeh krte kya ha voh mujhe nhi pta so functionality define krne ke liye simple dono ke liye method banalo aur usse direct unme functionality chali jati hain mltb esa nhi ki automatically html me inject hojayegi 
  const[themeMode , setThemeMode] = useState("light")

  const lightTheme = () => {
      setThemeMode("light")
  }

  const darkTheme = ()=> {
      setThemeMode("dark")
  }

  //but actual change in theme voh classic JS se hi krni padegi  aur usko show krne ke liye useEffect hook ka use krna padega
  useEffect(()=> {
    // basically with this u are removing both light and dark from className aur remove kyu kiya kyuki mujhe vaha add krna hain mujhe nhi pta tha ki phele se usme kya value hain toh change krne ka load hi nhi mene yaha pe
      document.querySelector("html").classList.remove("light" , "dark")

      document.querySelector("html").classList.add(themeMode)
  } , [themeMode])
  //dependency hogi themeMode as jabh theme change hogi from light to dark or dark to light so dubara load hoga page so voh ek dependecny hain 

  return (  // wrap krdenge apne ThemeContext.Provider ko but hume isme value bhi deni padti hain aur value ayegi kese voh bhi dekhna padega so iss se mere card aur themebtn ke pass access hoga sari values as abh voh wrap ho chuke hain 
            <ThemeProvider value={{themeMode , lightTheme , darkTheme}}>
            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                        <Card/>
                    </div>
                </div>
            </div>
            </ThemeProvider>

  )
}

export default App
