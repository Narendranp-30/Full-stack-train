import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Avatar,
  IconButton,
} from "@mui/material";
import { Phone, Email, LinkedIn, Facebook, Instagram } from "@mui/icons-material";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Floating Contact Section */}
      <Box
        sx={{
          backgroundColor: "#e3f2fd",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          position: "ab",
          top: 0,
          width: "100%",
          height: "100px",
          zIndex: 1200,
          borderBottom: "1px solid #ccc",
        }}
      >
        {/* Contact Info */}
        <Box>
          <Typography
            variant="body2"
            sx={{ display: "inline", marginRight: "15px" }}
          >
            <Phone sx={{ fontSize: 16, marginRight: "5px" }} />
            +1 123-456-7890
          </Typography>
          <Typography
            variant="body2"
            sx={{ display: "inline", marginRight: "15px" }}
          >
            <Email sx={{ fontSize: 16, marginRight: "5px" }} />
            contact@amiso.com
          </Typography>
        </Box>

        {/* Social Icons */}
        <Box>
          <IconButton href="https://www.linkedin.com" target="_blank">
            <LinkedIn sx={{ color: "#0077b5",marginRight: "10px" }} />
          </IconButton>
          <IconButton href="https://www.facebook.com" target="_blank">
            <Facebook sx={{ color: "#1877f2",marginRight: "10px" }} />
          </IconButton>
          <IconButton href="https://www.instagram.com" target="_blank">
            <Instagram sx={{ color: "#e1306c",marginRight: "30px" }} />
          </IconButton>
        </Box>
      </Box>

      {/* Main AppBar */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#2196f3",
          height: "80px",
          marginTop: "1px", // Offset for the floating section
        //  zIndex: 1100,
        }}
      >
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Amiso Cleaning Services
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Services</Button>
          <Button color="inherit">Team</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: "#e3f2fd",
          height: "400px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
        }}
      >
        <Typography variant="h3" gutterBottom>
          A Tradition of Quality Cleaning
        </Typography>
        <Typography variant="body1" gutterBottom>
          A Cleaner Place is a Safer Place
        </Typography>
        <Button variant="contained" color="primary">
          Contact Us
        </Button>
      </Box>

      {/* Services Section */}
      <Box
        sx={{
          backgroundColor: "#ffffff",
          padding: "20px",
          width: "100%",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Our Great Services
        </Typography>
        <Grid container spacing={2}>
          {[
            {
              title: "Home Cleaning",
              image:
                "https://bookdirtbusters.com/wp-content/uploads/2020/11/house-cleaning-tips.jpeg",
            },
            {
              title: "Windows Cleaning",
              image:
                "https://th.bing.com/th/id/OIP.rHdCe4Z_3HwU1QI2RyWxNgHaE8?rs=1&pid=ImgDetMain",
            },
            {
              title: "Office Cleaning",
              image:
                "https://nowitsclean.ca/wp-content/uploads/office-space-cleaning-1.jpg",
            },
          ].map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  sx={{ height: "200px" }}
                  image={service.image}
                  title={service.title}
                />
                <CardContent>
                  <Typography variant="h6">{service.title}</Typography>
                  <Typography variant="body2">
                    High-quality cleaning services for your home and office.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Team Section */}
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          padding: "20px",
          width: "100%",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Meet Our Team
        </Typography>
        <Grid container spacing={2}>
          {[
            { name: "Monica Gordon", role: "House Cleaner" },
            { name: "Laura Jones", role: "Cleaner" },
            { name: "Sara Ryan", role: "Office Cleaner" },
          ].map((teamMember, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <Avatar
                  sx={{
                    height: 140,
                    width: 140,
                    margin: "20px auto",
                    backgroundColor: "#2196f3",
                  }}
                  src={`https://randomuser.me/api/portraits/women/${index + 1}.jpg`}
                />
                <CardContent>
                  <Typography variant="h6">{teamMember.name}</Typography>
                  <Typography variant="body2">{teamMember.role}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Statistics Section */}
      <Box
        sx={{
          backgroundColor: "#e3f2fd",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <Grid container spacing={4}>
          {[
            { number: 385, label: "Happy Customers" },
            { number: 842, label: "Houses Cleaned" },
            { number: 489, label: "Awards Received" },
            { number: 1344, label: "Glass Cleaned" },
          ].map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Typography variant="h4" color="primary">
                {stat.number}
              </Typography>
              <Typography variant="body2">{stat.label}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          height: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography variant="body2">
          &copy; 2025 Amiso Cleaning Services. All rights reserved.
        </Typography>
      </Box>
    </div>
  );
}

export default App;
