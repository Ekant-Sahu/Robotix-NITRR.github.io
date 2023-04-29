import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import "../home/style.css";

const Home = () => {
  // const history = useHistory();

  // useEffect(() => {
  
  //   history.push('/users');
  // },[])
  return (
    <div className='home'>
      <div className="heading"><h1>ROBOTICS CLUB</h1></div>
      <div className="section-header left-style">
                            <h3 className="title">A Few Words About Us</h3>
                            <h4 className="title">Who are we ??</h4>
                            <p>The Robotix Club of NIT Raipur is the perfect combination of innovators, contributors and experts in the field of Robotics. The club has been inspiring minds ever since its inception in 2014. The foundation of Robotix Club was laid by a group of enthusiastic and ardent students with a vision to promote the versatile field of robotics and it’s ever growing application in present time. We make sure that every student seeking the knowledge gets it .The club is guided by our esteemed faculty In charge Dr. Rajesh Doriya (Department of Information Technology) who makes sure there is proper functioning of the club.</p>
                            <br />
                            <h4 className="title">Our Vision</h4>
                            <p>Robotix Club NITRR strives to develop technological skills in the diverse field of mechatronics and robotics by transcending the theoretical knowledge into live application and providing live simple yet creative solution for real world complex problems. The club's focus has always been on student specific events and workshops to increase the reach of robotics in the college. Major part of the club has been involved with students as well as teachers working together as a cohesive unit.</p>
                        </div>
    </div>
  )
}

export default Home