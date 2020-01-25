import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react';

function Error({ statusCode }) {
    const router = useRouter()
    useEffect(() => {
        // Update the document title using the browser API
        router.push('/')
      });
    return (
      <p>
        {statusCode
          ? `An error 404 occurred on server`
          : 'An error occurred on client'}
      </p>
    )
  }
  
  Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }
  
  export default Error