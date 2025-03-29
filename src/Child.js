import { useContext } from "react"
import MyContext from "./MyContext"

const Child = () => {
    const value=useContext(MyContext);
    return <p>{value}</p>
}
export default Child;