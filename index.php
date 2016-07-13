<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Ryan Hirst</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/custom.css" rel="stylesheet">
    <script src="js/vendor/modernizr-2.6.2.min.js"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <div class="header-wrap">
      	<div class="container header-black">
            <div class="row">
        		<div class="col-xs-12 header-skyline">
                    <div class="header-title">
                        <h1> Ryan Hirst<br> Web Developer</h1>
                    </div>
        		</div>
            </div>
      	</div>
    </div>
    <div id="map-location" class="hidden-xs" data-0="background-image:url(img/BWmap.jpg);opacity:.5;" 
        data-150="background-image:url(img/Cmap.jpg);opacity:1;" data-550="opacity:.5;">
    </div>
    <div class="article container">
        <div class="row">
            <div class="col-sm-2 hidden">
                <nav data-0="position:absolute;top:00px;" data-700="position:absolute;top:400px;"
                            data-1500="position:absolute; top:1050px;">
                    <ul >
                        <li><a href="#about">About</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#images">Images</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>       
                </nav>
            </div>
            <div class="col-sm-12 col-xs-12">
                <div class="row">
                    <section id="about">
                        <div class="col-xs-12 col-sm-10 ">
                            <h3>About Ryan</h3>
                            <p>I am Ryan Hirst, developer, designer, artist, soccer enthusiast, and amateur cook from Kalamazoo, Michigan.
                            I Graduated from Michigan State University in May of 2015 with a degree in Media & Information, specializing in interactive media, and a minor in Computer Science.
                            <br><br>
                            My time at Michigan State gave me an incredible foundation in coding practices, design, server administration & much more, but I've no intention of stopping there.  Each day is an opportunity to learn something new, and most of my free time is spent either reading up on current tech trends or hacking away on my websites and applications. 
                            </p> 
                        </div>
                        <div class="col-sm-2 hidden-xs">
                        </div>
                    </section>
                </div>
                <div class="row">
                    <section id="portfolio">
                        <div class="col-xs-12">
                            <h3>Portfolio</h3>
                            <ul class="gallery" >
                                <li><a href="views/FlightGame.html"><img alt="Javascript Game" src="img/FlightThumb.png"></a></li>
                                <li><a href="https://github.com/rhirst/flightgame"><img alt="portfolio" src="img/flight_git_thumb.png"></a></li>
                                <li><a href="http://candidateclash.ryanhirst.com/candidates/index"><img alt="Ruby Application" src="img/CandThumb.png"></a></li>
                                <li><a href="https://github.com/rhirst/CandidateClash/tree/master/CandidateClash"><img alt="portfolio" src="img/cand_git_thumb.png"></a></li>
                                <li><a href="https://rhirst.github.io/SpartanApp"><img alt="Spartan App" src="img/SpartanThumb.png"></a></li>
                            </ul>
                        </div>
                    </section>
                </div>
                <div class="row hidden">
                    <section id="images">
                        <h3>Images</h3>
                        <ul class="gallery" >
                            <li><a href="img/MeinUniverse.jpg"><img alt="portfolio" src="img/MeinUniverseThumb.jpg"></a></li>
                            <li><a href="img/FightClubProj.jpg"><img alt="portfolio" src="img/FightClubProjThumb.jpg"></a></li>
                            <li><a href="img/HotSauce.png"><img alt="portfolio" src="img/HotSauceThumb.png"></a></li>
                        </ul>
                    </section>
                </div>
                <div class="row">
                    <section id="contact">
                        <div class="col-xs-12">
                            <h3>Contact</h3>
                                <a href="mailto:r.hirst18@gmail.com">Send me an email</a><br>
                                <a href ="https://www.linkedin.com/pub/ryan-hirst/b6/a33/a69">LinkedIn</a><br>
                                <a href = "https://github.com/rhirst">github</a><br><br><br>
                            </p>
                        </div>                
                    </section>
                </div>
            </div>
        </div>
    </div>
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
    <script src="js/vendor/skrollr.min.js"></script>
    <script src="js/vendor/skrollr.menu.min.js"></script>
    <script>
    if ($(window).width() > 600) {
        
        var s = skrollr.init();
        
        skrollr.menu.init(s, {
        //skrollr will smoothly animate to the new position using `animateTo`.
        animate: true,

        //The easing function to use.
        easing: 'sqrt',

        //How long the animation should take in ms.
        duration: function(currentTop, targetTop) {
            //By default, the duration is hardcoded at 500ms.
            return 500;
        },
    });
    }
    </script>
  </body>
</html>
