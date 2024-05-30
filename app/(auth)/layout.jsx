import { Container, Grid, Box } from '@mui/material'
import Image from 'next/image';
import banner from '@/public/images/20547283_6310505.svg';

export default function AuthLayout({ children }) {
    return (
        <Box className="border-b">
        <Container sx={{ py: 10 }} >
          <Grid container justifyContent="center" alignItems="center" spacing={5}>
            <Grid item xs={12} md={6} sx={{display: {xs: 'none', md: 'block'}}}>
              <Image src={banner} />
            </Grid>
            <Grid item xs={12} md={6}>
              {children}
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  }