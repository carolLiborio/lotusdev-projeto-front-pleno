import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';



const Page404 = () => {
    return (
        <div style={{ justifyContent: 'center', display: 'flex' }}>
            <img src={process.env.PUBLIC_URL + '/images/404.jpg'} />

            <Link to="/"><Button style={{variant:'contained', color:'secundary'}}>Go to Home</Button></Link>
        </div>
    )
}
export default Page404;
