import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { siteTitle, container, heading, navLinks, navLinkItem, navLinkText } from './layout.module.css';

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
  query{
    siteBuildMetadata {
      id
    }
    site(siteMetadata: {description: {}}) {
      id
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }`);
  console.log(data.site.siteMetadata.title);
  return (
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/">Home</Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/about">About</Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}
export default Layout