import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import React, { useState } from 'react'
import useForm from '../lib/useForm';
import Form from './styles/Form';
import DisplayError from './ErrorMessage'
import { ALL_PRODUCTS_QUERY } from './Products';
import Router from 'next/router';

const CREATE_PRODUCT_MUTATION = gql`
mutation CREATE_PRODUCT_MUTATION(
  # variables passed in
  $name: String!
  $description: String!
  $price: Int!
  $image: Upload
) {
  createProduct(data:{
    name: $name
    description: $description
    price: $price
    status: "AVAILABLE"
    photo: {
      create: {
        image: $image,
        altText: $name
      }
    }
  }) {
    id
    name
    price
    description
  }
}`;

function CreateProduct() {
  const {inputs, handleChange, clearForm} = useForm({
    image: '',
    name: 'Nice shoes',
    price: 100,
    description: 'Some description'
  });
  const [createProduct, {data, error, loading}]  = useMutation(CREATE_PRODUCT_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: ALL_PRODUCTS_QUERY }]
  });
  return (
    <Form onSubmit={async (e) => {
      e.preventDefault();
      // submit input to backend
      const res = await createProduct();
      clearForm();
      // go back to products page
      Router.push({pathname: `/product/${res.data.createProduct.id}`});
    }}>
      <DisplayError error={error}></DisplayError>
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="image">
          Image
          <input
            required
            type="file" 
            id="image" 
            name="image"
            onChange={handleChange} 
          />
        </label>
        <label htmlFor="name">
          Name
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Name" 
            value={inputs.name}
            onChange={handleChange} 
          />
        </label>
        <label htmlFor="price">
          Price
          <input 
            type="number" 
            id="price" 
            name="price" 
            placeholder="Price" 
            value={inputs.price}
            onChange={handleChange} 
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea 
            id="description" 
            name="description" 
            placeholder="Description" 
            value={inputs.description}
            onChange={handleChange} 
          ></textarea>
        </label>
      </fieldset>
      <button type="submit">Add Product</button>
    </Form>
  )
}

export default CreateProduct
