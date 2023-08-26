import React, { useState } from 'react'
import { Stack, easing } from '@mui/material'
import {categories} from '../utils/constants'


const Sidebar = () => {
    const [selectedCategory,setSelectedCategory] = useState(categories[0].name);
    const handlerClick = (i) => {
        console.log(i)
    }
    return (
        <Stack 
            direction={"row"}
            sx={{p:2,overflowY:"auto",height:{xs:"auto",md:"95%"},flexDirection:{md:"column"}}}
        >
            {
                categories.map((category,index)=>
                    <button 
                        className='category-btn'
                        key={category.id}
                        style={{
                            background:category.name === selectedCategory && "#fc1503",color:"#fff",gap:"10px"
                        }}
                        onClick={()=>{handlerClick(this.name)}}
                    >
                        <span
                            style={{color:category.name === selectedCategory ? "#fff":"red"}}
                        >
                            {category.icon}
                        </span>
                        <span
                            style={{opacity:category.name === selectedCategory ? 1:0.8}}
                        >
                            {category.name}
                        </span>
                    </button>
                )
            }
        </Stack>
    )
}

export default Sidebar