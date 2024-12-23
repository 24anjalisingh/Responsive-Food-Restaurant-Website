import React from 'react';
import Layout from '../components/Layout';
import { Link } from "react-router-dom";
import Banner from '../images/banner.jpeg';
import "../styles/HomeStyles.css";
const Home = () => {
  return (
    <Layout>
      <div className='home' style={{ backgroundImage: `url(${Banner})` }}>
        <div className='headerContainer'>
          <h1>Indian Spice</h1>
          <h2><i>Welcome To Best Tadka In India</i></h2>
          <Link to="menu">
            <button>
              ORDER NOW
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
