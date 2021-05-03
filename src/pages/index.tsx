import React from "react";
import Layout from "../components/Layout/Layout";
import Seo from "../components/Seo/Seo";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Section from "../components/Section/Section";
import SeanImage from "../components/SeanImage/SeanImage";
import FeatureList from "../components/FeatureList/FeatureList";
import ContactForm from "../components/ContactForm/ContactForm";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Header />
    <Section image={<SeanImage />}>
      <h2 className="u-font-underline u-font-heading h200 u-black u-margin-bottom-2">What I do</h2>
      <p>I'm a freelance front end developer based in Glasgow, Scotland. </p>
      <p>
        I have expert knowledge of front end web development with a focus on JavaScript development,
        responsive design and accessibility.
      </p>
      <h3 className="u-font-heading h500 u-black u-margin-top-3 u-margin-bottom-1">
        Some technologies I work with most include:
      </h3>
      <FeatureList
        listItems={[
          "React",
          "Redux",
          "HTML5",
          "CSS/SCSS",
          "Storybook JS",
          "Webpack",
          "React Testing Library",
        ]}
      />
    </Section>

    <Section className="u-bg-offwhite">
      <h2 className="u-font-underline u-font-heading h200 u-black u-margin-bottom-2">
        Get in touch
      </h2>
      <p>
        I'm currently available for contracting and freelance opportunities. Fill in the form below
        to get in touch.
      </p>
      <ContactForm />
    </Section>
    <Footer />
  </Layout>
);

export default IndexPage;
