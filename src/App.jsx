import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Degree from './components/Degree'
import Footer from './components/Footer'
import Take from './components/Take'
import ExploreCoursera from './components/ExploreCoursera '
import EnrollmentSection from './components/EnrollmentSection '
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Degree />
              <ExploreCoursera />
              <Take />
            </>
          } />
          <Route path="/enrollmentsection" element={<EnrollmentSection />} />
        </Routes>
        <Footer />

      </Router>
    </>
  )
}

export default App