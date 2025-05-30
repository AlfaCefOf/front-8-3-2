
import './App.css'
import logo from './assets/Logo (4).png';
import logo2 from './assets/Image_laceholder.png'
import logo3 from './assets/Image (25).png'
import logo4 from './assets/1.png'
import logo5 from './assets/2.png'
import logo6 from './assets/3.png'
import logo7 from './assets/4.png'

function App() {

  return (
    <>
      <header>
    <div class="container">
      <nav>
      <div class="logo">
          <img src={logo} alt="Logo" />
         <h1> Interno</h1>
          </div>
      <ul>
        <li>Home</li>
        <li>Pages</li>
        <li>Services</li>
        <li>Project</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </nav>
    </div>
      </header>
      <section>
         <img class="sectionLineImg" src={logo2} alt="Interior design"></img>
      </section>
       <section class="content">
    <div class="info-box">
      <div class="div-list">
         <ul class="list1">
        <li><b>Client</b></li>
        <li><b>Category</b> </li>
        <li><b>Location</b> </li>
        <li><b>Date</b> </li>
        <li><b>Link</b></li>
      </ul>
      <ul class="list2">
        <li> Your client name</li>
        <li> Interiors</li>
        <li>Interior, Home</li>
        <li>Date 23,02, 2022</li>
        <li>Link example.com</li>
      </ul>
      </div>
    </div>
    <div class="main-text">
      <h2>Minimal Look Bedrooms</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. <br />
     <br /> In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.
      </p>
    </div>
  </section>
  <section class="preview">
    <img src={logo3} alt="Minimal Bedroom"></img>
  </section>
      <footer>
         <div class="footer-brand">
      <div class="logo1">
          <img src={logo} alt="Logo" />
         <h2> Interno</h2>
          </div>
      <p>It is a long established fact that a reader will be distracted lookings.</p>
      <div class="social-icons">
         <a href="#"> <img src={logo4} alt="" /></a>
          <a href="#"><img src={logo5} alt="" /></a>
          <a href="#"><img src={logo6} alt="" /></a>
         <a href="#"> <img src={logo7} alt="" /></a>
      </div>
    </div>
    <div class="footer-links">
      <div>
        <ul class="listFoot1">
        <h4>Pages</h4>
          <li>About Us</li>
          <li>Our Projects</li>
          <li>Our Team</li>
          <li>Contact Us</li>
          <li>Services</li>
        </ul>
      </div>
      <div>
        <ul class="listFoot1">
        <h4>Services</h4>
          <li>Kitchan</li>
          <li>Living Area</li>
          <li>Bathroom</li>
          <li>Dinning Hall</li>
          <li>Bedroom</li>
        </ul>
      </div>
      <ul class="listFoot1">
        <h4  class="textFooter">Contact</h4>
        <li>55 East Birchwood Ave. Brooklyn, New York 11201</li>
        <li>contact@interno.com</li>
        <li>(123) 456 - 7890</li>
      </ul>
    </div>
    <h6 class="text-end">Copyright © Interno | Designed by Victorflow Templates - Powered by Webflow</h6>
      </footer>
    </>
  )
}

export default App
