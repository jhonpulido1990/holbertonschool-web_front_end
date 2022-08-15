# 0x06. Responsive design
## Details
 By: David Dias, Senior Software Engineer at HomeX Weight: 1Project will startAug 15, 2022 12:00 AM, must end byAug 18, 2022 12:00 AMManual QA review must be done(request it when you are done with the project)### Concepts
For this project, we expect you to look at this concept:
* [Responsive web design](https://intranet.hbtn.io/concepts/185) 

 ![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2019/12/4fe027a0c298339cb4cb.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220815%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220815T143842Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=2f1c770e820081cd00826dc4a0d2923293ba6493f6ac7cf4ab14a85c7794dbd3) 

## Resources
Read or watch :
* [The building blocks of responsive design - Progressive web apps | MDN](https://intranet.hbtn.io/rltoken/xunPO8dNZy0mJpq8vbUMRA) 

* [A pragmatic guide to designing and building responsive web applications | developerlife.com](https://intranet.hbtn.io/rltoken/rs5zCrDpRaU6LD13-rG2yg) 

* [Understanding the difference between mobile-first, adaptive and responsive design](https://intranet.hbtn.io/rltoken/gVo6P-dqrvCI8Bi148w0ig) 

* [LukeW | Mobile First](https://intranet.hbtn.io/rltoken/AMTqHMY4OeGET3nOdRH2uQ) 

* [Media Queries | A collection of inspirational websites using media queries and responsive web design](https://intranet.hbtn.io/rltoken/bk52ihWug_pe0QUghl99aQ) 

* [Responsive Design Newsletter](https://intranet.hbtn.io/rltoken/2-TtEUGzh46dBxQ1VJ7ksg) 

## Learning Objectives
At the end of this project, you are expected to be able to  [explain to anyone](https://intranet.hbtn.io/rltoken/FHDjzdN697D9N8pRTdp6ZQ) 
 ,  without the help of Google :
* Mobile-first design
* Media-queries
* Sizes to use for responsive web design
* How to make a website responsive
* The differences between responsive and adaptive design
* CSS units that are used to make elements flexible
## Requirements
* Allowed editors:  ` vi ` ,  ` vim ` ,  ` emacs ` 
* A  ` README.md `  at the root of the project directory is mandatory
* HTML and CSS have been rendered on Chrome 78 or more.
## Wireframe of the Techium project - mobile version
 ![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/4/a1f906a6a39eba8cb2f3d2877abc9ea84be51d9d.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220815%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220815T143842Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=ec15f2e5772d3af1ac48a769d2f642f40b6d718802cc8da0c29c429ec13655a4) 

## Starter files
### 00-index.html
<!DOCTYPE html><html lang="en" dir="ltr">  <head>    <meta charset="utf-8">    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">    <title>Homepage - Techium</title>    <meta name="description" content="Description of the page less than 150 characters">    <link rel="icon" type="image/png" href="images/favicon.jpg">    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700|Raleway:700&display=swap" rel="stylesheet">    <link rel='stylesheet' href='00-styles.css'>  </head>  <body>    <!– Header –>    <header class="header" data-section-theme="dark">      <div class="container">            <div class="header-container">        <div class="header-logo">          <a href="#">            <img src="images/logo-white.png" alt="Techium logo" width="160" height="40">          </a>        </div>        <nav class="navbar-menu">          <ul class="nav">            <li class="nav-item">              <a href="#" class="nav-link">Home</a>            </li>            <li class="nav-item">              <a href="#services" class="nav-link">Services</a>            </li>            <li class="nav-item">              <a href="#works" class="nav-link">Works</a>            </li>            <li class="nav-item">              <a href="#about" class="nav-link">About</a>            </li>            <li class="nav-item">              <a href="#latest_news" class="nav-link">Latest news</a>            </li>            <li class="nav-item">              <a href="#testimonials" class="nav-link">Testimonials</a>            </li>            <li class="nav-item">              <a href="#contact" class="nav-link">Contact</a>            </li>                        <li class="nav-item">                <form action="#" method="post" class="form-search">                  <input type="search" name="q" id="search-input" placeholder="Search..." aria-label="Search through site content">                  <button class="search-button">                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="search-icon">                      <title>                        Search icon                      </title>                      <path d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path>                    </svg>                  </button>                </form>              </li>          </ul>        </nav>      </div>            </div>    </header>    <!– Main –>    <main>      <!– Hero section –>      <section class="section-hero hero-homepage" data-section-theme="dark">        <div class="container">          <div class="section-body">            <section class="section-inner">              <h2 class="section-title">We help you building your brand</h2>              <a href="#" class="button">Get Started</a>            </section>          </div>        </div>      </section>      <!– Services section –>      <section id="services" class="section section-services">        <div class="container">          <header class="section-header">            <h2 class="section-title">Services</h2>            <p class="section-tagline">We work with you</p>          </header>          <div class="section-body">            <ul class="row">              <li class="col-1-3">                <div class="card-services">                  <h3 class="card-title"><a href="#">Design & Concept</a></h3>                </div>              </li>              <li class="col-1-3">                <div class="card-services">                  <h3 class="card-title"><a href="#">Digital Strategy</a></h3>                </div>              </li>              <li class="col-1-3">                <div class="card-services">                  <h3 class="card-title"><a href="#">Content Strategy</a></h3>                </div>              </li>            </ul>            <ul class="row">              <li class="col-1-3">                <div class="card-services">                  <h3 class="card-title"><a href="#">UX Design</a></h3>                </div>              </li>              <li class="col-1-3">                <div class="card-services">                  <h3 class="card-title"><a href="#">Web Development</a></h3>                </div>              </li>              <li class="col-1-3">                <div class="card-services">                  <h3 class="card-title"><a href="#">Social Media</a></h3>                </div>              </li>            </ul>          </div>        </div>      </section>      <!– Works section –>      <section id="works" class="section section-works" data-section-theme="dark">        <div class="container">          <header class="section-header">            <h2 class="section-title">Works</h2>            <p class="section-tagline">Take a look at our portfolio</p>          </header>          <div class="section-body">            <ul class="row">              <li class="col-1-3">                <article class="card-work">                  <div class="card-outer">                    <div class="card-image">                      <img src="images/pic-work-01.jpg" alt="">                    </div>                    <div class="card-inner">                      <h3 class="card-title"><a href="#">Interior Design</a></h3>                    </div>                  </div>                </article>              </li>              <li class="col-1-3">                <article class="card-work">                  <div class="card-outer">                    <div class="card-image">                      <img src="images/pic-work-02.jpg" alt="">                    </div>                    <div class="card-inner">                      <h3 class="card-title"><a href="#">Web Development</a></h3>                    </div>                  </div>                </article>              </li>              <li class="col-1-3">                <article class="card-work">                  <div class="card-outer">                    <div class="card-image">                      <img src="images/pic-work-03.jpg" alt="">                    </div>                    <div class="card-inner">                      <h3 class="card-title"><a href="#">Personal Development</a></h3>                    </div>                  </div>                </article>              </li>            </ul>          </div>        </div>      </section>      <!– About Us section –>      <section id="about" class="section section-about-us">        <div class="container">          <header class="section-header">            <h2 class="section-title">About Us</h2>            <p class="section-tagline">Everything about us</p>          </header>          <div class="section-body">            <div class="row">              <div class="col-1-2">                <img src="images/pic-about-01.jpg" alt="" width="460" height="460">              </div>              <div class="col-1-2">                <h3>Who are we</h3>                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, omnis expedita! Eum, praesentium cumque accusantium rem, sit quaerat est nisi ratione, deserunt ducimus quidem iste dicta quibusdam atque maxime cum!</p>                <h3>Our culture</h3>                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, omnis expedita! Eum, praesentium cumque accusantium rem, sit quaerat est nisi ratione, deserunt ducimus quidem iste dicta quibusdam atque maxime cum!</p>                <h3>How we work</h3>                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, omnis expedita! Eum, praesentium cumque accusantium rem, sit quaerat est nisi ratione, deserunt ducimus quidem iste dicta quibusdam atque maxime cum!</p>              </div>            </div>          </div>          <div class="section-footer">            <a href="#" class="button">Learn more about us</a>          </div>        </div>      </section>      <!– Latest news section –>      <section id="latest_news" class="section section-latest-news">        <div class="container">          <header class="section-header">            <h2 class="section-title">Latest News</h2>          </header>          <div class="section-body">            <ul class="row">              <li class="col-1-3">                <article class="card-blog">                  <div>                    <img src="images/pic-article-01.jpg" alt="" width="305" height="305">                  </div>                  <p class="card-category">Career</p>                  <h3><a href="#">Hoc loco tenere se Triarius non potuit.</a></h3>                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id Sextilius factum negabat. Quo tandem modo? At eum nihili facit; Quae contraria sunt his, malane?</p>                  <small>By Kelly D.</small>                </article>              </li>              <li class="col-1-3">                <article class="card-blog">                  <div>                    <img src="images/pic-article-02.jpg" alt="" width="305" height="305">                  </div>                  <p class="card-category">Digital Life</p>                  <h3><a href="#">Ut alios omittam, hunc appello, quem ille unum secutus est.</a></h3>                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tum mihi Piso: Quid ergo? Tum ille: Ain tandem? Non autem hoc: igitur ne illud quidem. Sed quod proximum fuit non vidit. Nos commodius agimus. An nisi populari fama?</p>                  <small>By William A.</small>                </article>              </li>              <li class="col-1-3">                <article class="card-blog">                  <div>                    <img src="images/pic-article-03.jpg" alt="" width="305" height="305">                  </div>                  <p class="card-category">Social</p>                  <h3><a href="#">Bestiarum vero nullum iudicium puto.</a></h3>                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non igitur bene. Quid enim est a Chrysippo praetermissum in Stoicis? Pugnant Stoici cum Peripateticis. Prioris generis est docilitas, memoria; Apparet statim, quae sint officia, quae actiones.</p>                  <small>By Frances J.</small>                </article>              </li>            </ul>          </div>        </div>      </section>      <!– Testimonials section –>      <section id="testimonial" class="section section-testimonial">        <div class="container">          <header class="section-header">            <h2 class="section-title">Testimonials</h2>            <p class="section-tagline">We are more than a digital company</p>          </header>          <div class="section-body">            <ul class="row">              <li class="col-1-3">                <article class="card-testimonial">                  <img src="images/pic-person-01.jpg" alt="Yuri Y. avatar" width="100" height="100" class="card-avatar">                  <blockquote class="card-quote">                    <p>I am completely blown away. Thanks to Techium, we’ve just launched our 5th website!                      <cite>Yuri Y.</cite>                    </p>                  </blockquote>                </article>              </li>              <li class="col-1-3">                <article class="card-testimonial">                  <img src="images/pic-person-02.jpg" alt="Dorrie S. avatar" width="100" height="100" class="card-avatar">                  <blockquote class="card-quote">                    <p>Thank you so much for your help. Techium company is awesome!                      <cite>Dorrie S.</cite>                    </p>                  </blockquote>                </article>              </li>              <li class="col-1-3">                <article class="card-testimonial">                  <img src="images/pic-person-03.jpg" alt="Sven H. avatar" width="100" height="100" class="card-avatar">                  <blockquote class="card-quote">                    <p>I love your system. Definitely worth the investment. I’d be lost without Techium company.                      <cite>Sven H.</cite>                    </p>                  </blockquote>                </article>              </li>            </ul>          </div>        </div>      </section>      <!– Contact section –>      <section id="contact" class="section section-contact">        <div class="container">          <header class="section-header">            <h2 class="section-title">Contact</h2>            <p class="section-tagline">We’d love to hear from you!</p>          </header>          <div class="section-body">            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id Sextilius factum negabat. Quo tandem modo? At eum nihili facit; Quae contraria sunt his, malane?</p>          </div>          <div class="section-footer">            <a href="#" class="button">Get in touch</a>          </div>        </div>      </section>    </main>    <!– Footer –>    <footer class="footer" data-section-theme="dark">      <div  class="container">        <div class="row">          <div class="col-1-2">            <img src="images/logo-white.png" alt="Techium logo" width="160" height="40">            <address class="footer-address">              972 Mission St<br>              San Francisco, CA<br>              94103            </address>          </div>          <div class="col-1-2">            <ul class="social nav">              <li class="social-item nav-item">                <a href="https://www.facebook.com/HolbertonSchool/" class="social-link">                  <svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25" height="25">                    <title>                      Facebook icon                    </title>                    <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z"/>                  </svg>                </a>              </li>              <li class="social-item nav-item">                <a href="https://twitter.com/holbertonschool" class="social-link">                  <svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25" height="25">                    <title>                      Twitter icon                    </title>                    <path d="M23.954 4.569a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.937 4.937 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 0 0 2.46-2.548l-.047-.02z"/>                  </svg>                </a>              </li>              <li class="social-item nav-item">                <a href="https://www.instagram.com/holbertonschool/" class="social-link">                  <svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25" height="25">                    <title>                      Instagram icon                    </title>                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 0 0 2.126-1.384 5.86 5.86 0 0 0 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126A5.847 5.847 0 0 0 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382 3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899 3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/>                  </svg>                </a>              </li>            </ul>          </div>        </div>        <hr>        <div class="row">          <div class="col-1-2">            <p class="footer-copyright">© 2020 Techium, made with ♥ by students at Holberton School.</p>          </div>          <div class="col-1-2">            <ul class="footer-nav nav">              <li class="footer-nav-item nav-item">                <a href="#" class="footer-nav-link">Terms of use</a>              </li>              <li class="footer-nav-item nav-item">                <a href="#" class="footer-nav-link">Privacy Policy</a>              </li>              <li class="footer-nav-item nav-item">                <a href="#" class="footer-nav-link">Cookie Policy</a>              </li>            </ul>          </div>        </div>      </div>    </footer>  </body></html>
### 00-styles.css
Click to expand/hide file contents `  ` ### Images
Use the images that you downloaded in the  [CSS Advanced](https://intranet.hbtn.io/rltoken/AYfVYkk0DQzhG_Lkrj013g) 
  project and place them into an   ` images `   directory at the root of the project.
Or some basics assets from this  [archive.zip](https://holbertonintranet.s3.amazonaws.com/uploads/misc/2020/2/2621c6fd51a58e1d1d5c.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220815%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220815T143842Z&X-Amz-Expires=345600&X-Amz-SignedHeaders=host&X-Amz-Signature=e0918a4dde732a2d164760da2228585eef07bcabf1993012d62e061fac2e5403) 

## Tasks
### 0. Fix the hero banner
          mandatory         Progress vs Score  Task Body Because we did some changes with the   ` article.html `   page in the previous project, our hero banner background is no more visible. Let’s fix it!
But before that, to ensure we start on the same foot, you should use the starter HTML and CSS provided in the project description.
In your   ` 01-styles.css `   file
* Inside the  ` hero-homepage `  class selector, update some values:* Property:  ` background-position ` , Value:  ` 65% 8rem ` 
* Property:  ` background-size ` , Value:  ` 90rem auto ` 

* Inside the selector that targets  ` section-inner `  class inside  ` section-hero `  class* Update the  ` min-height `  to  ` 35vh ` 

Final rendering of the Hero section should look something like this
 ![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/f464d8346c36134ec4ae.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220815%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220815T143842Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=b77e4fc81743cdaa60a330c3ff361bcaf04d763b7e4c226ae5412d13abdd5689) 

 Task URLs  Github information Repo:
* GitHub repository:  ` holbertonschool-web_front_end ` 
* Directory:  ` 0x06-responsive_design ` 
* File:  ` 01-styles.css, 01-index.html ` 
 Self-paced manual review  Panel footer - Controls 
### 1. Make the container flexible
          mandatory         Progress vs Score  Task Body Using the previous file as the base, in your   ` 02-styles.css `   file update the   ` .container `   selector by changing   ` width `   to   ` max-width ` 
If you resize your browser, you should see that the content is resizing.
Wide screen:
 ![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/5356d9d9b1de3ef692a1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220815%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220815T143842Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=69c9ed5cd2453772ed28641db733f3008fc3d5da4c204a8d5625d226dd870744) 

Narrow screen:
 ![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/9aeb51d5b4c9586ea05a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220815%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220815T143842Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=a066a1d767d9ef843988ddcae56e4a11359f229b4ba624c888afd73265b84d3a) 

 Task URLs  Github information Repo:
* GitHub repository:  ` holbertonschool-web_front_end ` 
* Directory:  ` 0x06-responsive_design ` 
* File:  ` 02-styles.css, 02-index.html ` 
 Self-paced manual review  Panel footer - Controls 
### 2. Fix layout issues
          mandatory         Progress vs Score  Task Body Whatever the browser you use, it’s a good idea from now on, to  [toggle the device view](https://intranet.hbtn.io/rltoken/5lz32vRWqILHFjF32lyuxA) 
 .
In a normal situation, you should start with “mobile first” in mind and write your CSS first for the mobile. But because we already have a desktop version, we will exceptionally add some media-queries for mobile and tablet.
* For extra large devices (no media queries)
* For desktop / large devices ( ` max-width: 992px ` )
* For tablet / medium styles ( ` max-width: 767px ` )
* For mobile styles ( ` max-width: 480px ` )
We will put media queries at the end of each section to facilitate the reading but for performance reasons, the best practice is to unifiy all similar breakpoints at the end of the CSS file.
In your  ` 02-1-styles.css `  file:
* inside the   ` /* Helpers `   section target all images inside the main section
* Property:  ` width ` , Value:  ` 100% ` 
* Property:  ` height ` , Value:  ` auto ` 

* inside the   ` /* Section Latest news `   section, add a new media query (  ` max-width: 767px `  )
* Target the  ` row `  inside  ` section-latest-news ` * Property:  ` flex-direction ` , Value:  ` column ` 


* inside the   ` /* Grid `   section, at the end, add a new media query (  ` max-width: 767px `  )
* First, redefine the variable  ` section-padding `  and give that value:  ` 5rem 1.5rem ` . And redefine the variable  ` section-body-padding `  with  ` 2rem 0 0 ` 
* Target the  ` ul.row `  and the  ` row `  class* Property:  ` flex-direction ` , Value:  ` column ` 
* Property:  ` margin ` , Value:  ` 0 ` 

* Target all the classes that started with  ` col- ` * Property:  ` margin ` , Value:  ` 0 0 3rem 0 ` 

* Target the  ` col-1-3 `  and  ` col-1-2 `  classes* Property:  ` width ` , Value:  ` 100% ` 


The   ` navbar `   is not allowing the website to fit the window. We will temporarily hide it and create a mobile navbar later.
* inside the  ` /* Navbar `  section, at the end, add a new media query ( ` max-width: 767px ` )* Target the  ` navbar-menu `  class* Property:  ` display ` , Value:  ` none ` 


You should now be able to easily view the website on a device of any screen/window size. I guess you are surprised that was so easy?!
Rendering on wide screen
 ![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/ec686cf75a8788a04bd5.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220815%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220815T143842Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=4727ff11445ea286610ba7469b658429d830e0e4fe6566bc4f1e86abb8d6dfdf) 

Rendering on screen with max-width: 767px
 ![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/741a7a68af4e92b5c286.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220815%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220815T143842Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=81922dcea505e6c7d6f2f779e404528a32a2fa476a94ae4ff512f713e29e97ec) 

Rendering on screen with max-width: 767px, you can see the navbar is hidden
 ![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/3ee548024a868f4ce695.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220815%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220815T143842Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=ce74187dc9266abaac909e40bb88d69fe93436a344f644de5da6fee4b5160f53) 

 Task URLs  Github information Repo:
* GitHub repository:  ` holbertonschool-web_front_end ` 
* Directory:  ` 0x06-responsive_design ` 
* File:  ` 02-1-styles.css, 02-1-index.html ` 
 Self-paced manual review  Panel footer - Controls 
### 3. Generate images with responsive breakpoints
          mandatory         Progress vs Score  Task Body Go to  [Responsive Breakpoints](https://intranet.hbtn.io/rltoken/W5EW7u35nwzX2qH3CIvf7Q) 

In Breakpoints generation settings:
* Resolution:  From  ` 380 `  to  ` 1200 ` 
* Size step:  ` 25 ` 
* Maximum images:  ` 3 ` 
* Art-direction:  ` Desktops ` 
* Upload your images one at a time:*  ` pic-about-01.jpg ` 
*  ` pic-article-01.jpg ` 
*  ` pic-article-02.jpg ` 
*  ` pic-article-03.jpg ` 

* Copy the markup for the  ` <img> `  tags and replace your current  ` <img> `  tags with it.
* Download the images and place them into the  ` images `  directory
Here’s an example on how to add different resolutions of the same image
```bash
<img
    sizes="(max-width: 3000px) 40vw, 1200px"
    srcset="
      about-us_icoxoo_c_scale,w_380.jpg 380w,
      about-us_icoxoo_c_scale,w_853.jpg 853w,
      about-us_icoxoo_c_scale,w_1200.jpg 1200w"
    src="about-us_icoxoo_c_scale,w_1200.jpg"
    alt="">

```
 Task URLs  Github information Repo:
* GitHub repository:  ` holbertonschool-web_front_end ` 
* Directory:  ` 0x06-responsive_design ` 
* File:  ` 03-index.html, 03-styles.css ` 
 Self-paced manual review  Panel footer - Controls 
### 4. Create the mobile icon and hide the menu
          mandatory         Progress vs Score  Task Body We want to have a clickable icon that shows and hide our navigation. We don’t want to use JavaScript but find a pure HTML / CSS way. We learned that input type checkbox have a checked - unchecked state. So we are going to use this for our menu.
Using the previous files as the base for this project
Changes to the HTML
Just before the   ` <nav class="navbar-menu"> ` 
* Create an input (which will be not visible)
* Class:  ` menu-btn ` 
* Type:  ` checkbox ` 
* Id:  ` menu-btn ` 

* Create a label
* Class:  ` menu-icon ` 
* For:  ` menu-btn ` 
* In the label create an empty  ` span `  with the  ` navicon `  class.

Changes to the CSS
Inside the   ` /* Navbar `   section, and inside the   ` 767px `   media query
* Create the   ` root `   global selector. We want to override a CSS variable:
* Variable name:  ` nav-item-margin ` , Value:  ` 0 ` 

* In the selector for the   ` navbar-menu `   class
* Property:  ` flex ` , Value:  ` 1 ` 

* Target the   ` nav `   class in   ` header `   class
* Property:  ` flex-direction ` , Value:  ` column `  (for the element of the menu be below each other)
* Property:  ` overflow ` , Value:  ` hidden ` 
* Property:  ` max-height ` , Value:  ` 0 `  (the display property can’t be animated, so we use the height that can be animated)
* Property:  ` transition ` , Value:  ` max-height .2s ease-out ` 

Rendering on screen with max-width: 767px, the check box is the input
 ![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/17e4ace4fe8c91201e0a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220815%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220815T143842Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=4cfc13f427a08feb5a4ef2b658413b4549628831012f1eeeb2d60692ad6a06e3) 

 Task URLs  Github information Repo:
* GitHub repository:  ` holbertonschool-web_front_end ` 
* Directory:  ` 0x06-responsive_design ` 
* File:  ` 04-index.html, 04-styles.css ` 
 Self-paced manual review  Panel footer - Controls 
### 5. Hamburger!
          mandatory         Progress vs Score  Task Body Let’s now, use a little bit of CSS magic to create an “hamburger” icon just with CSS.
Using the previous files as the base for this task:
* Target the   ` menu-icon `   class inside the   ` header `   class
* Property:  ` cursor ` , Value:  ` pointer ` 
* Property:  ` padding ` , Value:  ` 2.5rem ` 
* Property:  ` position ` , Value:  ` relative ` 
* Property:  ` user-select ` , Value:  ` none ` 

* Target the   ` navicon `   class inside the  ` menu-icon `   class which is inside the   ` header `   class
* Property:  ` background ` , Value: point to the  ` color-white `  variable
* Property:  ` display ` , Value:  ` block ` 
* Property:  ` width ` , Value:  ` 2rem ` 
* Property:  ` height ` , Value:  ` .2rem ` 
* Property:  ` position ` , Value:  ` relative ` 
* Property:  ` transition ` , Value:  ` background .2s ease-out ` 

* Target the   ` before `   and   ` after `   pseudo elements of the   ` navicon `   class inside the   ` menu-icon `   class which is inside the   ` header `   class
* Property:  ` content ` , Value: empty string
* Property:  ` display ` , Value:  ` block ` 
* Property:  ` width ` , Value:  ` 100% ` 
* Property:  ` height ` , Value:  ` 100% ` 
* Property:  ` position ` , Value:  ` absolute ` 
* Property:  ` background ` , Value: point to the  ` color-white `  variable
* Property:  ` transition ` , Value:  ` all .2s ease-out ` 

* Target only the   ` before `   pseudo element of the   ` navicon `   class inside the   ` menu-icon `   class which is inside the   ` header `   class
* Property:  ` top ` , Value:  ` .7rem ` 

* Target only the   ` after `   pseudo element of the   ` navicon `   class inside the   ` menu-icon `   class which is inside the   ` header `   class
* Property:  ` top ` , Value:  ` -.7rem ` 

Rendering of the hamburger on max-width: 767px
 ![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/87f845e172312626e0fc.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220815%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220815T143842Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=f158b816c5a20b6ff62cf3a7cb421f959bfffd01cc943f965ab2548bbf007b65) 

 Task URLs  Github information Repo:
* GitHub repository:  ` holbertonschool-web_front_end ` 
* Directory:  ` 0x06-responsive_design ` 
* File:  ` 05-index.html, 05-styles.css ` 
 Self-paced manual review  Panel footer - Controls 
### 6. Add the behavior based on menu-btn state
          mandatory         Progress vs Score  Task Body in your CSS file:
* Create a new comment section  ` /* menu btn */ ` 
* Target  ` menu-btn `  class inside  ` header `  class* Property:  ` display ` , Value:  ` none ` 

* Target  ` navbar-menu `  class when the  ` menu-btn `  class element is checked* Property:  ` display ` , Value:  ` block ` 

* Target   ` nav `   class inside   ` navbar-menu `   class when the   ` menu-btn `   class element is checked
* Property:  ` max-height ` , Value:  ` 100% ` 
* Property:  ` overflow ` , Value:  ` inherit ` 

* At the end of the   ` /* Section HERO `   section, create a new media query for   ` max-width: 767px ` 
* Target the  ` section-hero `  class* Property:  ` margin ` , Value:  ` -0.1rem 0 ` 

* Target the  ` hero-homepage `  class* Property:  ` background-position ` , Value:  ` 85% 0 ` 

* Target the  ` section-body `  class inside  ` section-hero `  class* Property:  ` padding ` , Value:  ` 2rem ` 


Going back to the   ` /* menu btn */ `   section
* Target the  ` navicon `  class inside  ` menu-icon `  class sibling to the  ` menu-btn `  when it is checked and inside  ` header `  class* Property:  ` background ` , Value:  ` transparent ` 

* Target the before state of  ` navicon `  class inside  ` menu-icon `  class sibling to the  ` menu-btn `  when it is checked and inside  ` header `  class element* Property:  ` transform ` , Value:  ` rotate(-45deg) ` 

* Target the after state of  ` navicon `  class inside  ` menu-icon `  class sibling to the  ` menu-btn `  when it is checked and inside  ` header `  class element* Property:  ` transform ` , Value:  ` rotate(45deg) ` 

* Target the before and after states of   ` navicon `   class when inside   ` menu-icon `   class sibling to the   ` menu-btn `   class when it is checked and inside   ` header `   class
* Property:  ` top ` , Value:  ` 0 ` 

* Create a new media query for   ` max-width: 767px ` 
* Target the root and redefine the  ` header-padding `  variable with  ` 2rem 0 0 ` 
* Target  ` header `  class* Property:  ` background ` , Value: point to the  ` color-black `  variable

* Target the  ` header-container `  class* Property:  ` flex-wrap ` , Value:  ` wrap ` 
* Property:  ` padding ` , Value:  ` 0 1.5rem ` 

* Target the  ` menu-icon `  class inside the  ` header `  class* Property:  ` display ` , Value:  ` block ` 


* Create a new media query for   ` max-width: 480px ` 
* Target the  ` header-logo `  class* Property:  ` flex-basis ` , Value:  ` 70% ` 


* Create a new media query with   ` min-width: 481px `   and   ` max-width: 767px ` 
* Target the  ` header-logo `  class* Property:  ` flex-basis ` , Value:  ` 79% ` 


* Find the   ` .header .menu-icon `   selector and add   ` display: none; `   to hide the menu icon when we are on desktop mode.

Rendering on screen with max-width: 767px, when the input is unchecked the menu is not displayed
 ![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/b9f67a5f3bdfdbd4cd88.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220815%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220815T143842Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=2af7c88e8bcad07e93a9b7df1ff95354d21105c834ca0f83d23739e2ddba532c) 

Rendering on screen with max-width: 767 px, when input is checked the menu block is displayed
 ![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/fe0ae0bfb739a19ae933.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220815%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220815T143842Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=b2211051ec09323b73fffc362de34ad7346741c8b1c0f8f06a768ddbb72e117a) 

Rendering on desktop screen, menu icon is not visible
 ![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/aa52c972d075f360f8bc.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220815%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220815T143842Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=0d5c02710c5cff88021cf789642f623a5ed597c5f01c274fc4ca6fa14ec99827) 

 Task URLs  Github information Repo:
* GitHub repository:  ` holbertonschool-web_front_end ` 
* Directory:  ` 0x06-responsive_design ` 
* File:  ` 06-index.html, 06-styles.css ` 
 Self-paced manual review  Panel footer - Controls 
### 7. Make the font size responsive
          mandatory         Progress vs Score  Task Body We have multiple ways to make the typography responsive. The basic way would be to create multiple media queries and set a different font-size. But because we are using REM that are based on 62.5% (defined in the html selector). Changing that value would change proportionally all font sizes.
In your CSS file at the end of the   ` /* Base `   section
* Create a new media query for  ` max-width: 480px ` * Target the  ` html `  element* Property:  ` font-size ` , Value:  ` 57% ` 


* Create a new media query for  ` min-width: 481px `  and  ` max-width: 767px ` * Target the  ` html `  element* Property:  ` font-size ` , Value  ` 60% ` 


This is a simple way to achieve responsive typography. More complex options can also be used to have a more granular control over the font sizes.
 Task URLs  Github information Repo:
* GitHub repository:  ` holbertonschool-web_front_end ` 
* Directory:  ` 0x06-responsive_design ` 
* File:  ` 07-index.html, 07-styles.css ` 
 Self-paced manual review  Panel footer - Controls 
### 8. Improve the "Works" section
          mandatory         Progress vs Score  Task Body in   ` 08-styles.css `  , at the end of the   ` /* Card WORK ` 
* Create a new media query of  ` max-width: 767px ` * Target the  ` card-inner `  class inside the  ` card-work `  class* Property: variable called  ` text-color ` , Value: point to  ` color-white `  variable
* Property:  ` position ` , Value:  ` relative ` 

* Target the  ` card-title `  class inside the  ` card-work `  class* Property:  ` opacity ` , Value:  ` 1 ` 

* Target all  ` a `  tags inside  ` .card-work .card-title `  class:* Property:  ` padding ` , Value:  ` 2rem 1rem 0 1rem ` 


Rendering on screen of max-width: 767px
 ![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/bd8d10a18201a8796172.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220815%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220815T143842Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=a4668a40266e3459b650d78ed363bf5a33adebbd8b5fb9b5bf1fb9aca6cdd322) 

 Task URLs  Github information Repo:
* GitHub repository:  ` holbertonschool-web_front_end ` 
* Directory:  ` 0x06-responsive_design ` 
* File:  ` 08-index.html, 08-styles.css ` 
 Self-paced manual review  Panel footer - Controls 
### 9. Improve the "Footer" section
          mandatory         Progress vs Score  Task Body in   ` 09-styles.css `  , in the   ` /* Footer `   section
* Create a new media query of  ` max-width: 767px ` .* Create the  ` root `  global selector. We want to override a CSS variable:* Variable name:  ` footer-padding ` , Value:  ` 5rem 2rem 1rem ` 

* Target  ` .social.nav `  inside the  ` footer `  class and the  ` footer-nav `  class inside the  ` footer `  class* Property:  ` text-align ` , Value:  ` center ` 

* Target the adjacent  ` li ` to the  ` li `  inside the  ` .social.nav `  and the adjacent  ` li `  to the  ` li `  inside  ` .footer-nav `  (to easily add a left padding starting on the second  ` li ` )* Property:  ` padding-left ` , Value: ` 2rem ` 


Rendering on screen of max-width: 767px
 ![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/a12e272db34a9c4e47e9.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220815%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220815T143842Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=9d833ec712e649b06e54e2fb28154ed43da2f7359bf3d348de4dc7aed94bf021) 

 Task URLs  Github information Repo:
* GitHub repository:  ` holbertonschool-web_front_end ` 
* Directory:  ` 0x06-responsive_design ` 
* File:  ` 09-index.html, 09-styles.css ` 
 Self-paced manual review  Panel footer - Controls 
### 10. Fix the top header background
          mandatory         Progress vs Score  Task Body In   ` 10-index.html `  , in the   ` body `   tag, add the class   ` article-page ` 
In   ` 10-styles.css `  , in the   ` /* Section HERO `   section, just before the media query:
* Target  ` section-hero `  class inside  ` article-page `  class* Property:  ` margin-top ` , Value:  ` -8.5rem ` 
* Property:  ` padding-top ` , Value:  ` 5rem ` 

Rendering of  ` header `  and  ` section-hero `  class elements
 ![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/7a38d40512c0c6edb211.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220815%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220815T143842Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=804da2d96ea8b2eaba8bf7ada676bf8c948f1097df271448dd2378feae4c67ae) 

 Task URLs  Github information Repo:
* GitHub repository:  ` holbertonschool-web_front_end ` 
* Directory:  ` 0x06-responsive_design ` 
* File:  ` 10-index.html, 10-styles.css ` 
 Self-paced manual review  Panel footer - Controls 
[Done with the mandatory tasks? Unlock 1 advanced task now!](https://intranet.hbtn.io/projects/600/unlock_optionals) 

Ready for a  manual review