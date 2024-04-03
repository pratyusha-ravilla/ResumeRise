//src/components/Home/Home.js

// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Container,
//   Grid,
// } from "@mui/material";
// import {
//   SchoolOutlined,
//   DescriptionOutlined,
//   CheckCircleOutline,
//   DraftsOutlined,
//   ExtensionOutlined,
//   SpeedOutlined,
// } from "@mui/icons-material";

// const HomePage = () => {
//   return (
//     <div>
//       <AppBar position="static">

//         <Toolbar
//           className="bg-gradient-to-r from-indigo-500 to-purple-700"
//           style={{ position: "relative", width: "100%" }}
//         >
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             ResumeRise
//           </Typography>

//           <Button color="inherit" component={Link} to="/signup">
//             Signup
//           </Button>
//           <Button color="inherit" component={Link} to="/signup">
//             Resume
//           </Button>
//           <Button color="inherit" component={Link} to="/contact">
//             Contact
//           </Button>
//           <Button color="inherit" component={Link} to="/dashboard">
//             Dashboard
//           </Button>
//           <Button color="inherit" component={Link} to="/login">
//             Login
//           </Button>
//         </Toolbar>
//       </AppBar>
//       <div
//         style={{
//           backgroundImage: `url('https://cdn-images.zety.com/images/zety/landings/home/jumbotron-1920@2x.jpg')`,
//           backgroundSize: "1500px",
//           backgroundRepeat: "no-repeat",
//           minHeight: "60vh",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           flexDirection: "column",
//           position: "relative",
//         }}
//       >
//         <Container>

//           <Button
//             variant="contained"
//             color="primary"
//             size="large"
//             component={Link}
//             to="/signup"
//             className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:bg-indigo-600"
//             style={{
//               marginBottom: "1rem",
//               marginLeft: "27rem",
//               marginTop: "10rem",
//               width: "25%",
//               borderRadius: "7px",
//             }}
//           >
//             Try Our ResumeRise
//           </Button>
//         </Container>
//       </div>

//       <Container>
//         <Grid container spacing={3} sx={{ marginTop: "2rem" }}>
//           <Grid item xs={12}>
//             <Typography variant="h3" align="center" gutterBottom>
//               Build Your Professional Resume
//             </Typography>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <SchoolOutlined sx={{ fontSize: 80, color: "primary" }} />
//             <Typography variant="h5" align="center" gutterBottom>
//               Expert Tips
//             </Typography>
//             <Typography variant="body1" align="center">
//               Our resume builder is packed with expert tips to show you how to
//               make each part of your resume.
//             </Typography>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <DescriptionOutlined sx={{ fontSize: 80, color: "primary" }} />
//             <Typography variant="h5" align="center" gutterBottom>
//               Best Resume Templates
//             </Typography>
//             <Typography variant="body1" align="center">
//               Our templates were all designed by Certified Career Experts.
//               Select a resume template here.
//             </Typography>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <CheckCircleOutline sx={{ fontSize: 80, color: "primary" }} />
//             <Typography variant="h5" align="center" gutterBottom>
//               Resume Check
//             </Typography>
//             <Typography variant="body1" align="center">
//               Zety Resume Builder reviews and scores your resume in real-time.
//               Check how your resume performs here.
//             </Typography>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <DraftsOutlined sx={{ fontSize: 80, color: "primary" }} />
//             <Typography variant="h5" align="center" gutterBottom>
//               Cover Letter Builder
//             </Typography>
//             <Typography variant="body1" align="center">
//               Generate a cover letter using a template matching your resume.
//               Build your cover letter here.
//             </Typography>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <ExtensionOutlined sx={{ fontSize: 80, color: "primary" }} />
//             <Typography variant="h5" align="center" gutterBottom>
//               Fast and Easy Generator
//             </Typography>
//             <Typography variant="body1" align="center">
//               Drag and drop ready-made content tailored to your resume in a
//               click and enjoy a flexible text editor.
//             </Typography>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <SpeedOutlined sx={{ fontSize: 80, color: "primary" }} />
//             <Typography variant="h5" align="center" gutterBottom>
//               Hundreds of Free Samples
//             </Typography>
//             <Typography variant="body1" align="center">
//               Explore top resume examples and cover letter examples for all jobs
//               and industries to get a job in no time.
//             </Typography>
//           </Grid>
//           <Grid item xs={12}>
//             {/* <Button
//               variant="contained"
//               color="primary"
//               size="large"
//               fullWidth
//               component={Link}
//               to="/signup"
//               style={{
//                 marginBottom: "1rem",
//                 position: "relative",
//                 marginLeft: "27rem",
//                 marginTop: "4rem",
//                 bottom: "1rem",
//                 backgroundColor: "#d0417e",
//                 width: "25%",
//                 borderRadius: "10px",
//               }}
//             >
//               Get Started
//             </Button> */}

//             <Button
//               variant="contained"
//               color="primary"
//               size="large"
//               component={Link}
//               to="/signup"
//               className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:bg-indigo-600"
//               style={{
//                 marginBottom: "1rem",
//                 marginLeft: "27rem",
//                 marginTop: "10rem",
//                 width: "25%",
//                 borderRadius: "7px",
//               }}
//             >
//               Get Started
//             </Button>
//           </Grid>
//         </Grid>
//       </Container>
//     </div>
//   );
// };

// export default HomePage;

// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Container,
//   Grid,
// } from "@mui/material";
// import {
//   SchoolOutlined,
//   DescriptionOutlined,
//   CheckCircleOutline,
//   DraftsOutlined,
//   ExtensionOutlined,
//   SpeedOutlined,
// } from "@mui/icons-material";

// const HomePage = () => {
//   return (
//     <div>
//       <AppBar position="static">
//         <Toolbar
//           className="bg-gradient-to-r from-indigo-500 to-purple-700"
//           style={{ position: "relative", width: "100%" }}
//         >
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             ResumeRise
//           </Typography>
//           <Button color="inherit" component={Link} to="/signup">
//             Signup
//           </Button>
//           <Button color="inherit" component={Link} to="/signup">
//             Create Resume
//           </Button>
//           <Button color="inherit" component={Link} to="/contact">
//             Contact
//           </Button>
//           {/* <Button color="inherit" component={Link} to="/dashboard">
//             Dashboard
//           </Button> */}
//           <Button color="inherit" component={Link} to="/login">
//             Login
//           </Button>
//         </Toolbar>
//       </AppBar>
//       <div
//         style={{
//           backgroundImage: `url('https://cdn-images.zety.com/images/zety/landings/home/jumbotron-1920@2x.jpg')`,
//           backgroundSize: "1500px",
//           backgroundRepeat: "no-repeat",
//           minHeight: "60vh",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           flexDirection: "column",
//           position: "relative",
//         }}
//       >
//         <Container>
//           <Button
//             variant="contained"
//             color="primary"
//             size="large"
//             component={Link}
//             to="/signup"
//             className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:bg-indigo-600"
//             style={{
//               marginBottom: "1rem",
//               marginLeft: "27rem",
//               marginTop: "10rem",
//               width: "25%",
//               borderRadius: "7px",
//             }}
//           >
//             Try Our ResumeRise
//           </Button>
//         </Container>
//       </div>

//       <Container>
//         <Grid container spacing={3} sx={{ marginTop: "2rem" }}>
//           <Grid item xs={12}>
//             <Typography variant="h3" align="center" gutterBottom>
//               Build Your Professional Resume
//             </Typography>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <SchoolOutlined sx={{ fontSize: 80, color: "primary" }} />
//             <Typography variant="h5" align="center" gutterBottom>
//               Expert Tips
//             </Typography>
//             <Typography variant="body1" align="center">
//               Our resume builder is packed with expert tips to show you how to
//               make each part of your resume.
//             </Typography>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <DescriptionOutlined sx={{ fontSize: 80, color: "primary" }} />
//             <Typography variant="h5" align="center" gutterBottom>
//               Best Resume Templates
//             </Typography>
//             <Typography variant="body1" align="center">
//               Our templates were all designed by Certified Career Experts.
//               Select a resume template here.
//             </Typography>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <CheckCircleOutline sx={{ fontSize: 80, color: "primary" }} />
//             <Typography variant="h5" align="center" gutterBottom>
//               Resume Check
//             </Typography>
//             <Typography variant="body1" align="center">
//               Zety Resume Builder reviews and scores your resume in real-time.
//               Check how your resume performs here.
//             </Typography>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <DraftsOutlined sx={{ fontSize: 80, color: "primary" }} />
//             <Typography variant="h5" align="center" gutterBottom>
//               Cover Letter Builder
//             </Typography>
//             <Typography variant="body1" align="center">
//               Generate a cover letter using a template matching your resume.
//               Build your cover letter here.
//             </Typography>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <ExtensionOutlined sx={{ fontSize: 80, color: "primary" }} />
//             <Typography variant="h5" align="center" gutterBottom>
//               Fast and Easy Generator
//             </Typography>
//             <Typography variant="body1" align="center">
//               Drag and drop ready-made content tailored to your resume in a
//               click and enjoy a flexible text editor.
//             </Typography>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <SpeedOutlined sx={{ fontSize: 80, color: "primary" }} />
//             <Typography variant="h5" align="center" gutterBottom>
//               Hundreds of Free Samples
//             </Typography>
//             <Typography variant="body1" align="center">
//               Explore top resume examples and cover letter examples for all jobs
//               and industries to get a job in no time.
//             </Typography>
//           </Grid>
//           <Grid item xs={12}>
//             <Button
//               variant="contained"
//               color="primary"
//               size="large"
//               fullWidth
//               component={Link}
//               to="/signup"
//               className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:bg-indigo-600"
//               style={{
//                 marginBottom: "1rem",
//                 marginTop: "4rem",
//                 borderRadius: "7px",
//               }}
//             >
//               Get Started
//             </Button>
//           </Grid>
//         </Grid>
//       </Container>
//     </div>
//   );
// };

// export default HomePage;

//imp code
// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Container,
//   Grid,
// } from "@mui/material";
// import {
//   SchoolOutlined,
//   DescriptionOutlined,
//   CheckCircleOutline,
//   DraftsOutlined,
//   ExtensionOutlined,
//   SpeedOutlined,
// } from "@mui/icons-material";
// import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
// import { MdContactSupport } from "react-icons/md";
// import { MdList } from "react-icons/md";
// import { MdManageAccounts } from "react-icons/md";

// const HomePage = () => {
//   return (
//     <div>
//       <AppBar position="static">
//         <Toolbar
//           className="bg-gradient-to-r from-indigo-500 to-purple-700"
//           style={{ position: "relative", width: "100%" }}
//         >
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             <Link to="/" style={{ textDecoration: "none", color: "white" }}>
//               <SchoolOutlined
//                 style={{ marginRight: "5px", fontSize: "29px" }}
//               />
//               ResumeRise
//             </Link>
//           </Typography>
//           <Button color="inherit" component={Link} to="/signup">
//             <FaUserPlus style={{ marginRight: "5px", fontSize: "17px" }} />
//             Signup
//           </Button>
//           <Button color="inherit" component={Link} to="/signup">
//             <MdList style={{ marginRight: "5px", fontSize: "20px" }} />
//             Resume
//           </Button>
//           <Button color="inherit" component={Link} to="/contact">
//             <MdContactSupport
//               style={{ marginRight: "5px", fontSize: "17px" }}
//             />
//             Contact
//           </Button>
//           {/* <Button color="inherit" component={Link} to="/dashboard">
//             <MdManageAccounts
//               style={{ marginRight: "5px", fontSize: "20px" }}
//             />
//             Account
//           </Button> */}
//           <Button color="inherit" component={Link} to="/login">
//             <FaSignInAlt style={{ marginRight: "5px", fontSize: "17px" }} />
//             Login
//           </Button>
//         </Toolbar>
//       </AppBar>
//       <div
//         style={{
//           backgroundImage: `url('https://cdn-images.zety.com/images/zety/landings/home/jumbotron-1920@2x.jpg')`,
//           backgroundSize: "1500px",
//           backgroundRepeat: "no-repeat",
//           minHeight: "60vh",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           flexDirection: "column",
//           position: "relative",
//         }}
//       >
//         <Container>
//           <Button
//             variant="contained"
//             color="primary"
//             size="large"
//             component={Link}
//             to="/signup"
//             className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:bg-indigo-600"
//             style={{
//               marginBottom: "1rem",
//               marginLeft: "27rem",
//               marginTop: "10rem",
//               width: "25%",
//               borderRadius: "7px",
//             }}
//           >
//             Try Our ResumeRise
//           </Button>
//         </Container>
//       </div>
//       <Container>
//         <Grid container spacing={3} sx={{ marginTop: "2rem" }}>
//           <Grid item xs={12}>
//             <Typography variant="h3" align="center" gutterBottom>
//               Build Your Professional Resume
//             </Typography>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <SchoolOutlined sx={{ fontSize: 80, color: "primary" }} />
//             <Typography variant="h5" align="center" gutterBottom>
//               Expert Tips
//             </Typography>
//             <Typography variant="body1" align="center">
//               Our resume builder is packed with expert tips to show you how to
//               make each part of your resume.
//             </Typography>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <DescriptionOutlined sx={{ fontSize: 80, color: "primary" }} />
//             <Typography variant="h5" align="center" gutterBottom>
//               Best Resume Templates
//             </Typography>
//             <Typography variant="body1" align="center">
//               Our templates were all designed by Certified Career Experts.
//               Select a resume template here.
//             </Typography>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <CheckCircleOutline sx={{ fontSize: 80, color: "primary" }} />
//             <Typography variant="h5" align="center" gutterBottom>
//               Resume Check
//             </Typography>
//             <Typography variant="body1" align="center">
//               Zety Resume Builder reviews and scores your resume in real-time.
//               Check how your resume performs here.
//             </Typography>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <DraftsOutlined sx={{ fontSize: 80, color: "primary" }} />
//             <Typography variant="h5" align="center" gutterBottom>
//               Cover Letter Builder
//             </Typography>
//             <Typography variant="body1" align="center">
//               Generate a cover letter using a template matching your resume.
//               Build your cover letter here.
//             </Typography>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <ExtensionOutlined sx={{ fontSize: 80, color: "primary" }} />
//             <Typography variant="h5" align="center" gutterBottom>
//               Fast and Easy Generator
//             </Typography>
//             <Typography variant="body1" align="center">
//               Drag and drop ready-made content tailored to your resume in a
//               click and enjoy a flexible text editor.
//             </Typography>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <SpeedOutlined sx={{ fontSize: 80, color: "primary" }} />
//             <Typography variant="h5" align="center" gutterBottom>
//               Hundreds of Free Samples
//             </Typography>
//             <Typography variant="body1" align="center">
//               Explore top resume examples and cover letter examples for all jobs
//               and industries to get a job in no time.
//             </Typography>
//           </Grid>
//           <Grid item xs={12}>
//             <Button
//               variant="contained"
//               color="primary"
//               size="large"
//               component={Link}
//               to="/signup"
//               className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:bg-indigo-600"
//               style={{
//                 marginBottom: "1rem",
//                 marginLeft: "27rem",
//                 marginTop: "10rem",
//                 width: "25%",
//                 borderRadius: "7px",
//               }}
//             >
//               Get Started
//             </Button>
//           </Grid>
//         </Grid>
//       </Container>
//     </div>
//   );
// };

// export default HomePage;



import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
} from "@mui/material";
import {
  SchoolOutlined,
  DescriptionOutlined,
  CheckCircleOutline,
  DraftsOutlined,
  ExtensionOutlined,
  SpeedOutlined,
} from "@mui/icons-material";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";
import Slider from "react-slick";
import { MdList } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide6 from "../../images/slide6.png";
import slide2 from "../../images/slide2.png";
import slide3 from "../../images/slide3.png";
import slide4 from "../../images/slide4.png";

const HomePage = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar
          className="bg-gradient-to-r from-indigo-600 to-purple-700"
          style={{ position: "relative", width: "100%" }}
        >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <SchoolOutlined
                style={{ marginRight: "5px", fontSize: "29px" }}
              />
              ResumeRise
            </Link>
          </Typography>
          <Button color="inherit" component={Link} to="/signup">
            <FaUserPlus style={{ marginRight: "5px", fontSize: "17px" }} />
            Signup
          </Button>
          <Button color="inherit" component={Link} to="/signup">
            <MdList style={{ marginRight: "5px", fontSize: "20px" }} />
            Resume
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            <MdContactSupport
              style={{ marginRight: "5px", fontSize: "17px" }}
            />
            Contact
          </Button>
          <Button color="inherit" component={Link} to="/login">
            <FaSignInAlt style={{ marginRight: "5px", fontSize: "17px" }} />
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Slider {...sliderSettings}>
        <div>
          <img
            src={slide6}
            alt="slide6"
            style={{ width: "100%", height: "500px" }}
          />
        </div>
        <div>
          <img
            src={slide2}
            alt="slide2"
            style={{ width: "100%", height: "500px" }}
          />
        </div>
        <div>
          <img
            src={slide3}
            alt="slide3"
            style={{ width: "100%", height: "500px" }}
          />
        </div>
        <div>
          <img
            src={slide4}
            alt="slide4"
            style={{ width: "100%", height: "500px" }}
          />
        </div>
      </Slider>
      <Container>
        <Grid container spacing={3} sx={{ marginTop: "2rem" }}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center" gutterBottom>
              Build Your Professional Resume
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <SchoolOutlined  style={{ width: "100%", height: "100px" }}/>
            <Typography variant="h5" align="center" gutterBottom>
              Expert Tips
            </Typography>
            <Typography variant="body1" align="center">
              Our resume builder is packed with expert tips to show you how to
              make each part of your resume.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <DescriptionOutlined style={{ width: "100%", height: "100px" }}/>
            <Typography variant="h5" align="center" gutterBottom>
              Best Resume Templates
            </Typography>
            <Typography variant="body1" align="center">
              Our templates were all designed by Certified Career Experts.
              Select a resume template here.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CheckCircleOutline style={{ width: "100%", height: "100px" }} />
            <Typography variant="h5" align="center" gutterBottom>
              Resume Check
            </Typography>
            <Typography variant="body1" align="center">
              Zety Resume Builder reviews and scores your resume in real-time.
              Check how your resume performs here.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <DraftsOutlined style={{ width: "100%", height: "100px" }}/>
            <Typography variant="h5" align="center" gutterBottom>
              Cover Letter Builder
            </Typography>
            <Typography variant="body1" align="center">
              Generate a cover letter using a template matching your resume.
              Build your cover letter here.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ExtensionOutlined style={{ width: "100%", height: "100px" }} />
            <Typography variant="h5" align="center" gutterBottom>
              Fast and Easy Generator
            </Typography>
            <Typography variant="body1" align="center">
              Drag and drop ready-made content tailored to your resume in a
              click and enjoy a flexible text editor.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <SpeedOutlined style={{ width: "100%", height: "100px" }}/>
            <Typography variant="h5" align="center" gutterBottom>
              Hundreds of Free Samples
            </Typography>
            <Typography variant="body1" align="center">
              Explore top resume examples and cover letter examples for all jobs
              and industries to get a job in no time.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              component={Link}
              to="/signup"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:bg-indigo-600"
              style={{
                marginBottom: "1rem",
                marginLeft: "27rem",
                marginTop: "10rem",
                width: "25%",
                borderRadius: "7px",
              }}
            >
              Get Started
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;
