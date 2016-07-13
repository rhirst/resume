<!--DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <!--head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Ryan Hirst</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory >

        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/main.css">
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700' rel='stylesheet' type='text/css'>
        <script src="js/vendor/modernizr-2.6.2.min.js"></script>
        <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js"></script>
        <script src="js/main.js"></script>
    </head>
    <body>
		<header>
			<h1>Ryan Hirst</h1>
		</header>
		
		<div id="map-location" data-0="background-image:url(img/BWmap.jpg);opacity:.5;" 
			data-250="background-image:url(img/Cmap.jpg);opacity:1;" data-550="opacity:.5;">
		</div>
		<nav data-0="position:absolute;top:700px;" data-700="position:absolute;top:700px;"
					data-1500="position:absolute; top:1550px;">
			<ul >
				<li><a href="#about">About</a></li>
				<li><a href="#portfolio">Portfolio</a></li>
				<li><a href="#images">Images</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>		
		</nav>
		<article>
			<section id="about">
				<h3>About Ryan</h3>
				<p>I am Ryan Hirst, developer, designer, artist, soccer enthusiast, and amateur cook from Kalamazoo, Michigan.
				I Graduated from Michigan State University in May of 2015 with a degree in Media & Information, specializing in interactive media, and a minor in Computer Science.
				<br><br>
				My time at Michigan State gave me an incredible foundation in coding practices, design, server administration & much more, but I've no intention of stopping there.  Each day is an opportunity to learn something new, and most of my free time is spent either reading up on current tech trends or hacking away on my websites and applications. 
				</p> 
			</section>
			<section id="portfolio">
				<h3>Portfolio</h3>
				<ul class="gallery" >
					<li><a href="views/FlightGame.html"><img alt="Javascript Game" src="img/FlightThumb.png"></a></li>
					<li><a href="https://github.com/rhirst/flightgame"><img alt="portfolio" src="img/flight_git_thumb.png"></a></li>
					<li><a href="http://candidateclash.ryanhirst.com/candidates/index"><img alt="Ruby Application" src="img/CandThumb.png"></a></li>
					<li><a href="https://github.com/rhirst/CandidateClash/tree/master/CandidateClash"><img alt="portfolio" src="img/cand_git_thumb.png"></a></li>
					<li><a href="https://rhirst.github.io/SpartanApp"><img alt="Spartan App" src="img/SpartanThumb.png"></a></li>
				</ul>
			</section>
			<section id="images">
				<h3>Images</h3>
				<ul class="gallery" >
					<li><a href="img/MeinUniverse.jpg"><img alt="portfolio" src="img/MeinUniverseThumb.jpg"></a></li>
					<li><a href="img/FightClubProj.jpg"><img alt="portfolio" src="img/FightClubProjThumb.jpg"></a></li>
					<li><a href="img/HotSauce.png"><img alt="portfolio" src="img/HotSauceThumb.png"></a></li>
					</ul>
			</section>
			<section id="contact">
				<h3>Contact</h3>
					<a href="#contactForm">Send me an email</a><br>
					<a href ="https://www.linkedin.com/pub/ryan-hirst/b6/a33/a69">LinkedIn</a><br>
					<a href = "https://github.com/rhirst">github</a><br><br><br>
				</p>
				
			</section>
		</article>
			<form id="contactForm" action="processForm.php" method="post">

				<h2>Send me an email...</h2>

				<ul>

				  <li>
				    <label for="senderName">Your Name</label>
				    <input type="text" name="senderName" id="senderName" placeholder="Please type your name" required="required" maxlength="40" />
				  </li>

				  <li>
				    <label for="senderEmail">Your Email Address</label>
				    <input type="email" name="senderEmail" id="senderEmail" placeholder="Please type your email address" required="required" maxlength="50" />
				  </li>

				  <li>
				    <label for="message" style="padding-top: .5em;">Your Message</label>
				    <textarea name="message" id="message" placeholder="Please type your message" required="required" cols="80" rows="10" maxlength="10000"></textarea>
				  </li>

				</ul>

				<div id="formButtons">
				  <input type="submit" id="sendMessage" name="sendMessage" value="Send Email" />
				  <input type="button" id="cancel" name="cancel" value="Cancel" />
				</div>

			</form>
		 
			<div id="sendingMessage" class="statusMessage"><p>Sending your message. Please wait...</p></div>
			<div id="successMessage" class="statusMessage"><p>Thanks for sending your message! I'll get back to you shortly.</p></div>
			<div id="failureMessage" class="statusMessage"><p>There was a problem sending your message. Please try again.</p></div>
			<div id="incompleteMessage" class="statusMessage"><p>Please complete all the fields in the form before sending.</p></div>


        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.2.min.js"><\/script>')</script>
        <script src="js/vendor/skrollr.min.js"></script>
		<script src="js/vendor/skrollr.menu.min.js"></script>
		<script src="js/plugins.js"></script>
		<script type="text/javascript">

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
</html-->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Bootstrap 101 Template</title>

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
