---
title: Welcome!
draft: false
tags: []
socialImage: "og-image.png"
socialDescription: Hey! I'm a Gameplay Programmer and university graduate from OTU!
---

<style>
		#content {  
		display: flex;  
		flex-flow: row wrap;  
		flex-direction: row;  
		margin: 0% 2.5%;  
	}  
	  
	.web-icon {  
		flex-shrink: 1.15;  
	}  
	  
	.web-title {  
		white-space: nowrap;  
		text-align: right;  
		line-height: 0.5rem;  
		margin-left: 0.5rem;  
		margin-right: 0.5rem;  
	}  
	  
	.widget {  
		flex: 1 1 250px;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}  

	#content {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	  
	.text {  
		white-space: wrap;  
		margin: 5% 2.5%;  
	}  
	  
	.balance {  
		text-wrap: pretty;  
		hyphens: none;  
	}  
	  
	.hero {  
		margin: 0% 5%;  
	}  
	  
	.responsive-container {  
		position: relative;  
		width: 100%;  
		padding-bottom: 56.25%;  
		height: 0;  
	}  
	  
	.responsive-container iframe {  
		position: absolute;  
		top: 0;  
		left: 0;  
		width: 100%;  
		height: 100%;  
	}  
	  
	img.theme-icon-light {
		display: none;
	}
	
	img.theme-icon-dark,
	img.theme-icon-light {
		 min-height: 10em;
		 max-height: 10em;
	}
	
	html[saved-theme="dark"] img.theme-icon-dark { display: block !important; }
	html[saved-theme="dark"] img.theme-icon-light { display: none !important; }
	html[saved-theme="light"] img.theme-icon-dark { display: none !important; }
	html[saved-theme="light"] img.theme-icon-light { display: block !important; }
	
	.yearsDisplay {
		font-size: 1.2rem;
		font-weight: bold;
	}

	.tool-status {
		display: inline-block;
		margin: 0.25rem 0 0.5rem 0;
		padding: 0.25rem 0.65rem;
		border-radius: 999px;
		 font-size: 0.8rem;
		 font-weight: 600;
		 line-height: 1.2;
	}
	
	.tool-status.learning {
		 background: rgba(70, 130, 255, 0.15);
		 color: #6ea8ff;
		 border: 1px solid rgba(70, 130, 255, 0.35);
	}
	
	.tool-status.active {
		 background: rgba(60, 180, 120, 0.15);
		 color: #7fdfaa;
		 border: 1px solid rgba(60, 180, 120, 0.35);
	}

	.tool-status.paused {
		 background: rgba(180, 180, 70, 0.15);
		 color: #dddd9b;
		 border: 1px solid rgba(180, 180, 70, 0.35);
	}	
	.tool-status.inactive {
		 background: rgba(255, 120, 120, 0.15);
		 color: #ff9b9b;
		 border: 1px solid rgba(255, 120, 120, 0.35);
	}

	.project-thumb {
		 display: inline-block;
		 overflow: none;
		 border-radius: 0.5rem;
	}
	
	.project-thumb img {
		 display: block;
		 transition: transform 180ms ease, box-shadow 180ms ease;
		 transform-origin: center;
	}
	
	.project-thumb:hover img,
	.project-thumb:focus-visible img {
		 transform: scale(1.04);
	}
</style>

# Hello, nice to meet you!
<div id="content" style="flex-flow: row wrap">
	<div class="widget" style="flex: 3; min-width: 15em">
		<a class="project-thumb" href="About Me"><img src="HeadshotSquare.webp" alt="Professional Headshot. That's Me!"></a>
	</div>
	<div class="text" style="flex: 5;  min-width: 25em">
		<p class="balance">
			I am a gameplay programmer and game designer who specializes in C# and C++, developing gameplay systems, creating algorithms, and designing tools for developers and artists in Unity and Unreal Engine.
		</p>
		<h2 class="balance" style="text-align: center">
			<a href="About Me">Get to know me more!</a>
		</h2>
	</div>
</div>

# Check out what I'm working on!
## Current Passion Project
<div class="hero">
	<a class="project-thumb" href="Revenant Skies - Argent Knights"><img align="center" src="Revenant Skies - Argent Knights Hero.png"></a>
	<ul>  
		<li>A culmination of my experience working on games thus far.</li>
		<li>Emphasizing game development best practices. Organization and documentation.</li>
		<li>A project of my passion/obsession. 💖</li>
	</ul>
</div>

## Side Projects

<div class="hero">
	<a class="project-thumb" href="Simple Map For Obsidian"><img align="center" src="Simple Map Hero.svg" width="1500px"></a>
	<ul>  
		<li>Interactive Maps for Obsidian.</li>
		<li>Organize your notes into pins on a custom map.</li>
	</ul>
</div>

## University Projects
<div id="content">
	<div class="hero" style="flex: 1; min-width: 18em;">
		<a class="project-thumb" href="Daybreak"><img align="center" src="Daybreak Hero.png"></a>
		<ul>  
			<li>Procedural level generation using layered noise functions.</li>
			<li>Player controller and AI movement with adherence to 3D terrain.</li>
		</ul>
	</div>
	<div class="hero" style="flex: 1; min-width: 18em;" >
		<a class="project-thumb" href="Starlight"><img align="center" src="Starlight Hero.png"></a>
		<ul>  
			<li>Procedural level generation derived from wave function collapse.</li>
			<li>Modular mechanics systems that allow for player expression.</li>
		</ul>
	</div>
	<div class="hero" style="flex: 1; min-width: 18em;" >
		<a class="project-thumb" href="Moonset"><img align="center" src="Moonset Hero.png"></a>
		<ul>  
			<li>Fast and fluid movement system.</li>
			<li>Level design that emphasizes speed and maneuverability.</li>
		</ul>
	</div>
	<div class="hero" style="flex: 1; min-width: 18em;" >
		<a class="project-thumb" href="The 437"><img align="center" src="The 437 Hero.png"></a>
		<ul>  
			<li>Enemy logic state machines.</li>
			<li>2D navigation and layered environmental interaction.</li>
		</ul>
	</div>
</div>

# These are some of the tools I use!
## Game Engines
<div id="content" align="center">
	<div class="widget" style="flex: 1;">
		<p  class="yearsDisplay">Unity</p>
		<img class="theme-icon-dark" src="Unity Cube White.svg" alt="Unity Engine">
		<img class="theme-icon-light" src="Unity Cube Black.svg" alt="Unity Engine">
		<p class="tool-status active">Actively Practiced</p>
		<p class="yearsDisplay"><span class="year-diff" data-start-year="2019"/></p>
	</div>
	<div class="widget" style="flex: 1;">
		<p  class="yearsDisplay">Unreal Engine</p>
		<img class="theme-icon-dark" src="Unreal Engine Icon White.svg" alt="Unreal Engine">
		<img class="theme-icon-light" src="Unreal Engine Icon Black.svg" alt="Unreal Engine">
		<p class="tool-status paused">Practice Paused</p>
		<p class="yearsDisplay"><span class="year-diff" data-start-year="2023"/></p>
	</div>
</div>

<script>  
	const spans = document.querySelectorAll('.year-diff');  
	const currentYear = new Date().getFullYear();  
		  
	spans.forEach(span => {  
		const startYear = parseInt(span.dataset.startYear);  
		if (!isNaN(startYear)) {  
			const difference = currentYear - startYear;  
			if (difference === 1) { 
				span.textContent = difference + ' year of experience'; 
			} 
			else { 
				span.textContent = difference + ' years of experience'; 
			}
		}  
	});  
</script>

<h2 class="balance" style="text-align: center">
	<a href="Tools">See more tools I regularly use!</a>
</h2>

# Here's how you can contact me!
<div id="content" align="center" style="flex: 1; min-width: 5em;">
	<div class="widget" style="flex: 1">
		<a class="project-thumb" href="https://discordapp.com/users/634863506319212550" target="_blank"><img style="min-width: 7.5em; max-width: 7.5em" src="Discord Button.svg"></a>
	</div>
	<div class="widget" style="flex: 1">
		<a class="project-thumb" href="mailto:danielfiuk@pm.me" target="_blank"><img style="min-width: 7.5em; max-width: 7.5em" src="Proton Mail Button.svg"></a>
	</div>
	<div class="widget" style="flex: 1">
		<a class="project-thumb" href="https://x.com/DanielFiuk" target="_blank"><img style="min-width: 7.5em; max-width: 7.5em" src="X Button.svg"></a>
	</div>
	<div class="widget" style="flex: 1">
		<a class="project-thumb" href="https://www.linkedin.com/in/danielfiuk" target="_blank"><img style="min-width: 7.5em; max-width: 7.5em" src="LinkedIn Button.svg"></a>
	</div>
	<div class="widget" style="flex: 1">
		<a class="project-thumb" href="https://bsky.app/profile/danielfiuk.bsky.social" target="_blank"><img style="min-width: 7.5em; max-width: 7.5em" src="Bluesky Button.svg"></a>
	</div>
</div>

# Check me out over on my other platforms!
<div id="content" align="center" style="flex: 1; min-width: 5em;">
	<div class="widget" style="flex: 1">
		<a class="project-thumb" href="https://github.com/Daniel-Fiuk" target="_blank"><img style="min-width: 7.5em; max-width: 7.5em" src="GitHub Button.svg"></a>
	</div>
	<div class="widget" style="flex: 1">
		<a class="project-thumb" href="https://danielfiuk.itch.io/" target="_blank"><img style="min-width: 7.5em; max-width: 7.5em" src="Itch Button.svg"></a>
	</div>
	<div class="widget" style="flex: 1">
		<a class="project-thumb" href="https://www.youtube.com/@DanielFiuk" target="_blank"><img style="min-width: 7.5em; max-width: 7.5em" src="YouTube Button.svg"></a>
	</div>
	<div class="widget" style="flex: 1">
		<a class="project-thumb" href="https://lospec.com/danielfiuk" target="_blank"><img style="min-width: 7.5em; max-width: 7.5em" src="Lospec Button.svg"></a>
	</div>
	<div class="widget" style="flex: 1">
		<a class="project-thumb" href="https://sketchfab.com/DanielFiuk" target="_blank"><img style="min-width: 7.5em; max-width: 7.5em" src="Sketchfab Button.svg"></a>
	</div>
</div>