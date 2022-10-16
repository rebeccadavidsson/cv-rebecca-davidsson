import React from 'react';
import Footer from '../components/layout/Footer';
import Header from "../components/layout/Header";

const BlogLayout = ({ children }) => (

  <>
  <Header navPosition="right" className="reveal-from-bottom" />
    <main className="site-content blog">
      {children}
    </main>
    <Footer />
  </>
);

export default BlogLayout;