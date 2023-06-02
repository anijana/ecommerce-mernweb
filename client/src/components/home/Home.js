

import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import { Box, styled } from '@mui/material'
import { getProducts } from '../../redux/actions/productAction'
import { useDispatch, useSelector } from 'react-redux'
import Slide from './Slide'
import MidSlide from './MidSlide'
import MidSection from './MidSection'

const Component = styled(Box)`
    padding: 20px 10px 10px 10px;
    background: #F2F2F2;
`
const Image = styled('img')(({ theme })=>({
  width:'100%',
  marginTop: 10,
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.down('md')]: {
    objectFit: 'cover',
    height: 120,
  }

}));

const Home = () => {

  const url = 'https://rukminim1.flixcart.com/fk-p-flap/3006/433/image/31bc5f75424dd33c.jpg?q=50';

  const {products} = useSelector(state => state.getProducts);

  // console.log(products);
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(getProducts());
  },[dispatch])
  return (
    <>
        <Box style={{borderBottom: '0.7px solid #d6d6c2'}}>
        <Navbar/>
        </Box>
        <Component>
          <Banner/>
          <Image src={url} alt="img" />
          <MidSlide products = {products} title='Deal of the Day' timer={true}/>
          <MidSection/>
          <Slide products = {products} title='Discount for you' timer={false}/>
          <Slide products = {products} title='Suggesting Items' timer={false}/>
          <Slide products = {products} title='Top selection' timer={false}/>
          <Slide products = {products} title='Recommeded Items' timer={false}/>
          <Slide products = {products} title='Trending Offers' timer={false}/>
          <Slide products = {products} title='seasons Top picks' timer={false}/>
          <Slide products = {products} title='Top Deals on AccessoriesVIEW' timer={false}/>
        </Component>
        
    </>
  )
}

export default Home;