<!DOCTYPE html>
<html lang="en" class="no-js">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Welcome to my portal</title>
		<meta name="description" content="A perspective slideshow based on Franklin Ta's CSS matrix3d transforms" />
		<meta name="keywords" content="perspective, mockup, slideshow, transform, 3d, matrix, css" />
		<meta name="author" content="Codrops" />
		<link rel="shortcut icon" href="../favicon.ico">
		<link rel="stylesheet" type="text/css" href="css/normalize.css" />
		<link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.2.0/css/font-awesome.min.css" />
		<link rel="stylesheet" type="text/css" href="css/demo.css" />
		<link rel="stylesheet" type="text/css" href="css/animate.css" />
		<link rel="stylesheet" type="text/css" href="css/mockup4.css" />
		<script src="js/modernizr.custom.js"></script>
	</head>
	<body class="demo-4">
		<div class="container">
			
			<div class="codrops-top clearfix">
				
				<span class="right"><a class="codrops-icon codrops-icon-drop" href="login.html"><span>Login</span></a></span>
			</div>
			<div id="wrap" class="wrap">
				<div class="mockup">
					<img class="mockup__img" src="img/mockup4.jpg" />
					<div class="mobile">
						<ul id="slideshow-1" class="slideshow">
							<li class="slideshow__item"><img src="img/small/1.png"/></li>
							<li class="slideshow__item"><img src="img/small/2.png"/></li>
							<li class="slideshow__item"><img src="img/small/3.png"/></li>
							<li class="slideshow__item"><img src="img/small/4.png"/></li>
						</ul>
					</div>
					<div class="screen">
						<ul id="slideshow-2" class="slideshow">
							<li class="slideshow__item current"><img src="img/large/1.png"/></li>
							<li class="slideshow__item"><img src="img/large/2.png"/></li>
							<li class="slideshow__item"><img src="img/large/3.png"/></li>
							<li class="slideshow__item"><img src="img/large/4.png"/></li>
						</ul>
					</div>
					<header class="codrops-header">
						<h1><span>SURESH MUNAGALA
					</span> Slideshow </h1>
					</header>
				</div>
			</div>
			<div class="content">
				<nav class="codrops-demos">
					
					<a class="current-demo" href="myportal.html">Welcome to My Portal</a>
				</nav>
				
			</div>
			
		<script src="js/classie.js"></script>
		<script src="js/main.js"></script>
		<script>
			(function() {
				new Slideshow( document.getElementById( 'slideshow-1' ) );
				setTimeout( function() {
					new Slideshow( document.getElementById( 'slideshow-2' ) );
				}, 1750 );

				/* Mockup responsiveness */
				var body = docElem = window.document.documentElement,
					wrap = document.getElementById( 'wrap' ),
					mockup = wrap.querySelector( '.mockup' ),
					mockupWidth = mockup.offsetWidth;

				scaleMockup();

				function scaleMockup() {
					var wrapWidth = wrap.offsetWidth,
						val = wrapWidth / mockupWidth;

					mockup.style.transform = 'scale3d(' + val + ', ' + val + ', 1)';
				}
				
				window.addEventListener( 'resize', resizeHandler );

				function resizeHandler() {
					function delayed() {
						resize();
						resizeTimeout = null;
					}
					if ( typeof resizeTimeout != 'undefined' ) {
						clearTimeout( resizeTimeout );
					}
					resizeTimeout = setTimeout( delayed, 50 );
				}

				function resize() {
					scaleMockup();
				}
			})();
		</script>
	</body>
</html>
