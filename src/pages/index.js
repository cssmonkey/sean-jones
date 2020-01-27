import React from "react"

import Layout from "../components/Layout/Layout"
import Section from "../components/Section/Section"
import SEO from "../components/Seo/Seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section className="u-bg-black">
      <h2 className="u-font-heading h300 u-offwhite u-margin-bottom-4">
        Front End development with a focus on JavaScript, responsive design and
        accessibility
      </h2>
      <div className="u-margin-bottom-4">
        <h3 className="u-font-heading h500 u-font-light u-offwhite u-margin-bottom-1">
          Modern technology stack
        </h3>
        <p className="u-offwhite">
          Some of the technologies I work with most include: SCSS/BEM,
          JavaScript/ES6, React, Redux, Git and VS Code
        </p>
      </div>
      <div className="u-margin-bottom-4">
        <h3 className="u-font-heading h500 u-font-light u-offwhite u-margin-bottom-1">
          Mobile first strategy
        </h3>
        <p className="u-offwhite">
          Building for the smallest screen and working your way up. A mobile
          first approach is the best way to ensure a good quality browsing
          experience.
        </p>
      </div>
      <div className="">
        <h3 className="u-font-heading h500 u-font-light u-offwhite u-margin-bottom-1">
          CMS Experience
        </h3>
        <p className="u-offwhite">
          In addition to my experience with HTML, CSS and JavaScript I have a
          sound knowledge of object oriented back-end technologies. CMSs I've
          worked with include Umbraco CMS, AEM &amp; Wordpress.
        </p>
      </div>
    </Section>
    <Section>
      <h2 className="u-font-heading h300 u-margin-bottom-4">Experience</h2>
      <div className="u-margin-bottom-4">
        <h3 className="u-font-heading h500 u-font-light u-offwhite u-margin-bottom-1">
          Modern technology stack
        </h3>
        <p className="u-offwhite">
          Some of the technologies I work with most include: SCSS/BEM,
          JavaScript/ES6, React, Redux, Git and VS Code
        </p>
      </div>
    </Section>
  </Layout>
)

export default IndexPage
