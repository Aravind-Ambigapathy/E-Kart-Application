import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { BsPerson } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiShoppingBag } from 'react-icons/bi'
import { AiOutlineSearch } from 'react-icons/ai'
import { styled, alpha } from '@mui/material/styles';
import { InputBase } from '@mui/material';
import Men from '../Navcomp/Men';
import Women from '../Navcomp/Women';
import Kids from '../Navcomp/Kids';
import HomeLiving from '../Navcomp/HomeLiving';
import Beauty from '../Navcomp/Beauty';
import Studio from '../Navcomp/Studio';
import Profile from '../Navcomp/Profile';

function Navbar() {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '30ch',
            },
        },
    }));

    return (

        <div>
            <Router>
                <div className='navbarf' >
                    <nav className="navbar navbar-expand-lg navbar-light ">
                        <div className="container-fluid">
                            <Link className="" ><img src=''
                                height='30px' /></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbarmain">
                                    <li className="nav-item">
                                        <Men />
                                    </li>
                                    <li className="nav-item">
                                       <Women />
                                    </li>
                                    <li className="nav-item">
                                        <Kids />
                                    </li>
                                    <li className="nav-item">
                                      <HomeLiving />
                                    </li>
                                    <li className="nav-item">
                                        <Beauty/>
                                    </li>
                                    <li className="nav-item">
                                      <Studio />
                                    </li>
                                </ul>
                                <Search className='bg-light searchbar1'>
                                    <SearchIconWrapper>
                                        <AiOutlineSearch />
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        placeholder="Search for products,brand and more"
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </Search>
                                <ul className="navbar-nav  navbarsub">
                                    <li className="nav-item">

                                      <Profile/>
                                    </li>
                                    <li className="nav-item">
                                        <a href='' className="nav-link active" aria-current="page" ><p className='navicons'><AiOutlineHeart /></p>Wishlist</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href='' className="nav-link active" aria-current="page" ><p className='navicons'><BiShoppingBag /></p>Bags</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                </div>
                {/* <Route path='/men' component={Men}/> */}
            </Router>
        </div>
    )
}

export default Navbar