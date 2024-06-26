'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import hifilogo from '@/public/f5s2df.svg';
import { Stack, Badge, IconButton, Button, Typography, Box, Divider, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import UserChip from './micro/UserChip';
import './styles/style.css';
import { ReduxProvider } from '@/redux/store';
import { RiFacebookCircleFill, RiGlobalFill, RiInstagramFill, RiLinkedinFill, RiMailOpenFill, RiMenuLine } from "@remixicon/react";
import { RiArrowDownSLine, RiCustomerService2Line } from '@remixicon/react';
import Categories from './Categories';
import CategoryNav from './micro/CategoryNav';
import { navLinks } from '@/lib/data';
import Shoppingbtn from './Shoppingbtn';


function NavBarHomepage() {
  return (
    <AppBar className='mainappbar border-b' position="static" color='transparent' elevation={0}>
      <Box className="topstrip">
        <Container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <div className="t-item ">
              <RiGlobalFill
                size={20}
                className='icon'
              />
              <div className="text">www.hificomputer.com</div>
            </div>
            <div className="divider"></div>
            <div className="t-item social">
              <a href="https://facebook.com/hificomputer">
                <RiFacebookCircleFill
                  size={20}
                  className='icon'
                />
              </a>
            </div>
            <div className="t-item social">
              <a href="https://instagram.com/hificomputer">
                <RiInstagramFill
                  size={20}
                  className='icon'
                />
              </a>
            </div>
            <div className="t-item social">
              <a href="https://instagram.com/hificomputer">
                <RiLinkedinFill
                  size={20}
                  className='icon'
                />
              </a>
            </div>

          </Stack>
          <Stack direction="row" spacing={2}>
            <div className="t-item">
              <a href="mailto:sirony@gmail.com">
                <RiMailOpenFill
                  size={20}
                  className='icon'
                />
                <div className="text">contact@hificomputer.com</div>
              </a>
            </div>
            <div className="t-item">
              <RiCustomerService2Line
                size={20}
                className='icon'
              />
              <div className="text">+880966-544412</div>
            </div>
          </Stack>
        </Container>
      </Box>
      <Toolbar sx={{ py: 2 }} >

        <Stack alignItems="center" direction="row" spacing={2}>
          <Link href="/">
            <Image src={hifilogo} alt='Hifi Computer Logo' width={60} />
          </Link>
          <Link href="/">
            <Typography className='brand' color="primary" variant='h3'>Hi-Fi Computer</Typography>
          </Link>
        </Stack>

        <Stack spacing={2} direction="row" alignItems="center" sx={{ flexGrow: 1, ml: 5, display: { xs: 'none', md: 'flex' } }}>
          <div className='searchbox'>
            <input
              type="text"
              placeholder='Search Product'
            // value={registration}
            // onKeyDown={handleKeyDown}
            // onChange={event => setRegistration(event.target.value)}
            />
            <IconButton size='small'>
              <SearchIcon />
            </IconButton>
          </div>
        </Stack>
        <Shoppingbtn />
        
        <Divider orientation="vertical" sx={{ mx: 4 }} flexItem variant='middle' />
        <ReduxProvider>
          <UserChip />
        </ReduxProvider>
      </Toolbar>
      <Divider />
      <Container sx={{ display: 'flex', flexDirection: "row", alignItems: 'center' }}>
        <div className='category-container homepage' >
          <div className="btn">
            <RiMenuLine
              size={24}
              className='icon'
            />
            <div className="title">Browse Categories</div>
            <RiArrowDownSLine
              size={20}
              className='arrow-icon'
            />
          </div>
          <div className="cat-menu-container">
            <Categories />
          </div>
        </div>
        {/* <ul className='navlinks' >
          {
            navLinks.map((l, idx) => (
              <Link href={l.uri}>
                <li key={idx}>
                  {l.title}
                </li>
              </Link>
            ))
          }
        </ul> */}
        <CategoryNav />
        <div className="search-btn"></div>
      </Container>
    </AppBar>
  );
}

export default NavBarHomepage;