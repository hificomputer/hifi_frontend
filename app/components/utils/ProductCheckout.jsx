// Product at wishlist
import React from 'react';
import { Stack, Box, Paper, Chip, Typography, Zoom, Card, CardMedia, CardContent } from '@mui/material';
import Link from 'next/link';
import { RiCloseLine, RiShoppingCartLine } from '@remixicon/react';


function ProductCheckout({ product, cartInfo, addToCart, removeProduct, decrementFromCart }) {
    const product_link = "/product/" + product.slug;
    return (
        <Card
            className='rounded border shadow-sm'
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            elevation={0}
        >
            <CardMedia
                component="img"
                sx={{ width: 120, height: 120 }}
                image={product.cover}
                alt={product.title}
            />

            <Stack sx={{ px: 1, py: 3 }}>
                <Typography variant="body2" >
                    <Link href={product_link} className='hover:text-sky-800'>
                        {product.title}
                    </Link>
                </Typography>
                <Stack direction="row" alignItems="center" gap={1}>
                    <Typography variant='caption' color="secondary">Unit Price: </Typography>
                    <Typography variant='caption'>{(product.priceSale || product.price).toLocaleString('en-in') + "৳"}</Typography>
                </Stack>
                <Stack sx={{ mt: 1 }} direction="row" alignItems="center" gap={2} justifyContent="space-between">
                    <div className="p-count-inp">
                        <button onClick={() => addToCart(product.id)}>+</button>
                        <div className="count">{cartInfo[product.id]}</div>
                        <button onClick={() => decrementFromCart(product.id)}>-</button>
                    </div>
                    <button
                        className='checkout-btn'
                        onClick={() => removeProduct(product.id)}
                    >
                        <RiCloseLine
                            size={15}
                            className='icon'
                        />
                        <div className="text">Remove</div>
                    </button>
                </Stack>
            </Stack>
        </Card>
    )
}

export default ProductCheckout;

