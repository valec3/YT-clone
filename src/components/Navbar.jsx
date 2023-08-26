import { Stack } from "@mui/material"
import {Link} from "react-router-dom"
import {logo} from "../utils/constants"
import SearchBar from "./SearchBar"

const Navbar = () => {
    const stylesComponent = {position:"sticky",background:"#000",justifyContent:"space-between"}
    return (
        <Stack 
            direction="row" 
            alignItems={"center"} 
            p={2} 
            spacing={2} 
            sx={stylesComponent}
        >
            <Link to="/" style={{display:"flex",alignItems:"center"}}>
                <img src={logo} alt="logo" height={45}/>
            </Link>
            <SearchBar/>
        </Stack>
    ) 
}

export default Navbar