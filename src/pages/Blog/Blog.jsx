import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog');
    return (
        <div className='md:w-[70%] mx-auto '>
        <h1 className='text-5xl text-light mb-10'>Blog</h1>

            <div className='mb-10 text-light shadow-xl border-[1px] p-5'>
            <div className='mb-3 '>
                <h1 className='text-3xl'>Q: What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <p className=''><strong>Answer: </strong>Access token is a credential that is used to authenticate and authorize a user's access to protected resources. Refresh token is a long-lived credential that is used to obtain a new access token when the current access token expires or becomes invalid.
                 The access token represents the user's authentication and is used to access protected resources.
                 The refresh token is a long-lived credential used to obtain a new access token when needed. HTTP only cookie is the better place to store them.</p>
            </div>
            </div>
            <div className='mb-10 text-light shadow-xl border-[1px] p-5'>
            <div className='mb-3 '>
                <h1 className='text-3xl'>Q: Compare SQL and NoSQL databases.</h1>
                <p className=''><strong>Answer: </strong>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document.</p>
            </div>
            </div>
            <div className='mb-10 text-light shadow-xl border-[1px] p-5'>
            <div className='mb-3 '>
                <h1 className='text-3xl'>Q: What is express js? What is Nest JS?</h1>
                <p className=''><strong>Answer: </strong>Both are server side framework of nodejs. Express js is a light weight flexible framework. NestJS provides a more structured and opinionated approach, which can make it easier to build complex APIs with proper separation of concerns.</p>
            </div>
            </div>
            <div className='mb-10 text-light shadow-xl border-[1px] p-5'>
            <div className='mb-3 '>
                <h1 className='text-3xl'>Q: What is MongoDB aggregate and how does it work?</h1>
                <p className=''><strong>Answer: </strong> MongoDB aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages.</p>
            </div>
            </div>
        </div>
    );
};

export default Blog;