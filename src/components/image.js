import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

// eslint-disable-next-line no-unused-vars
function objectToKeyArray(obj) {
  return Object.keys(obj);
}

function getLastStringInPath(path) {
  return path.split('/').pop();
}

// function getImage(path) {
//   const relPath = `images/${path}`;
//   console.log(relPath);
//   return useStaticQuery(graphql`
//   query ($relPath: String!){
//     fileName: file(relativePath: { eq: $relPath }) {
//       childImageSharp {
//         fluid(quality: 100) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }`);
// }

// Useful for when I want to load all of the images in a folder
const getAllImages = function () {
  return useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            id
            fluid (quality: 100) {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
        }
      }
    }
`);
};


const Images = ({ path }) => {
  const data = getAllImages();
  const paths = path.split(',');
  const res = [];
  for (let i = 0; i < paths.length; i += 1) {
    const image = data.allImageSharp.edges.find((el) => getLastStringInPath(el.node.fluid.src) === paths[i]);
    if (image) {
      res.push(image.node.fluid);
    }
  }
  if (res.length > 0) {
    // Hack-y way of dealing with small images for the time being:
    if (res[0].src.includes('nilo')) {
      return res.map((el, index) => (
        (<Img style={{ maxWidth: el.presentationWidth, marginLeft: '20%' }} fluid={el} key={index} />)
      ));
    }
    return res.map((el, index) => (
      (<Img fluid={el} key={index} />)
    ));
  }
  return null;
};

Images.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Images;
