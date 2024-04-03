// import React, { useState } from "react";
// import { Button, TextField, Typography, Grid, Container } from "@mui/material";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can implement your logic to handle form submission, such as sending an email or saving to a database
//     console.log(formData);
//     // Reset form fields after submission
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <Container maxWidth="md">
//       <Typography variant="h4" align="center" gutterBottom>
//         Contact Us
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               label="Name"
//               variant="outlined"
//               fullWidth
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               label="Email"
//               variant="outlined"
//               fullWidth
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Message"
//               variant="outlined"
//               fullWidth
//               name="message"
//               multiline
//               rows={4}
//               value={formData.message}
//               onChange={handleChange}
//               required
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Button type="submit" variant="contained" color="primary" fullWidth>
//               Submit
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </Container>
//   );
// };

// export default ContactForm;

//main code
// import React, { useState } from "react";
// import { Button, TextField, Typography, Grid, Container } from "@mui/material";
// // import { CiPaperplane } from "react-icons/ci";
// import { AiOutlineUser, AiOutlineMail } from "react-icons/ai"; // React Icons for user and email icons

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can implement your logic to handle form submission, such as sending an email or saving to a database
//     console.log(formData);
//     // Reset form fields after submission
//     setFormData({ name: "", email: "", subject: "", message: "" });
//   };

//   return (
//     <div className="bg-gradient-to-r from-purple-500 to-indigo-600 min-h-screen flex flex-col justify-center items-center">
//       <Container maxWidth="sm" className="bg-white p-10 rounded-2xl shadow-3xl">
//         <Typography
//           variant="h4"
//           align="center"
//           className="text-4xl font-bold mb-10 p-7 text-gray-800"
//         >
//           Contact Us
//         </Typography>
//         <form onSubmit={handleSubmit} className="w-full p-1">
//           <Grid container spacing={4} alignItems="center">
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 label="Your Name"
//                 variant="outlined"
//                 fullWidth
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 InputProps={{
//                   startAdornment: <AiOutlineUser className="text-gray-500" />,
//                   className: "bg-gray-100 rounded-xl ",
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 label="Your Email"
//                 variant="outlined"
//                 fullWidth
//                 name="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 InputProps={{
//                   startAdornment: <AiOutlineMail className="text-gray-500" />,
//                   className: "bg-gray-100 rounded-lg",
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 label="Subject"
//                 variant="outlined"
//                 fullWidth
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 className="bg-gray-100 rounded-lg"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 label="Your Message"
//                 variant="outlined"
//                 fullWidth
//                 name="message"
//                 multiline
//                 rows={4}
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 className="bg-gray-100 rounded-lg"
//               />
//             </Grid>
//             <Grid item xs={12}>

//               <Button
//                 type="submit"
//                 variant="contained"
//                 color="primary"
//                 // endIcon={<Send />}

//                 className="mt-5"
//                 style={{
//                   display: "block",
//                   margin: "auto",
//                   borderRadius: "10px",
//                   // Adjust the border radius as needed
//                 }}

//               >
//                   Submit
//               </Button>
//             </Grid>
//           </Grid>
//         </form>
//       </Container>
//       <div className="mt-6 text-white text-center">
//         <Typography variant="h5" className="text-2xl font-semibold mb-10 p-10">
//           Other Contact Options
//         </Typography>
//         <Typography variant="body1" gutterBottom>
//           If you prefer, you can also contact us via email at{" "}
//           <strong className="text-yellow-300">info@resumerise.com</strong> or
//           call us at{" "}
//           <strong className="text-yellow-300">+1 (123) 456-7890</strong>.
//         </Typography>
//         <Typography variant="body1" gutterBottom>
//           Our customer happiness agents will assist you with any issues you’re
//           facing.
//         </Typography>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;

// import React, { useState } from "react";
// import { Button, TextField, Typography, Grid, Container } from "@mui/material";

// import { AiOutlineUser, AiOutlineMail } from "react-icons/ai"; // React Icons for user and email icons

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can implement your logic to handle form submission, such as sending an email or saving to a database
//     console.log(formData);
//     // Reset form fields after submission
//     setFormData({ name: "", email: "", subject: "", message: "" });
//   };

//   return (
//     <div className="bg-gradient-to-r from-purple-500 to-indigo-600 min-h-screen flex flex-col justify-center items-center">
//       <Container maxWidth="sm" className="bg-white p-10 rounded-2xl shadow-3xl">
//         <Typography
//           variant="h4"
//           align="center"
//           className="text-4xl font-bold mb-10 p-7 text-gray-800"
//         >
//           Contact Us
//         </Typography>
//         <form onSubmit={handleSubmit} className="w-full p-1">
//           <Grid container spacing={4} alignItems="center">
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 label="Your Name"
//                 variant="outlined"
//                 fullWidth
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 InputProps={{
//                   startAdornment: <AiOutlineUser className="text-gray-500" />,
//                   className: "bg-gray-100 rounded-xl ",
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 label="Your Email"
//                 variant="outlined"
//                 fullWidth
//                 name="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 InputProps={{
//                   startAdornment: <AiOutlineMail className="text-gray-500" />,
//                   className: "bg-gray-100 rounded-lg",
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 label="Subject"
//                 variant="outlined"
//                 fullWidth
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 className="bg-gray-100 rounded-lg"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 label="Your Message"
//                 variant="outlined"
//                 fullWidth
//                 name="message"
//                 multiline
//                 rows={4}
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 className="bg-gray-100 rounded-lg"
//               />
//             </Grid>
//             <Grid item xs={12}>

//               <Button
//                 type="submit"
//                 variant="contained"
//                 color="primary"
//                 // endIcon={<Send />}

//                 className="mt-5"
//                 style={{
//                   display: "block",
//                   margin: "auto",
//                   borderRadius: "10px",
//                   // Adjust the border radius as needed
//                 }}

//               >
//                   Submit
//               </Button>
//             </Grid>
//           </Grid>
//         </form>
//       </Container>
//       <div className="mt-6 text-white text-center">
//         <Typography variant="h5" className="text-2xl font-semibold mb-10 p-10">
//           Other Contact Options
//         </Typography>
//         <Typography variant="body1" gutterBottom>
//           If you prefer, you can also contact us via email at{" "}
//           <strong className="text-yellow-300">info@resumerise.com</strong> or
//           call us at{" "}
//           <strong className="text-yellow-300">+1 (123) 456-7890</strong>.
//         </Typography>
//         <Typography variant="body1" gutterBottom>
//           Our customer happiness agents will assist you with any issues you’re
//           facing.
//         </Typography>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;

// import React, { useState } from "react";
// import { Button, TextField, Typography, Grid, Container } from "@mui/material";
// import { AiOutlineUser, AiOutlineMail } from "react-icons/ai"; // React Icons for user and email icons

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can implement your logic to handle form submission, such as sending an email or saving to a database
//     console.log(formData);
//     // Reset form fields after submission
//     setFormData({ name: "", email: "", subject: "", message: "" });
//   };

//   return (
//     <div className="bg-gradient-to-r from-purple-500 to-indigo-600 min-h-screen flex flex-col justify-center items-center">
//       <Container maxWidth="sm" className="bg-white p-10 rounded-2xl shadow-3xl">
//         <Typography variant="h4" align="center" className="text-4xl font-bold mb-10 text-gray-800">
//           Contact Us
//         </Typography>
//         <form onSubmit={handleSubmit} className="w-full p-1">
//           <Grid container spacing={4} alignItems="center">
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 label="Your Name"
//                 variant="outlined"
//                 fullWidth
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 InputProps={{
//                   startAdornment: <AiOutlineUser className="text-gray-500" />,
//                   className: "bg-gray-100 rounded-lg px-4 py-2",
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 label="Your Email"
//                 variant="outlined"
//                 fullWidth
//                 name="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 InputProps={{
//                   startAdornment: <AiOutlineMail className="text-gray-500" />,
//                   className: "bg-gray-100 rounded-lg px-4 py-2",
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 label="Subject"
//                 variant="outlined"
//                 fullWidth
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 className="bg-gray-100 rounded-lg px-4 py-2"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 label="Your Message"
//                 variant="outlined"
//                 fullWidth
//                 name="message"
//                 multiline
//                 rows={4}
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 className="bg-gray-100 rounded-lg px-4 py-2"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Button
//                 type="submit"
//                 variant="contained"
//                 color="primary"
//                 className="mt-5 py-3 px-6 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-500 text-white hover:from-purple-500 hover:to-indigo-600 focus:outline-none"
//               >
//                 Submit
//               </Button>
//             </Grid>
//           </Grid>
//         </form>
//       </Container>
//       <div className="mt-6 text-white text-center">
//         <Typography variant="h5" className="text-2xl font-semibold mb-4">
//           Other Contact Options
//         </Typography>
//         <Typography variant="body1" gutterBottom>
//           If you prefer, you can also contact us via email at{" "}
//           <strong className="text-yellow-300">info@resumerise.com</strong> or
//           call us at{" "}
//           <strong className="text-yellow-300">+1 (123) 456-7890</strong>.
//         </Typography>
//         <Typography variant="body1" gutterBottom>
//           Our customer happiness agents will assist you with any issues you’re
//           facing.
//         </Typography>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;

import React, { useState } from "react";
import { Button, TextField, Typography, Grid, Container } from "@mui/material";
import { AiOutlineUser, AiOutlineMail, AiFillPhone } from "react-icons/ai"; // React Icons for user, email, and phone icons
import { BsEnvelope } from "react-icons/bs"; // React Icons for envelope icon
import { FiPhone } from "react-icons/fi";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement your logic to handle form submission, such as sending an email or saving to a database
    console.log(formData);
    // Reset form fields after submission
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 min-h-screen flex flex-col justify-center items-center ">
      <Container
        maxWidth="sm"
        className="bg-white p-10 rounded-2xl shadow-3xl mt-12"
      >
        <Typography
          variant="h4"
          align="center"
          className="text-4xl font-bold mb-10 text-gray-800 p-5"
        >
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit} className="w-full p-1">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} sm={6}>
              <TextField
                label="Your Name"
                variant="outlined"
                fullWidth
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                InputProps={{
                  startAdornment: <AiOutlineUser className="text-gray-500" />,
                  className: "bg-gray-100 rounded-xl px-4 py-1",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Your Email"
                variant="outlined"
                fullWidth
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                InputProps={{
                  startAdornment: <AiOutlineMail className="text-gray-500" />,
                  className: "bg-gray-100 rounded-lg px-4 py-1",
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Subject"
                variant="outlined"
                fullWidth
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="bg-gray-100 rounded-lg px-4 py-1"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label=" Enter Your Message"
                variant="outlined"
                fullWidth
                name="message"
                multiline
                rows={3}
                value={formData.message}
                onChange={handleChange}
                required
                
                className="bg-gray-100 rounded-lg px-4 py-1"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth="full"
                className="mt-5 py-3 px-6 rounded-xl bg-gradient-to-r from-purple-400 to-indigo-500 text-white hover:from-purple-500 hover:to-indigo-600 focus:outline-none"
              >
                <BsEnvelope className="mr-2" /> Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
      <div className="mt-6 text-white text-center">
        <Typography variant="h5" className="text-2xl font-semibold mt-4 p-5">
          Other Contact Options
        </Typography>
        <Typography variant="body1" gutterBottom>
          If you prefer, you can also contact us via email at{" "}
          <strong className="text-yellow-300">
            <BsEnvelope className=" ml-2 mr-2 inline-block" />
            info@resumerise.com
          </strong>{" "}
          or call us at{" "}
          <strong className="text-yellow-300">
            <FiPhone className="inline-block mr-1" /> +1 (123) 456-7890
          </strong>
          .
        </Typography>
        <br />
        <strong className="text-yellow-300">
          <BsEnvelope className=" ml-2 mr-2 inline-block" />:
          info@resumerise.com
        </strong>

        <br />
        <strong className="text-yellow-300">
          <FiPhone className="mr-2 ml-1 inline-block " /> : +1 (123) 456-7890
        </strong>
        <br />
        <br></br>
        <Typography variant="body1" gutterBottom>
          Our customer support team is here to assist you with any challenges or
          concerns you may encounter.
        </Typography>
      </div>
    </div>
  );
};

export default ContactForm;
