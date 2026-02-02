//second method to use context 
import {createContext , useContext} from "react"

//pichle method me hum React.createContext() likh rhe the so usme hum React.createContext me kuch nhi dal rhe thai but idhar creatContext() but idhar default value dali ja skti hain mtlb jabh context create ho toh usme initial kya ho idhar hum ek object de rha hain jese hum pichle method me state declare kri toh usme humne object me variable aur method pass kiya tha zaruri nhi ha state ka method hi dena kuch bhi deskte hon  

// Jabh humara yeh context create hoga then humare pe themeMode darkTheme and lightTheme method ka access hoga 
const ThemeContext  = createContext({
   themeMode : "light",
   darkTheme: ()=> {} ,
   lightTheme: ()=> {} 
})
export {ThemeContext}

//yeh themeprovider hain kya ek variable hi hain jisse ap export kr rhe ho niche yeh bas syntax hai ese directly bhi krskte ho alag se themecontext.provider ke liye jsx wali banane ki jurat nhi 
const ThemeProvider = ThemeContext.Provider

export {ThemeProvider}

//Itna hi nhi tum apne custom hook bhi banaskte hon joh aksar log banate hain export krenge function as custom hook apne aap me ek func hi hain 

export default function useTheme() {
   return useContext(ThemeContext)
}
