

import { Box, styled } from '@mui/material'
import React from 'react'
import Slide from './Slide'

const Component = styled(Box)`
    display: flex;
`

const LeftComponent = styled(Box)(({theme})=>({
    width: '83%',
    [theme.breakpoints.down('md')]: {
        width: '100%'
    }
}));
    
const RightComponent = styled(Box)(({ theme })=> ({
    background: '#FFFFFF',
    padding: '5px',
    marginTop: '10px',
    marginLeft: '6px',
    width: '17%',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}))
    


const MidSlide = ({products, title, timer}) => {

    const adsURL = 'https://rukminim1.flixcart.com/fk-p-flap/464/708/image/1ef5a1cbd45b7645.jpeg?q=70';
  return (
    <Component>
        <LeftComponent>
          <Slide products = {products} title={title} timer={timer}/>
        </LeftComponent>
        <RightComponent>
            <img src={adsURL} alt="adImg" style={{width: 231}}/>
        </RightComponent>
    </Component>
  )
}

export default MidSlide