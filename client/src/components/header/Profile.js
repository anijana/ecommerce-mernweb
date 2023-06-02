
import { Box,Menu,MenuItem,Typography, styled } from '@mui/material';
import React, { useState } from 'react'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Component = styled(Menu)`
    margin-top: 5px
`

const Profile = ({account, setAccount}) => {
    const[open, setOpen] = useState(false);


    const handleClick = (e) =>{
        setOpen(e.currentTarget);
    }

    const handleClose = () =>{
        setOpen(false);
    }

    const logOut = () =>{
        setAccount('');
    }
  return (
    <>
        <Box onClick = {handleClick}>
         <Typography style={{marginTop: 3, cursor: 'pointer'}}>{account}</Typography>
        </Box>

        <Component
            anchorEl={open}
            open = {Boolean(open)}
            onClose={handleClose}
            >
            <MenuItem onClick={() => {handleClose(); logOut();}}>
                <PowerSettingsNewIcon color='primary' fontSize='small'/>
                <Typography style={{fontSize: 14, marginLeft: 10}}>Logout</Typography>
            </MenuItem>
        </Component>
    </>
  )
}

export default Profile;