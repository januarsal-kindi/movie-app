import React from 'react'
import Navbar from '../navbar'
const DefaultLayout: React.FC<{}> = (props) => {
    return (
       <>
        <Navbar/>
        {props.children}
       </>
    )
}

export default DefaultLayout
