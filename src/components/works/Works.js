/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import Portfolio from '../../assets/recentprojects/react-portfolio.png';
import Veritru from '../../assets/recentprojects/veritru.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'Context Based Search - Enterprise Solution', 
      description: [
        "Developed an advanced Question Answering tool using open-source LLM Llama2, resulting in a 30% reduction in information retrieval time for employees.",
        "Used techniques like in-context learning to fit the organization's specific context, enhancing data precision by 25% in official document searches.",
        "Collaborated with cross-functional teams to identify key data extraction requirements, improving user satisfaction by 40%."
      ],
      alter: 'Context Based Search',
      image: `${Portfolio}`, // You'll need to import this image
    },
    { 
      id: 2,
      title: 'ColBERT - Customized BERT Algorithm', 
      description: [
        "Collaborated with Stanford AI Labs (SAIL) enhancing information retrieval accuracy by 40% for medical datasets for clients.",
        "Used text classification models to clean and extract medical texts from over 1 TB of passage data from the MS MARCO Dataset.",
        "Implemented the ColBERT algorithm using Python into a Question Answering Prototype, improving and reducing response times by 30%."
      ],
      alter: 'ColBERT Project',
      image: `${Portfolio}`, // You'll need to import this image
    },
    { 
      id: 3,
      title: 'SpyGlass - Johnson & Johnson', 
      description: [
        "Developed a Python-based NLP solution, reducing unauthorized information release incidents by 40%.",
        "Engineered a robust data pipeline with AWS Sagemaker and Comprehend Medical, enhancing data processing speed by 30%.",
        "Implemented medical entity recognition techniques that improved data extraction accuracy resulting in more reliable clinical trial data management.",
        "Designed a real-time analytics dashboard using AWS Quicksight, enabling stakeholders to access critical insights instantly."
      ],
      alter: 'SpyGlass Project',
      image: `${Portfolio}`, // You'll need to import this image
    },
    { 
      id: 4,
      title: 'Insurance Claims Adjudication', 
      description: [
        "Implemented Entity recognition to extract CPT codes, increasing data extraction accuracy by 35% in insurance claim forms.",
        "Automated the code and cost matching, reducing manual verification time by 50%.",
        "Utilized PySpark to process and index large datasets efficiently, reducing the adjudication processing time."
      ],
      alter: 'Insurance Claims Project',
      image: `${Portfolio}`, // You'll need to import this image
    },
    { 
      id: 5,
      title: 'Project Vnet - No-Code ML Pipeline', 
      description: [
        "Setup pipelines for a dynamic ML development platform allowing users to deploy models 20% faster than traditional methods.",
        "Developed modules for model training & testing using frameworks like Scikit-Learn, Keras, and PyTorch, reducing setup times by 50%.",
        "Implemented PCA and components of data transformation modules, enabling users to preprocess the data.",
        "Integrated data visualizations module using Plotly enhancing user experience and enabling data-driven decisions."
      ],
      alter: 'Project Vnet',
      image: `${Portfolio}`, // You'll need to import this image
    }
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
              {project.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
