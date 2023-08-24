import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';


const App = () => {
    return (
        <BrowserRouter>
            <div>App</div>
            <Box sx={{backgroundColor:"#000"}}>
                Navbar  
                <Routes>
                    <Route path="/" element={<h1>Feed</h1>} />
                    <Route path="/video/:id" element={<h1>VideoDetail</h1>} />
                </Routes>
            </Box>    
        </BrowserRouter>
    )
}

export default App