// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Zhirui",
  middleName: "",
  lastName: "Li",
  message: "Data Science Master Student at Brown University",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/ZhiruiLi1",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/zhirui-li-231369223/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("/Users/justinli/Desktop/home/src/editable-stuff/image1.jpg"),
  imageSize: 500,
  message:
    "👋 Hi, I am Zhirui, currently pursuing a master's degree in data science at Brown University. I hold bachelor's degrees in statistics & data science and economics from the University of California, Santa Barbara (UCSB).",
  resume: require("/Users/justinli/Desktop/home/src/editable-stuff/resume.pdf"),
  education:
    <div>
      <p style={{fontSize:22, marginBottom:0}}><b>Brown University</b></p>
      <p style={{fontSize:18, marginBottom:0}}>M.S. Data Science, 4.0/4.0 GPA</p>
      <ul>
        <li>Relevant Courses:
          <ul>
            <li>Computational Probability and Statistics, Mathematics for Data Science, Deep Learning, Machine Learning, Statistical Learning, Data Engineering, Computer Vision, Blockchain and Cryptocurrency, Data Ethics</li>
            <li>Real Analysis, Measure Theory</li>
          </ul>
        </li>
      </ul>

      <p style={{fontSize:22, marginBottom:0}}><b>University of California, Santa Barbara</b></p>
      <p style={{fontSize:18, marginBottom:0}}>B.A. Economics, B.A. Statistics and Data Science, 3.87/4.0 GPA</p>
      <ul>
        <li>Awards: Dean’s Honor (2017–2021); graduated with High Honors (top 6%)</li>
        <li>Relevant Courses:
          <ul>
            <li>Linear Algebra, Multivariable Calculus, Differential Equations, Transition to Higher Math</li>
            <li>Object-oriented Programming, Data Structures and Algorithms, SAS Programming, Data Science in R</li>
            <li>Probability Theory, Mathematical Statistics, Stochastic Processes, Markov Chain, Statistical Inference, Design of Experiments, Regression Analysis, Statistical Machine Learning</li>
            <li>Microeconomic Theory, Macroeconomic Theory, Econometrics, Finance, Applied Economics, Big Data in Economics</li>
          </ul>
        </li>
      </ul>
    </div>,
};


// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]

// Selected Experiences:

const selectedExperiences = {
  show: true,
  heading: "Selected Research and Projects",
  data: [
    {
      title: 'Contrastive Learning Based Multi-modal Model for Pathology Images',
      description: 'I pioneered a multimodal model using contrastive learning to integrate pathology images from the Kather colon dataset and their associated annotations into a unified embedding space, enabling zero-shot classification, image-text, and image-image retrievals. I obtained embeddings for paired pathology images and annotations by leveraging vision and text transformers. Contrastive learning then heightened the cosine similarity scores for these pairs, allowing the model to discern the interrelation between images and texts, thereby facilitating downstream tasks.',
      image: require('/Users/justinli/Desktop/home/src/assets/img/CL.png'),
    },
    {
      title: 'Interactive Shiny App for RNA-seq Data Analysis',
      description: 'I developed an interactive Shiny app in RStudio that automatically performed batch correction, preprocessed the RNA-seq dataset, and conducted Limma-Voom for differential expression analysis. Subsequently, I converted the entire application to a Docker image, ensuring the consistency and reproducibility of our research.',
      image: require('/Users/justinli/Desktop/home/src/assets/img/Shiny.png'),
    },
    {
      title: 'Single Cell Segmentation',
      description: 'I developed a state-of-the-art convolutional neural network (CNN) in Python featuring the Gumbel-Softmax activation function, specifically for advanced single-cell segmentation. This CNN, coupled with soft Gumbel and binary cross-entropy loss, demonstrated superior performance when benchmarked against other models, highlighting its effectiveness in precise cell segmentation tasks.',
      image: require('/Users/justinli/Desktop/home/src/assets/img/Segmentation.png'),
    },
    {
      title: 'Diamond Clarity Classifier',
      description: 'We designed Convolutional Neural Networks in Python, classifying diamond images into six clarity labels. By incorporating advanced image processing techniques such as the Harris Corner Detector, we removed image backgrounds and pinpointed intersections, significantly enhancing classification accuracy.',
      image: require('/Users/justinli/Desktop/home/src/assets/img/CV.png'),
    },
    {
      title: 'Automating Data Preprocessing & Visualizations for Oceanographic Analysis',
      description: 'I engineered a comprehensive pipeline in Python that automates the preprocessing of raw buoy data into structured, analyzable datasets and seamlessly integrates automatic visualizations. This robust system adeptly compiles, visualizes, and transforms extensive oceanographic data from 2017 to 2022, converting it into the standardized NetCDF format. This approach streamlines the analysis process and enhances the efficiency of data storage and accessibility. Example visualizations are shown.',
      image: require('/Users/justinli/Desktop/home/src/assets/img/Grid.png'),
    },
    {
      title: 'Ukrainian War Sentiment Analysis + Topic Modeling',
      description: 'We developed a bidirectional LSTM model for sentiment analysis, paired with the Latent Dirichlet Allocation, to discern latent topics within English-language Tweets to the Ukrainian-Russian conflict. Our visualizations further illustrate the evolution of emotions over time. Combining both methods, we unveil how controversies can influence emotions.',
      image: require('/Users/justinli/Desktop/home/src/assets/img/poster.png'),
    },
  ],
};

const repos = {
  show: true,
  heading: "Recent Research and Projects",
  gitHubUsername: "ZhiruiLi1", //i.e."johnDoe12Gh"
  reposLength: 20,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      // img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      // img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 100 },
    { name: "TensorFlow/PyTorch", value: 100},
    { name: "SKLearn", value: 100},
    { name: "Pandas/NumPy", value: 100},
    { name: "RStudio", value: 100},
    { name: "Bioconductor", value: 80},
    { name: "Git", value: 75},
    { name: "Docker", value: 75},
    { name: "SQL", value: 70},
    { name: "SAS", value: 70},
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Please reach out to me at",
  email: "zhirui_li@brown.edu",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, selectedExperiences, repos, skills, leadership, getInTouch, experiences };
