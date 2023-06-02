import { Box, InputBase, List, ListItem, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import {useSelector,useDispatch} from 'react-redux';
import {getProducts} from '../../redux/actions/productAction';
import { Link } from 'react-router-dom';

const SearchContainer = styled(Box)`
    background: #fff;
    width: 35%;
    border-radius: 2px;
    margin-left: 10px;
    display: flex;
`
const InputSearchBase = styled(InputBase)`
    padding-left: 20px;
    width: 100%;
    font-size: unset;
`
const SearchIconWrapper = styled(Box)`
    color: blue;
    padding: 5px;
    cursor: pointer;
    display: flex;
`

const ListWrapper = styled(List)`
    position: absolute;
    background: #FFFFFF;
    color: #000;
    margin-top: 36px;

`
const Search = () => {

    const [text, setText] = useState('');

    const {products} = useSelector(state => state.getProducts);

    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getProducts())
    },[dispatch])

    const getText = (e) =>{
        setText(e.target.value);
    }
  return (
    <SearchContainer>
        <InputSearchBase
          placeholder='Search for products, brands and more'
          onChange={(e) => getText(e)}
          value={text}
        />
        <SearchIconWrapper>
            <SearchIcon/>
        </SearchIconWrapper>
        {
            text &&
                <ListWrapper>
                    {
                        products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                            <ListItem>
                                <Link 
                                  to={`/product/${product.id}`}
                                  onClick={() => setText('')}
                                  style={{textDecoration:'none',color:'inherit'}}
                                >
                                    {product.title.longTitle}
                                </Link>
                            </ListItem>
                        ))
                    }
                </ListWrapper>
        }
    </SearchContainer>
    
  )
}

export default Search;