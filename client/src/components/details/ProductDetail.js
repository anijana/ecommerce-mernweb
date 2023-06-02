import React from "react";

import { Typography, Box, styled, Table, TableBody, TableRow, TableCell } from "@mui/material";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const Text = styled(Box)`
    font-size: 14px;
    vertical-align: baseline;
    & > p {
        font-size: 14px;
        margin-top: 10px;
    }
`
const StyledLocalOffer = styled(LocalOfferIcon)`
    margin-right: 10px;
    color: #00CC00;
    font-size: 15px;
`

const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    & > td {
        font-size: 14px;
        margin-top: 10px;
        border: none;
    }
`

const ProductDetail = ({ product }) => {
  const fassured =
    "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png";

    const date = new Date(new Date().getTime()+(5 * 24 * 60 * 60 * 1000));

    const url = 'https://rukminim1.flixcart.com/lockin/400/400/images/CCO__PP_2019-07-14.png?q=50'
  return (
    <>
    <Box style={{marginLeft: 15}}>
      <Typography>{product.title.longTitle}</Typography>
      <Typography style={{ marginTop: 5, color: "#878787", fontSize: 14 }}>
        8 Ratings & 1 Reviews
        <Box component="span">
          <img src={fassured} alt="img" style={{ width: 77, marginLeft: 20 }} />
        </Box>
      </Typography>
      <Typography>
        <Box component="span" style={{ fontSize: 28 }}>
          ₹{product.price.cost}
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#878787" }}>
          <strike>₹{product.price.mrp}</strike>
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#388E3C" }}>
          {product.price.discount}
        </Box>
      </Typography>
      <Typography>Avaliable offers</Typography>
      <Text>
        <Typography><StyledLocalOffer/> Bank Offer10% instant discount on SBI Credit Card EMI Transactions, up to ₹1500, on orders of ₹5,000 and above T&C</Typography>
        <Typography> <StyledLocalOffer/> Bank Offer10% off on DBS Bank Debit and Credit Card Transactions, up to ₹1500. On orders of ₹5,000 and above T&C</Typography>
        <Typography><StyledLocalOffer/> Bank Offer5% Cashback on Flipkart Axis Bank Card T&C</Typography>
        <Typography><StyledLocalOffer/> Buy this product and Get Extra ₹50 Off on Select Fans T&C</Typography>
        <Typography><StyledLocalOffer/> Partner OfferBuy this product & Get upto ₹500 off on Furniture</Typography>
        <Typography><StyledLocalOffer/> Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹500*</Typography>
      </Text>
      </Box>
      <Table>
        <TableBody>
            <ColumnText>
                <TableCell style={{color: '#878787'}}>Warranty</TableCell>
                <TableCell>No Warranty</TableCell>
            </ColumnText>
            <ColumnText>
                <TableCell style={{color: '#878787'}}>Delivery</TableCell>
                <TableCell style={{fontWeight: 600}}>Delivery by {date.toDateString()} | ₹40</TableCell>
            </ColumnText>
            <ColumnText>
                <TableCell style={{color: '#878787'}}>Highlights</TableCell>
                <TableCell>
                    <ul>
                        <li>Output: Color</li>
                        <li>USB | USB</li>
                    </ul>
                </TableCell>
            </ColumnText>
            <ColumnText>
                <TableCell style={{color: '#878787'}}>Important Note</TableCell>
                <TableCell> NA</TableCell>
            </ColumnText>
            <ColumnText>
                <TableCell style={{color: '#878787'}}>Seller</TableCell>
                <TableCell style={{fontWeight: 600}}>
                    <Box component='span' style={{color: '#2874f0'}}>
                        SuperComNet
                    </Box>
                    <Typography style={{fontSize:14}}>7 Days Service Center Replacement/Repair</Typography>
                    <Typography style={{fontSize:14}}>GST invoice available</Typography>
                </TableCell>
            </ColumnText>
            <ColumnText>
                <TableCell colSpan={2}><img src={url} alt="supercoinImg" /></TableCell>
            </ColumnText>
            <ColumnText>
                <TableCell style={{color:'#878787'}}>Description</TableCell>
                <TableCell>{product.description}</TableCell>
            </ColumnText>
        </TableBody>
      </Table>
    </>
  );
};

export default ProductDetail;
