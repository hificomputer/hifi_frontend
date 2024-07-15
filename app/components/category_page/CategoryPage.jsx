'use client'

import React, { useState, useEffect } from 'react';
import {
    Container, Grid, Paper, Box, Chip, Stack, Typography, Breadcrumbs, Slider,
    FormGroup, Checkbox, FormControlLabel, Accordion, AccordionSummary, AccordionDetails
} from '@mui/material';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ProductGrid from './ProductGrid';
import ProductsSkeleton from './ProductsSkeleton';
import CategoryPagination from './CategoryPagination';
import CategoryChoices from './CategoryChoices';
import { useGet } from '@/hooks/useApi';
import { api_endpoints, api_suffixes } from '@/lib/data';



const CategoryPage = ({params, cat_data}) => {
    const {
        data: paginated_data, perform_get, loaded, loading, error
    } = useGet(`${process.env.NEXT_PUBLIC_API_HOST}${api_endpoints.view_category}${params?.slug}${api_suffixes.all_products}`);

    useEffect(() => {
        if (!loaded) {
            perform_get();
        }
    }, [])

    // if (!loaded) {
    //     return <div>Loading...</div>
    // }
    const [selectedTags, setSelectedTags] = useState([]);
    
    const addId = (id) => {
        setSelectedTags([...selectedTags, id]);
    }
    useEffect(() => {
        console.log(selectedTags);
    }, [selectedTags])
    

    return (
        <>
            <Paper
                sx={{ py: 2, px: 2 }}
                elevation={0}
                className='border'
            >
                <Stack direction="row" justifyContent="space-between">
                    <Breadcrumbs
                        separator={<NavigateNextIcon fontSize='small' />}
                    >
                        <HomeIcon />
                        {
                            cat_data.category_tree.map(cat => (
                                <Link key={cat.id} href={`/category/${cat.slug}`}>
                                    <Typography
                                        variant='body2'
                                        className='hover:text-red-600'
                                    >
                                        {cat.title}
                                    </Typography>
                                </Link>
                            ))
                        }
                    </Breadcrumbs>
                    <img width={"120px"} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/AsusTek-black-logo.png/1200px-AsusTek-black-logo.png"} />
                </Stack>
                <Typography
                    variant='h5'
                    component="h2"
                    sx={{ mt: 1 }}
                    color="primary"
                >
                    Asus Laptop Price in Bangladesh
                </Typography>
                <Typography
                    variant='body2'
                    component="h3"
                    color="text.secondary"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor esse exercitationem odit enim est fugiat libero recusandae quo tempore rem excepturi perferendis ratione doloremque doloribus tenetur iste, autem vero ut quas harum? Explicabo soluta quo voluptates labore, nam, officiis eum officia ducimus molestiae laudantium harum ab animi, id nulla corrupti.
                </Typography>
                <Box sx={{ mt: 1 }}>
                    {
                        cat_data.childs.filter(child => child.cat_type != 'tag').map((c, idx) => (
                            <Link key={idx} href={`/category/${c.slug}`}>
                                <Chip sx={{ mr: 1, mb: 1 }} label={c.title} />
                            </Link>
                        ))
                    }
                </Box>
            </Paper>
            <Container sx={{ my: 2 }}>
                <Grid container sx={{ mt: 1 }} spacing={2}>
                    <Grid item xs={0} md={3} >
                        <CategoryChoices 
                            groups={cat_data?.groups || []}
                            slug={cat_data.slug}
                            addId={addId}
                        />

                    </Grid>
                    <Grid item xs={0} md={9} >
                        {
                            loaded && !loading ?
                            <ProductGrid products={paginated_data?.results} /> :
                            <ProductsSkeleton num={8} />
                        }
                        <Box sx={{ mt: 2 }}>
                            <CategoryPagination />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default CategoryPage

