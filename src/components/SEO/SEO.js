import React from 'react';
import { Helmet } from 'react-helmet-async';


export default function SEO({ title, description, name, type, image }) {
    return (
        <Helmet>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <meta name="yandex-verification" content="b45634c56c853e20" />
            <link rel="icon" href="favicon.ico" />
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
        </Helmet>
    )
} 