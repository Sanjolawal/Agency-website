import React from "react";
import brands from "../images/brands.png"
import Review from "../review";
import Footer from "../Footer";



function Whyus(){
 return(
     <article>
      <div className="about-con">
          <h1 data-aos="fade-up">ABOUT</h1>
          <p className="qoutes" data-aos="zoom-in">We do what we love, we love what we do,<br/>so we are 
          confident in excellent end result.</p>
      </div>
      <span data-aos="fade-up">"I want to tell you a little bit more about our agency and myself over the next few minutes...<br/><br/>
      This agency was formed, to offer corporate identity, strong online presence for struggling business owners and startup.<br/><br/>
After many operations we've developed an efficient process, effective product, strong relationships with clients and a healthy reputation in the industry.<br/><br/>
...But it wasn’t always so easy and it wasn’t always like this...<br/><br/>
when I started I was told it couldn’t be done because the main tech companies out there were charging so much.<br/><br/>
It was deemed impossible to create a scalable and eye catching website at just 1500$ from expert/agency<br/><br/>
A close friend at a marketing agency told me that even if I created the product successfully, he wouldn’t buy it because it was too cheap, it would be seen as low quality based on that alone.<br/><br/>
But this product could be created, and against all that negative feedback I consistently worked on building a team that allowed us to produce a multi packed features software  at an affordable price.<br/><br/>
Frankly, our first attempts working together was hectic, different timezones and other factors, but from each new iteration and attempt we were able to achieve the impossible.<br/><br/>
It was one of the first times I realized that being stubborn could pay off, risking my time and money could pay off, having trust in the basic principle that everyone wants the best deal possible.<br/><br/>
And that’s why we're still here with great records today.<br/><br/>
For any business looking for online presence(website, branding), with oustanding IT support team at an affordable price or dissatisfied with current team.<br/><br/>
"That’s why I entered this market in the first place,I saw all these massive agencies charging exorbitant prices or these cheap studios offering worthless software... barely any companies in the middle... I knew it was possible to offer quality softawre at an affordable price, without making massive margins.<br/><br/>
One example of this is our ability to maintain quality at lower costs just by eliminating the rent involved with office space through the virtualization of our work space."<br/><br/>
</span>
<h2> Our recent customers</h2>
<img src={brands} alt="brands logo" className="brands-img"/>
<section>
    <h3 data-aos="flip-up" >Our Website development workflow</h3>
    <h4 data-aos="fade" >1</h4><p className="title" data-aos="zoom-in">Kickoff & brief</p>
    <p className="subtitle" data-aos="flip-up">A deep dive into your business allows our design team to learn
     about your organization, brand, mission, and more. We work together to build a project 
     overview document and creative blueprint that will guide the website design and development.</p>

    <h5 data-aos="flip-down">2</h5><p className="title2" data-aos="flip-left">Mock-ups & design</p>
    <p className="subtitle2" data-aos="flip-up" >Our world class web design team brings concepts to life in our mockup process.
     Interactive feedback tools and revision rounds add value
     and help us manage the web design process as a team.</p> 

    < h6 data-aos="flip-right">3</h6><p className="title3" data-aos="fade-right">Website development</p>
    <p className="subtitle3" data-aos="zoom-out">The development team builds your approved designs 
     into an industry-lead, using latest stacks/languages to provide a
     fully responsive site for all screen sizes and devices.</p> 

     <h6 className="h1">4</h6><p className="title4" data-aos="slide-up">Revisions & launch</p>
    <p className="subtitle4"data-aos="flip-down">Our revision rounds are an opportunity for us to work with clients 
    to key in any changes to the website development prior to launch, we work until it’s perfect.</p> 

     <h6 className="h2" data-aos="zoom-out">5</h6><p className="title5" data-aos="flip-right">Ongoing web design and hosting support</p>
    <p className="subtitle5" data-aos="fade">We provide ongoing  hosting on the world’s leading site
    managed infrastructure. Our CDN, Backups, SSL, and security audits ensure your site is always updated, fast, 
    and available for your visitors.</p> 
</section>
 <div className="con">
     <p className="con-12" data-aos="slide-right">Still have questions?, get in touch with us.</p>
     <button className="con-20" data-aos="flip-up">GET IN TOUCH</button>
 </div>
      <div className="whyus-review"> <Review/> </div>
      <div className="whyus-footer"><Footer/></div>
</article>
 )
}
export default Whyus