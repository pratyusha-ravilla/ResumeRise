//main code
// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { getUserProfile } from "../../api/UserApi";
// import { getAllResumes } from "../../api/resumeApi";
// import { getToken } from "../../utils/auth";
// // import logo from '../../images/logo15.png';

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [userProfile, setUserProfile] = useState(null);
//   const [resumes, setResumes] = useState([]);

//   useEffect(() => {
//     console.log("Checking token...");
//     const token = getToken();

//     if (!token) {
//       console.log("Token not found, redirecting to login...");
//       navigate("/login");
//       return;
//     }

//     const fetchData = async () => {
//       try {
//         console.log("Fetching user profile...");
//         const profile = await getUserProfile();
//         console.log("User profile fetched:", profile);
//         setUserProfile(profile.data.user);

//         console.log("Fetching resumes...");
//         const resumeList = await getAllResumes();
//         console.log("Resumes fetched:", resumeList);
//         setResumes(resumeList.data); // Access the data property of the response
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         navigate("/login");
//       }
//     };

//     fetchData();
//   }, [navigate]);

//   console.log("Resumes state:", resumes); // Log resumes state here

//   return (
//     <div className="container mx-auto px-4 py-8">
//       {/* Logo Section */}
//       <div className="text-center mb-8">
//         {/* <img src={logo} alt="Resume Rise" className="w-40" /> */}
//       </div>

//       {/* User Resumes Section */}
//       <div className="mb-20">
//         <Link to="/resumes" className="text-2xl font-semibold mb-4">
//           Your Resumes
//         </Link>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
//           {resumes.map((resume) => (
//             <div key={resume._id} className="mt-4 bg-white rounded-lg shadow-md p-4">
//               <h3 className="text-lg font-semibold mb-2">{resume.title}</h3>
//               <p className="text-gray-700">{resume.summary}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* User Context and Suggestions */}
//       <div>
//         <h2 className="text-2xl font-semibold mb-4">Your Profile Context</h2>
//         {userProfile && (
//           <div className="mb-12">
//             <p className="text-gray-800">
//               Welcome, {userProfile.username}! We're here to help you create
//               impressive resumes. Whether you're starting from scratch or
//               updating an existing one, Resume Rise has got you covered.
//             </p>
//           </div>
//         )}

//         {/* Suggestions Section */}
//         <div>
//           <h3 className="text-xl font-semibold mb-5">
//             Suggestions to Get Started:
//           </h3>
//           <ul className="list-disc list-inside text-gray-800 mb-10">
//             <li>Create a new resume tailored to your latest achievements.</li>
//             <li>Highlight your key skills and experiences.</li>
//             <li>Add a professional summary that stands out.</li>
//             <li>Upload a professional photo to enhance your resume.</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// ////good
// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { getUserProfile } from "../../api/UserApi";
// import { getAllResumes } from "../../api/resumeApi";
// import { getToken } from "../../utils/auth";
// import {
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   IconButton,
// } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import {
//   DescriptionOutlined as DescriptionIcon,
//   PersonOutlined as PersonIcon,
//   PhotoOutlined as PhotoIcon,
//   HighlightOutlined as HighlightIcon,
//   AddCircleOutline as AddCircleIcon,
// } from "@mui/icons-material";
// import { Create } from "@mui/icons-material";
// import { Button } from "@mui/material";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBriefcase, faArrowRight } from "@fortawesome/free-solid-svg-icons";

// const useStyles = makeStyles((theme) => ({
//   container: {
//     marginTop: theme.spacing(8),
//     marginBottom: theme.spacing(8),
//   },
//   card: {
//     backgroundColor: "#ccccff",
//     borderRadius: theme.spacing(3),
//     boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//     padding: theme.spacing(1),
//     transition: "0.3s",
//     "&:hover": {
//       transform: "scale(1.03)",
//     },
//   },
//   link: {
//     textDecoration: "none",
//     // color: theme.palette.primary.main,
//     color: "Purple",
//   },
//   icon: {
//     marginRight: theme.spacing(1),
//     color: "purple",
//     fontSize: "35px",
//   },
// }));

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const classes = useStyles();
//   const [userProfile, setUserProfile] = useState(null);
//   const [resumes, setResumes] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = getToken();
//         if (!token) {
//           navigate("/login");
//           return;
//         }

//         const profile = await getUserProfile();
//         setUserProfile(profile.data.user);

//         const resumeList = await getAllResumes();
//         setResumes(resumeList.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         navigate("/login");
//       }
//     };

//     fetchData();
//   }, [navigate]);

//   return (
//     <Container maxWidth="xl" className={classes.container}>
//       <Typography variant="h3" align="center" gutterBottom>
//         Welcome back, {userProfile && userProfile.username}!
//       </Typography>
//       <Typography variant="h4" align="center" gutterBottom>
//         <IconButton className={classes.icon}>{/* <PersonIcon /> */}</IconButton>
//         Your Resumes
//       </Typography>
//       <Grid container spacing={5} justifyContent="space-around">
//         {resumes.map((resume) => (
//           <Grid item xs={10} sm={6} md={7} key={resume._id}>
//             <Card className={classes.card}>
//               <CardContent>
//                 <Typography variant="h5" gutterBottom>
//                   <DescriptionIcon className={classes.icon} />
//                   {resume.title}
//                 </Typography>
//                 <Typography variant="body1" color="textSecondary">
//                   {resume.summary}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//       <Container maxWidth="md" className={classes.container}>
//         <Typography variant="h4" gutterBottom>
//           <IconButton className={classes.icon}>
//             <PersonIcon />
//           </IconButton>
//           Your Profile Context
//         </Typography>
//         <Typography variant="body1" color="textSecondary">
//           Welcome, {userProfile && userProfile.username}! We're here to help you
//           create impressive resumes. Whether you're starting from scratch or
//           updating an existing one, Resume Rise has got you covered.
//         </Typography>
//       </Container>
//       <Container maxWidth="md">
//         <Typography variant="h4" gutterBottom>
//           <IconButton className={classes.icon}>
//             <HighlightIcon />
//           </IconButton>
//           Suggestions to Get Started:
//         </Typography>
//         <ul>
//           <li>
//             <IconButton className={classes.icon}>
//               <AddCircleIcon />
//             </IconButton>
//             Create a new resume tailored to your latest achievements.
//           </li>
//           <li>
//             <IconButton className={classes.icon}>
//               <HighlightIcon />
//             </IconButton>
//             Highlight your key skills and experiences.
//           </li>
//           <li>
//             <IconButton className={classes.icon}>
//               <PhotoIcon />
//             </IconButton>
//             Add a professional summary that stands out.
//           </li>
//           <li>
//             <IconButton className={classes.icon}>
//               <DescriptionIcon />
//             </IconButton>
//             Upload a professional photo to enhance your resume.
//           </li>
//         </ul>
//       </Container>
//       <Container maxWidth="md" className="my-8">
//         <Link to="/resumes" className="flex items-center text-blue-500">
//           View All Resumes
//           <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-lg" />
//         </Link>
//       </Container>
//       {/* Floating Action Button */}
//       <Link to="/resumes/create" style={{ textDecoration: "none" }}>
//         <Button
//           variant="contained"
//           color="primary"
//           startIcon={<Create />}
//           style={{
//             position: "fixed",
//             bottom: "25px",
//             right: "25px",
//             color: "#ffe1ff",
//             padding: "10px",
//             backgroundColor: "#836fff",
//             borderRadius: "15px",
//           }}
//         >
//           Create Resume
//         </Button>
//       </Link>
//     </Container>
//   );
// };
// export default Dashboard;




// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { getUserProfile } from "../../api/UserApi";
// import { getAllResumes } from "../../api/resumeApi";
// import { getToken } from "../../utils/auth";
// import {
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   IconButton,
// } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import {
//   DescriptionOutlined as DescriptionIcon,
//   PersonOutlined as PersonIcon,
//   PhotoOutlined as PhotoIcon,
//   HighlightOutlined as HighlightIcon,
//   AddCircleOutline as AddCircleIcon,
// } from "@mui/icons-material";
// import { Create } from "@mui/icons-material";
// import { Button } from "@mui/material";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBriefcase, faArrowRight } from "@fortawesome/free-solid-svg-icons";

// const useStyles = makeStyles((theme) => ({
//   container: {
//     marginTop: theme.spacing(8),
//     marginBottom: theme.spacing(8),
//   },
//   card: {
//     backgroundColor: "#ccccff",
//     borderRadius: theme.spacing(3),
//     boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//     padding: theme.spacing(1),
//     transition: "0.3s",
//     "&:hover": {
//       transform: "scale(1.03)",
//     },
//   },
//   link: {
//     textDecoration: "none",
//     // color: theme.palette.primary.main,
//     color: "Purple",
//   },
//   icon: {
//     marginRight: theme.spacing(1),
//     color: "purple",
//     fontSize: "35px",
//   },
// }));

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const classes = useStyles();
//   const [userProfile, setUserProfile] = useState(null);
//   const [resumes, setResumes] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = getToken();
//         if (!token) {
//           navigate("/login");
//           return;
//         }

//         const profile = await getUserProfile();
//         setUserProfile(profile.data.user);

//         const resumeList = await getAllResumes();
//         setResumes(resumeList.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         navigate("/login");
//       }
//     };

//     fetchData();
//   }, [navigate]);

//   // Slice the resumes array to display only 2 to 4 resumes
//   const displayedResumes = resumes.slice(0, 4);

//   return (
//     <Container maxWidth="xl" className={classes.container}>
//       <Typography variant="h3" align="center" gutterBottom>
//         Welcome back, {userProfile && userProfile.username}!
//       </Typography>
//       <Typography variant="h4" align="center" gutterBottom>
//         <IconButton className={classes.icon}>{/* <PersonIcon /> */}</IconButton>
//         Your Resumes
//       </Typography>
//       <Grid container spacing={5} justifyContent="space-around">
//         {displayedResumes.map((resume) => (
//           <Grid item xs={10} sm={6} md={7} key={resume._id}>
//             <Card className={classes.card}>
//               <CardContent>
//                 <Typography variant="h5" gutterBottom>
//                   <DescriptionIcon className={classes.icon} />
//                   {resume.title}
//                 </Typography>
//                 <Typography variant="body1" color="textSecondary">
//                   {resume.summary}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//       <Container maxWidth="lg" className={classes.container}>
//         <Typography variant="h4" gutterBottom>
//           <IconButton className={classes.icon}>
//             <PersonIcon />
//           </IconButton>
//           Your Profile Context
//         </Typography>
//         <Typography variant="body1" color="textSecondary">
//           Welcome, {userProfile && userProfile.username}! We're here to help you
//           create impressive resumes. Whether you're starting from scratch or
//           updating an existing one, Resume Rise has got you covered.
//         </Typography>
//       </Container>
//       <Container maxWidth="lg">
//         <Typography variant="h4" gutterBottom>
//           <IconButton className={classes.icon}>
//             <HighlightIcon />
//           </IconButton>
//           Suggestions to Get Started:
//         </Typography>
//         <ul>
//           <li>
//             <IconButton className={classes.icon}>
//               <AddCircleIcon />
//             </IconButton>
//             Create a new resume tailored to your latest achievements.
//           </li>
//           <li>
//             <IconButton className={classes.icon}>
//               <HighlightIcon />
//             </IconButton>
//             Highlight your key skills and experiences.
//           </li>
//           <li>
//             <IconButton className={classes.icon}>
//               <PhotoIcon />
//             </IconButton>
//             Add a professional summary that stands out.
//           </li>
//           <li>
//             <IconButton className={classes.icon}>
//               <DescriptionIcon />
//             </IconButton>
//             Upload a professional photo to enhance your resume.
//           </li>
//         </ul>
//       </Container>
//       <Container maxWidth="md" className="my-8">
//         <Link to="/resumes" className="flex items-center text-purple-800">
//           View All Resumes
//           <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-lg" />
//         </Link>
//       </Container>
//       {/* Floating Action Button */}
//       <Link to="/resumes/create" style={{ textDecoration: "none" }}>
//         <Button
//           variant="contained"
//           color="primary"
//           startIcon={<Create />}
//           style={{
//             position: "fixed",
//             bottom: "25px",
//             right: "25px",
//             color: "#ffe1ff",
//             padding: "10px",
//             backgroundColor: "#9b30ff",
//             borderRadius: "15px",
//           }}
//         >
//           Create Resume
//         </Button>
//       </Link>
//     </Container>
//   );
// };
// export default Dashboard;






import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUserProfile } from "../../api/UserApi";
import { getAllResumes } from "../../api/resumeApi";
import { getToken } from "../../utils/auth";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  DescriptionOutlined as DescriptionIcon,
  PersonOutlined as PersonIcon,
  PhotoOutlined as PhotoIcon,
  HighlightOutlined as HighlightIcon,
  AddCircleOutline as AddCircleIcon,
} from "@mui/icons-material";
import { Create } from "@mui/icons-material";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
  card: {
    backgroundColor: "#ccccff",
    borderRadius: theme.spacing(3),
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    padding: theme.spacing(1),
    transition: "0.3s",
    "&:hover": {
      transform: "scale(1.03)",
    },
  },
  link: {
    textDecoration: "none",
    // color: theme.palette.primary.main,
    color: "Purple",
  },
  icon: {
    marginRight: theme.spacing(1),
    color: "purple",
    fontSize: "35px",
  },
}));

const Dashboard = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [userProfile, setUserProfile] = useState(null);
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getToken();
        if (!token) {
          navigate("/login");
          return;
        }

        const profile = await getUserProfile();
        setUserProfile(profile.data.user);

        const resumeList = await getAllResumes();
        setResumes(resumeList.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        navigate("/login");
      }
    };

    fetchData();
  }, [navigate]);

  // Slice the resumes array to display only 2 to 4 resumes
  const displayedResumes = resumes.slice(0, 4);

  return (
    <Container maxWidth="xl" className={classes.container}>
      <Typography variant="h3" align="center" gutterBottom>
        Welcome back, {userProfile && userProfile.username}!
      </Typography>
      <Typography variant="h4" align="center" gutterBottom>
        <IconButton className={classes.icon}>{/* <PersonIcon /> */}
        </IconButton>
        Your Resumes
      </Typography>
      {resumes.length === 0 ? (
        <Typography variant="h6" align="center" gutterBottom>
          You don't have any existing resumes here. Create a new one!
        </Typography>
      ) : (
        <Grid container spacing={5} justifyContent="space-around">
          {displayedResumes.map((resume) => (
            <Grid item xs={10} sm={6} md={7} key={resume._id}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    <DescriptionIcon className={classes.icon} />
                    {resume.title}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {resume.summary}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      <Container maxWidth="lg" className={classes.container}>
        <Typography variant="h4" gutterBottom>
          <IconButton className={classes.icon}>
            <PersonIcon />
          </IconButton>
          Your Profile Context
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Welcome, {userProfile && userProfile.username}! We're here to help you
          create impressive resumes. Whether you're starting from scratch or
          updating an existing one, Resume Rise has got you covered.
        </Typography>
      </Container>
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom>
          <IconButton className={classes.icon}>
            <HighlightIcon />
          </IconButton>
          Suggestions to Get Started:
        </Typography>
        <ul>
          <li>
            <IconButton className={classes.icon}>
              <AddCircleIcon />
            </IconButton>
            Create a new resume tailored to your latest achievements.
          </li>
          <li>
            <IconButton className={classes.icon}>
              <HighlightIcon />
            </IconButton>
            Highlight your key skills and experiences.
          </li>
          <li>
            <IconButton className={classes.icon}>
              <PhotoIcon />
            </IconButton>
            Add a professional summary that stands out.
          </li>
          <li>
            <IconButton className={classes.icon}>
              <DescriptionIcon />
            </IconButton>
            Upload a professional photo to enhance your resume.
          </li>
        </ul>
      </Container>
      <Container maxWidth="md" className="my-8">
        <Link to="/resumes" className="flex items-center text-purple-800">
          View All Resumes
          <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-lg" />
        </Link>
      </Container>
      {/* Floating Action Button */}
      <Link to="/resumes/create" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Create />}
          style={{
            position: "fixed",
            bottom: "25px",
            right: "25px",
            color: "#ffe1ff",
            padding: "10px",
            backgroundColor: "#9b30ff",
            borderRadius: "15px",
          }}
        >
          Create Resume
        </Button>
      </Link>
    </Container>
  );
};
export default Dashboard;
