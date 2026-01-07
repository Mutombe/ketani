import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description }) {
  return (
    <Helmet>
      <title>{title} | Ketani Logistics</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="theme-color" content="#0369a1" />
    </Helmet>
  );
}