import React from 'react';
import Layout from '../components/Layout';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Layout>
      <Box sx={{
        my: 1,
        textAlign: "center",
        p: 2,
        "& h4": {
          fontWeight: "bold",
          my: 2,
          fontSize: "2rem",
        },
        "& p": {
          textAlign: "justify",
          fontSize: "1.1rem",
        },
        "@media (max-width:600px)": {
          mt: 0,
        }
      }}>
        {/* Welcome Section */}
        <Typography variant="h4">
          Welcome To Indian Spice
        </Typography>
        <Typography variant="body1" paragraph>
          At Indian Spice, we believe that food is not just sustenance, but a celebration of life. Our mission is to offer you an 
          authentic taste of India’s diverse and rich culinary heritage. Whether you are a long-time lover of Indian cuisine or are just 
          beginning your journey, we invite you to experience the bold flavors, spices, and traditions that define our food.
        </Typography>

        {/* Our Story Section */}
        <Typography variant="h4">
          Our Story
        </Typography>
        <Typography variant="body1" paragraph>
          Founded in 2024, Indian Spice was born out of a deep passion for Indian food and the desire to share the beauty of 
          Indian cuisine with the world. Our founder, Anjali yadav, grew up where food was the heart of every gathering. 
          Inspired by family recipes passed down through generations, Anjali yadav decided to bring these authentic flavors to Uttar Pradesh, 
          offering a warm and inviting space where guests can experience the true taste of India.
        </Typography>
        <Typography variant="body1" paragraph>
          From the very first dish to the diverse menu offerings today, our restaurant has always stayed true to the flavors and techniques 
          that have been perfected over centuries. We bring together regional specialties from all over India, including North India, South India, 
          and everything in between.
        </Typography>
      </Box>
    </Layout>
  );
};

export default About;
