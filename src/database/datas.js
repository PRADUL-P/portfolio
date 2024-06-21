
import web from "../assets/Web.png";
// import sattva from "../assets/stm.png";
// import iedc from "../assets/iedc.png";
import civilenggImage from "../assets/Web.png";
import webdesignImage from "../assets/stm.png";
import allImage from "../assets/projects/vblaze.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight ,faGlobe,faImage,faDesktop,faCode,faDraftingCompass,faCube,faMobileAlt} from '@fortawesome/free-solid-svg-icons';
import  p11  from "../assets/projects/p1.png";
import  p12  from "../assets/projects/p2.png";
import  p13  from "../assets/projects/p3.png";
import  p14  from "../assets/projects/p4.png";
import  H11  from "../assets/projects/h1.1.png";
import  H12  from "../assets/projects/h1.2.png";
import  H13  from "../assets/projects/h1.3.png";
import  H14  from "../assets/projects/h1.4.png";
import H21  from "../assets/projects/h2.1.png";
import  H22  from "../assets/projects/h2.2.png";
import  H31  from "../assets/projects/h3.1.png";
import  H32  from "../assets/projects/h3.2.png";
import  H23  from "../assets/projects/h3.3.png";
import  H33  from "../assets/projects/H33.png";
import  H44  from "../assets/projects/H44.png";
import  S33  from "../assets/projects/S33.png";
import  S11  from "../assets/projects/S11.png";
import  S22  from "../assets/projects/S22.png";
import  C11  from "../assets/projects/C11.png";
import  C12  from "../assets/projects/C12.png";
import  C13  from "../assets/projects/C13.png";
import  C14  from "../assets/projects/C14.png";
import  Ignite  from "../assets/projects/ignite.png";
import  Ignite2  from "../assets/projects/ignite2.png";
import  IEDC  from "../assets/projects/IEDC.png";
import  IEDC2  from "../assets/projects/IEDC2.png";
import  VBLAZE  from "../assets/projects/vblaze.png";
import  VBLAZE2  from "../assets/projects/vblaze2.png";
import  XTASY24  from "../assets/projects/XTASY24.png";
import  dasp  from "../assets/projects/dasp.png";
import  MAG  from "../assets/projects/MAG.png";
import  len  from "../assets/projects/len.png";

const skills = [
  { name: 'AutoCAD', level: 90, color: 'bg-blue-500' },
  { name: 'Autodesk Forma', level: 75, color: 'bg-blue-100' },
  { name: 'Etabs', level: 70, color: 'bg-green-500' },
  { name: 'Revit', level: 70, color: 'bg-yellow-500' },
  { name: 'Twinmotion', level: 85, color: 'bg-teal-500' },
  { name: 'Enscape', level: 70, color: '#00a89d' },
  { name: 'Microsoft Office', level: 85, color: 'bg-red-500' },
  { name: 'STAAD', level: 70, color: '#fd8c00' },
  { name: 'Project Management', level: 80, color: 'bg-purple-500' },
  { name: 'Web Development', level: 70, color: '#61dafb' },
  
];

const experiences = [
 
 
  {
    title: 'Development of Parking Policy Framework for Kerala',
    employmentType: 'Internship',
    company: 'KSCSTE National Transportation Planning and Research Centre (NATPAC)',
    location: 'Thalassery, Kerala, India',
    startDate: 'Feb 2024',
    endDate: 'Feb 2024',
    description: 'Conducted surveys for the project "Development of Parking Policy Framework for Kerala". Responsibilities included: User Opinion Survey: Designed questionnaires, collected data, and analyzed feedback from local residents and commuters to understand their perspectives and preferences regarding parking facilities in Thalassery. Land Use Survey: Gathered data regarding land ownership and other relevant details from landowners to comprehensively analyze land use patterns, identifying potential sites for parking infrastructure development and evaluating existing land use regulations. Parking In and Out Survey: Implemented on-site data collection methods to observe parking behavior, including vehicle entry and exit patterns, duration of parking, and utilization rates, providing valuable insights into the current parking situation.',
    skills: ['Analytical Skills'],
    media: '',
  },
  {
    title: 'Xposure-23 Training Program',
    employmentType: 'Internship',
    company: 'S&R Consultants',
    location: 'Kerala, India',
    startDate: 'Oct 2022',
    endDate: 'Nov 2023',
    description: 'Participated in the Xposure-23 training program at S&R Consultants, acquiring a diverse skill set in structural design and project management. Key achievements and skills gained include: Proficiency in preparing beam-column layouts and modeling and analyzing structures using ETABS. Competence in real project estimation using Estimax Pro, ensuring precise cost assessments and effective budgeting. Expertise in preparing Bar Bending Schedules using Aadspro, facilitating streamlined construction planning and execution. Practice in optimizing rebar consumption at construction sites through the use of Optimax, aiming to minimize wastage while ensuring structural integrity. These acquired skills collectively enable me to contribute effectively to the success of construction projects by ensuring sound design, cost efficiency, and optimal resource utilization.',
    skills: ['ETABS', 'Estimation', 'Project Management', 'AutoCAD', 'Bar Bending Schedules', 'Structural Design'],
    media: '',
  },
  {
    title: 'Construction of Regulator Cum Bridge across Ummenchira River at Chekkupalam',
    employmentType: 'Internship',
    company: 'Kerala Irrigation Infrastructure Development Corporation Limited',
    location: 'Kannur, Kerala, India',
    startDate: 'May 2023',
    endDate: 'May 2023',
    description: 'Successfully completed a 5-day internship training program with Kerala Irrigation Infrastructure Development Corporation Limited, a Government of Kerala Undertaking. Key details include: Project: Contributed to the project "Construction of Regulator Cum Bridge across Ummenchira River at Chekkupalam in Pinarayi grama Panchayath in Kannur District." Responsibilities: Actively participated in various projects, applying academic knowledge to real-world scenarios. Developed practical skills in construction techniques, quality control, and project coordination. Collaboration: Worked collaboratively with a diverse team of professionals, enhancing communication and teamwork abilities. Skill Development: Overcame challenges and navigated unexpected obstacles, honing problem-solving and adaptability skills. Professional Development: Enhanced understanding of professional ethics, safety protocols, and industry standards.',
    skills: ['Civil Engineering Design', 'Analytical Skills'],
    media: '',
  },
  {
    title: 'Traffic Data Collection',
    employmentType: 'Internship',
    company: 'KSCSTE-NATPAC',
    location: 'Kerala, India',
    startDate: 'Sep 2022',
    endDate: 'Sep 2022',
    description: 'Completed a five-day internship focusing on traffic data collection as part of the "Development Plan for the selected roads leading to Muzhappilangad Beach in Kannur district." Key details include: Task: Undertook the responsibility of collecting traffic data by conducting surveys on selected roads. Project Involvement: Contributed to the larger goal of conducting Traffic Surveys and Data Compilation to support the development plan. Data Analysis: Compiled crucial information such as traffic volume, vehicle types, peak hours, and other relevant data essential for the development plan.',
    skills: ['Traffic Data Collection', 'Analytical Skills'],
    media: '',
  },
  {
    title: 'Project Head',
    employmentType: 'Part-time',
    company: 'VBLAZE',
    location: '',
    startDate: 'Jan 2023',
    endDate: 'Jun 2024',
    description: '',
    skills: ['Tailwind CSS', 'React.js', 'Problem Solving', 'Leadership'],
    media: null,
  },
];

const education = [
  {
    degree: 'Bachelor of Technology - BTech',
    fieldOfStudy: 'Civil Engineering',
    institution: 'St. Thomas College of Engineering & Technology, Sivapuram, Kannur',
    startDate: '2020',
    endDate: '2024',
    grade: "",
    activitiesAndSocieties: 'Placement cell - Coordinator. NSS 512 - Volunteer. Tech Fest - Coordinator. VBLAZE - Developer.',
    description: '-',
    skills: [],
    media: "",
  },
  {
    degree: 'Higher Secondary',
    fieldOfStudy: 'Science',
    institution: 'Anjarakandy Higher Secondary School',
    startDate: 'Jun 2018',
    endDate: 'Mar 2020',
    grade: '',
    activitiesAndSocieties: 'NSS Volunteer',
    description: '-',
    skills: [],
    media:"",
  },
];
const Fday = [
  {
    title: "Development of Parking Policy Framework for Kerala",
    position: "KSCSTE National Transportation Planning and Research Centre (NATPAC)",
    icon:civilenggImage,
    //  fee: "fui",
    iconBg: "#383E56",
    years: "Feb 2024",
    points: [
      // {
      //   header: "",
      //   paragraph: "",
      //   date: "",
      // },
      {
        header: "",
        paragraph: "Conducted surveys for the project Development of Parking Policy Framework for Kerala. Responsibilities included: User Opinion Survey: Designed questionnaires, collected data, and analyzed feedback from local residents and commuters to understand their perspectives and preferences regarding parking facilities in Thalassery. Land Use Survey: Gathered data regarding land ownership and other relevant details from landowners to comprehensively analyze land use patterns, identifying potential sites for parking infrastructure development and evaluating existing land use regulations. Parking In and Out Survey: Implemented on-site data collection methods to observe parking behavior, including vehicle entry and exit patterns, duration of parking, and utilization rates, providing valuable insights into the current parking situation.",
        date: "",
       },
       
    ],
   
    
  },{
    title: "VBLAZE",
    position: "project head",
    icon:civilenggImage,
    //  fee: "fui",
    iconBg: "#383E56",
    years: "JUN 2022 TO PRESENT",
    
   
    points: [
      {
        header: "Project Head",
        paragraph: "",
        date: "january 2023 - Present",
      },
      {
        header: "Frontend Developer",
        paragraph: "",
        date: "June 2022 - Present",
       },
      

    ],
  },
  {
    title: "Construction of Regulator Cum Bridge across Ummenchira River at Chekkupalam",
    position: "Kerala Irrigation Infrastructure Development Corporation Limited",
    icon:civilenggImage,
    //  fee: "fui",
    iconBg: "#383E56",
    years: "MAY 2023 - 5 DAYS",
    
   
    points: [
      // {
      //   header: "",
      //   paragraph: "",
      //   date: "",
      // },
      {
        header: "",
        paragraph: "During my internship at KIIDC, I gained valuable hands-on experience in civil engineering and project management. I actively participated in various projects, applying my academic knowledge to real-world scenarios and developing practical skills in construction techniques, quality control, and project coordination. I collaborated with a diverse team of professionals, strengthening my communication and teamwork abilities. Through overcoming challenges and navigating unexpected obstacles, I honed my problem-solving and adaptability skills. This internship enhanced my understanding of professional ethics, safety protocols, and industry standards. Overall, my internship at KIIDC has been a rewarding experience that has equipped me with the necessary skills and knowledge to thrive as a civil engineer.",
        date: "",
       },],
      },
  
      {
        title: "Xposure-23 Training Program",
        position: "S&R Consultants",
        icon:civilenggImage,
        //  fee: "fui",
        iconBg: "#383E56",
        years: "OCT 2022 - NOV 2023",
        
       
        points: [
          // {
          //   header: "",
          //   paragraph: "",
          //   date: "",
          // },
          {
            header: "",
            paragraph: "Participated in the Xposure-23 training program at S&R Consultants, acquiring a diverse skill set in structural design and project management. Key achievements and skills gained include: Proficiency in preparing beam-column layouts and modeling and analyzing structures using ETABS. Competence in real project estimation using Estimax Pro, ensuring precise cost assessments and effective budgeting. Expertise in preparing Bar Bending Schedules using Aadspro, facilitating streamlined construction planning and execution. Practice in optimizing rebar consumption at construction sites through the use of Optimax, aiming to minimize wastage while ensuring structural integrity. These acquired skills collectively enable me to contribute effectively to the success of construction projects by ensuring sound design, cost efficiency, and optimal resource utilization.",
            date: "",
           },
           
        ],
      },    {
    title: "Traffic survey",
    position: "KSCSTE-NATPAC internship",
    icon:civilenggImage,
    //  fee: "fui",
    iconBg: "#383E56",
    years: "SEPT 2022 - 5 DAYS",
    
   
    points: [
      // {
      //   header: "",
      //   paragraph: "",
      //   date: "",
      // },
      {
        header: "",
        paragraph: "I have recently completed a five-day internship from 4 September 2022 to 8 September 2022, where I had the opportunity to undertake a task related to traffic data collection. The task was part of the Development Plan for the selected roads leading to Muzhappilangad Beach In Kannur district carrying out Traffic Surveys and Data Compilation.I was responsible for collecting traffic data by conducting surveys on the selected roads.The report included crucial information such as traffic volume, vehicle types, peak hours, and other relevant data that would aid in the development plan.Overall, the internship was an excellent learning experience that allowed me to gain valuable skills and knowledge in traffic data collection and analysis. I look forward to utilizing this experience in my future endeavors",
        date: "",
       },
       
    ],
  },
 

 
 
];
const Sday = [
  {
    title: "BTECH in Civil Engineering",
    college: "St Thomas Engineering College, Sivapuram, Mattannur",
    //  fee: "YEAR",
    iconBg: "#383E56",
    icon:civilenggImage,
    date: "2020 - 2024",
    points: ["Placement cell - Coordinator.","  NSS 512 - Volunteer."," Tech Fest - Coordinator.","  VBLAZE - Developer."
     ],
  },
  {
    title: "Plus Two",
    college: "anjarakandy higher secondary school",
    //  fee: "",
    iconBg: "#383E56",
    icon:civilenggImage,
    date: "2018-2020",
    points: [
      "Completed high secondary education with a focus on science and mathematics."
          ],
  },
  // {
  //   title: "NAME",
  //   position: ".....",
  //    fee: "YEAR",
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //   ],
  // },{
  //   title: "NAME",
  //   position: ".....",
  //    fee: "YEAR",
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      
  //   ],
  // },
 
];

// const projects = [
//   {
//     name: "web",
//     image: web,
//     source_code_link: "#",
//   },
//   {
//     name: "web2",
//     image: web,
//     source_code_link: "#",
//   }, {
//     name: "web4",
//     image: web,
//     source_code_link: "#",
//   }, {
//     name: "web3",
//     image: web,
//     source_code_link: "#",
//   }, {
//     name: "web3",
//     image: web,
//     source_code_link: "#",
//   },
// ];

const contact = [
  {
    title: "name",
    role:"coodinator",
    contact:"8078376902",
    whatsapp:"8078376902",
  },
  // {
  //   title: "name",
  //   role:"coodinator",
  //   contact:"8078376902",
  //   whatsapp:"8078376902",
  // },{
  //   title: "name",
  //   role:"coodinator",
  //   contact:"8078376902",
  //   whatsapp:"8078376902",
  // },{
  //   title: "name",
  //   role:"coodinator",
  //   contact:"8078376902",
  //   whatsapp:"8078376902",
  // },
];

const services = [
  {
      id: 1,
      title: 'Web Design',
      description: 'We design beautiful and responsive websites tailored to your business needs.',
      amount: '₹8000',
      projects: '6+',
      icon: faDesktop
    },
    {
      id: 2,
      title: 'Web Development',
      description: 'We develop and maintain robust web applications using cutting-edge technologies.',
      amount: '₹15000',
      projects: '10+',
      icon: faGlobe
    },
    {
      id: 3,
      title: '2D Drafting',
      description: 'We create accurate 2D drawings and blueprints for engineering and construction projects.',
      amount: '₹5000',
      projects: '3+',
      icon: faDraftingCompass
    },
    {
      id: 4,
      title: '3D Modeling',
      description: 'We produce high-quality 3D models and animations for architecture, product design, and more.',
      amount: '₹10000',
      projects: '7+',
      icon: faCube
    },
    {
      id: 5,
      title: 'UI/UX Design',
      description: 'We design intuitive and engaging user interfaces for web and mobile applications.',
      amount: '₹2500',
      projects: '4+',
      icon: faMobileAlt
    },
    {
      id: 6,
      title: 'Video/Photo Editing',
      description: 'We edit and enhance videos and photos to create stunning visual content for your business.',
      amount: '₹1500',
      projects: '2+',
      icon: faImage
    }
];

const projects = [
  { id: 1, 
    title: "ENERGY EFFICIENT COLLEGE BUILDING: INTEGRATING PLANNING, ANALYSIS, DESIGN, ENERGY OPTIMIZATION, AND ESTIMATION",
    link: 'https://www.youtube.com/playlist?list=PLBip7ccT-VcvewoYcRrg2QGc7Ix3mKT8O&si=gWanI52x1pVKkim3', 
     category: "civilengg",
     image: p12,
    description:
      "This project focused on designing an energy-efficient educational building using advanced BIM software tools. The comprehensive approach included various stages such as site assessment, planning, analysis, design, energy optimization, estimation, and 3D visualization. Following the National Building Code, Kerala Municipal Building Rule, and relevant IS codes, a G+2 educational institution was successfully proposed at the college premises, demonstrating significant energy savings and contributing to sustainability in the educational sector.",
      images: [
        p11,p13,p14,p12,
       
      ],
    },
    { id: 2, 
      title: " XTASY 2K24",
      link: 'https://pradul-p.github.io/XTASY-2K24/', 
       category: "webdesign",
       image: XTASY24,
      description:
        "XTASY 2K24, the official website of our college's highly anticipated arts fest, is a meticulously designed platform that aims to showcase and promote the exciting events and activities of the festival",
        hostedPage:"https://pradul-p.github.io/XTASY-2K24/", images: [
          XTASY24,
         
        ],
      },
      { id: 3, 
        title: " project-DASP",
        link: 'https://project-dasp.github.io/', 
         category: "webdesign",
         image: dasp,
        description:
          "project-DASP, the official website for our btech final year project ",
          hostedPage:"https://github.com/PRADUL-P/dasp", images: [
            dasp,
           
          ],
        },
        { id: 4, 
          title: "ENGINEXUS",
          link: 'https://enginexus.github.io/EngiNexus-24/', 
           category: "webdesign",
           image: MAG,
          description:
            "CIVIL MAGAZINE",
            hostedPage:"https://github.com/EngiNexus/EngiNexus-24", images: [
              MAG,
             
            ],
          },
      { id: 5, 
        title: "A VISIONARY SMART CITY",
        link: 'https://youtu.be/WiaV3NmNlXg', 
         category: "civilengg",
         image: S11,
        description:
          "This project focused on designing an SMARTCITY using advanced BIM software tools..",
          images: [
            S11,S22,S33,
           
          ],
        },

      { id: 6, 
        title: "COMMERCIAL BUILDING",
        link: 'https://youtu.be/l7f6IUEXNOE', 
         category: "civilengg",
         image: C12,
        description:
          "This project focused on designing an COMMERCIAL BUILDING using advanced BIM software tools..",
          images: [
            C11,C13,C14,
           
          ],
        },
        
        { id: 7, 
          title: "LENS-AND-LEAVES",
          link: 'https://pradul-p.github.io/LENS-AND-LEAVES/', 
           category: "webdesign",
           image: len,
          description:
            "Website for natural club programme",
            hostedPage:"https://github.com/PRADUL-P/LENS-AND-LEAVES", images: [
              len,
             
            ],
          },
    { id: 8, title: "HOME 3",
    link: 'https://youtube.com/playlist?list=PLBip7ccT-Vcvj8sn_rWNx6dMwNR3TSOfP&si=yc_QoekA1nZP33CZ',
      category: "civilengg",image: H33,
      description:
        "A Revit 3D house design project would involve using Autodesk Revit software to create a detailed, accurate, and interactive 3D model of a house. The project would begin with creating a conceptual design and developing the model using Revit's parametric tools, which allow for easy modification and updating of the design. The 3D model would be used to create detailed drawings, plans, elevations, and sections, as well as schedules and quantities, which can be used for construction documentation and cost estimates.This would also use Revit's built-in visualization and rendering tools,and enscape plugin to create realistic images and animations of the design, which would be useful for presentations and visualizing the design in context.",
        images: [
         H22,H33,H44,H21
        ], },
  { id: 9, 
    title: "HOME 2",
    link: 'https://youtu.be/VJ9p4Nlsb8A', 
     category: "civilengg",
     image: H11,
    description:
      "A Revit 3D house design project would involve using Autodesk Revit software to create a detailed, accurate, and interactive 3D model of a house. The project would begin with creating a conceptual design and developing the model using Revit's parametric tools, which allow for easy modification and updating of the design. The 3D model would be used to create detailed drawings, plans, elevations, and sections, as well as schedules and quantities, which can be used for construction documentation and cost estimates.This would also use Revit's built-in visualization and rendering tools,and enscape plugin to create realistic images and animations of the design, which would be useful for presentations and visualizing the design in context.",
      images: [
        H12,H13,H14,
       
      ],
    },
  { id: 10, title: "ignite2k22",link: 'https://www.stthomaskannur.ac.in/ignite2022/',  category: "webdesign",image: Ignite,
    description:
      "An Ignite website for college sports events, designed in association with the V Blaze team, would be a platform created to promote and highlight upcoming sports events at the college. The website would be a collaborative effort between the college's athletic department and the V Blaze team, with the goal of providing a comprehensive and engaging resource for students of the college's sports teams to stay informed and up-to-date on upcoming events.The V Blaze team, with their expertise in website design and development, would work closely with the college's athletic department to create a visually appealing, user-friendly, and functional website that promotes the college's sports events. The website would feature information about the upcoming events, such as game schedules, team information, and location of the event.",
      hostedPage:"https://www.stthomaskannur.ac.in/ignite2022/",images: [
        Ignite2,
       
      ],},
 
  { id: 11, title: "IEDC",link: 'https://www.stthomaskannur.ac.in/stm2/IEDC/',  category: "webdesign",image: IEDC,
    description:
      "An IEDC website for a college, designed in association with the V Blaze team, would be a platform created to promote economic development opportunities for students and alumni of the college. The website would be a collaborative effort between the college's IEDC and the V Blaze team, with the goal of providing a comprehensive and easy-to-use resource for students and alumni looking for internships, job opportunities, and other resources to help them start or grow their careers.The V Blaze team, with their expertise in website design and development, would work closely with the college's IEDC to create a visually appealing, user-friendly, and functional website that meets the needs of the college's students.",
      hostedPage:"https://www.stthomaskannur.ac.in/stm2/IEDC/",images: [
       IEDC2
      ],},
  { id: 12, title: "HOME 1",link: 'https://youtu.be/z5poRqL2FG0',  category: "civilengg" ,image: H31,
    description:
    "A Revit 3D house design project would involve using Autodesk Revit software to create a detailed, accurate, and interactive 3D model of a house. The project would begin with creating a conceptual design and developing the model using Revit's parametric tools, which allow for easy modification and updating of the design. The 3D model would be used to create detailed drawings, plans, elevations, and sections, as well as schedules and quantities, which can be used for construction documentation and cost estimates.This would also use Revit's built-in visualization and rendering tools,and enscape plugin to create realistic images and animations of the design, which would be useful for presentations and visualizing the design in context.",
    images: [
      H32,H23
    ], },
  { id: 13, title: "VBLAZE",link: 'https://vblaze.tech/',  category: "webdesign" ,image: VBLAZE,
    description:
      "The V Blaze website, designed and developed entirely using React JS, serves as a platform to showcase the design club's portfolio and provide students of St. Thomas College of Engineering and Technology, Kannur with an opportunity to learn more about the design industry. The website has been created in collaboration with the college's design club and aims to promote economic development opportunities for students .The V Blaze team, with their expertise in website design and development, has ensured that the website is visually appealing, user-friendly, and functional. The website provides a comprehensive and easy-to-use resource for students",
      images: [
        VBLAZE2
      ],},
  // { id: 7, title: "ENERGY EFFICIENT COLLEGE BUILDING: INTEGRATING PLANNING, ANALYSIS, DESIGN, ENERGY OPTIMIZATION, AND ESTIMATION",link: 'https://project2.com',  category: "all" ,image: allImage,
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat faucibus quam vitae congue. Pellentesque auctor, massa sit amet scelerisque mattis, nunc dui porta nulla, in tincidunt metus urna vel risus.",
  //  },
  // { id: 8, title: "Project 8",link: 'https://project2.com',  category: "all",image: civilenggImage,
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat faucibus quam vitae congue. Pellentesque auctor, massa sit amet scelerisque mattis, nunc dui porta nulla, in tincidunt metus urna vel risus.",
  //   },
  // { id: 9, title: "Project 9",link: 'https://project2.com',  category: "all" ,image: civilenggImage,
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat faucibus quam vitae congue. Pellentesque auctor, massa sit amet scelerisque mattis, nunc dui porta nulla, in tincidunt metus urna vel risus.",
  //  },
];

export {experiences,education,skills,Fday,Sday, projects,contact,services };
