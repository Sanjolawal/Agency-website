import React from "react";
import monitor from '../images/header2.png'
import brands from '../images/brands.png'
import Review from "../review";
import Footer from "../Footer";
import AOS from "aos";
import 'aos/dist/aos.css';


    //    Animation library           
AOS.init({
    duration: 1000
});


// twakto Live chat api 
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/61a92e9b51498030cd3bcfcc/1fluds43t';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
            //  Livechat api end
    



function Header(){
return(
    <>
    <header>
        <div className="sec-gr"/>
        <h1 data-aos="slide-down" >A Leading Website <br/>   Development Agency </h1>
        <p data-aos="zoom-in"data-aos-duration="2000" >Reach millions conversion and sales <br/> with our creative design<br/> and error free development.</p>
        <div className='first'/>
        <img src = {monitor} alt ='Electronic' data-aos="fade-left" data-aos-duration="2000" />
        <button data-aos="slide-right">Get a qoute</button>
    </header>
    <h2 className="topic" data-aos="slide-up" > Our recent customers</h2>
<img src={brands} alt="brands logo" className="brands-img1"/>
   <div className="header-review" ><Review/></div>
   <div className="header-con">
     <p className="con-1" data-aos="flip-up" ><span className="con1-p">Still have questions?, get in touch with us.</span></p>
     <button className="con-2" data-aos="fade"> <span className="con1-p2"> GET IN TOUCH </span></button>
 </div>
   <div className="header-footer"><Footer/></div>
    </>
    
)
}
export default Header