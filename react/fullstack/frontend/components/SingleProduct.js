import React from 'react';
import { useRouter } from 'next/router'; 
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import DisplayError from './ErrorMessage';
import Head from 'next/head';

const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    Product(where:{
      id: $id
    }) {
      id
      name
      price
      description
      photo {
        image {
          publicUrlTransformed
        }
        altText
      }
    }
  }`;

  export default function SingleProduct({ id }) {
    const { data, loading, error } = useQuery(SINGLE_PRODUCT_QUERY, { variables: { id }});

    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <DisplayError error={error}></DisplayError>
    }

    const { Product } = data;
    console.log(Product);

    return (<div>
      <Head><title>Sick Fits | {Product.name}</title></Head>
      <div className="details">
        <img src={Product.photo?.image.publicUrlTransformed} alt={Product.photo?.altText}></img>
        <h2>{Product.name}</h2>
        <p>{Product.description}</p>
      </div>
    </div>);
  }