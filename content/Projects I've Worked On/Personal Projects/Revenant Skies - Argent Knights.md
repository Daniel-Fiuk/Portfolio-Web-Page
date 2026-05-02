---
title: Revenant Skies - Argent Knights
draft: false
tags:   
  - Game
socialImage: "ProjectAngelsHero.png"
socialDescription: An arcade first-person shooter and combat flight simulation hybrid.
---
<style>
	#content {
		display: flex;
		flex-flow: row wrap;
		flex-direction: row;
		margin: 0% 2.5%;
	}
	
	.widget {
	  flex-wrap: wrap;
	  margin: 2.5% 2.5%;
	}
	
	.text {
		white-space: wrap;
		margin: 5% 2.5%;
	}
	
	.balance {
		 text-wrap: pretty;
		 hyphens: none;
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
	
	.dark{  
		 display: block;  
	}  
	  
	.light {  
		 display: none;  
	}  
	  
	:root[saved-theme="light"] {  
		  .dark{  
		    display: none;  
		  }  
		  
		  .light {  
		    display: block;  
		  }  
	 }
</style>

<img align="center" src="Revenant Skies - Argent Knights Hero.png">

> [!about-the-game] 
> <p class="balance">Inspired by IPs such as <a href="https://www.ea.com/en-ca/games/titanfall">Titanfall</a>, <a href="https://acecombat.jp/en/">Ace Combat</a>, <a href="https://www.ea.com/games/battlefield?isLocalized=true">Battle Field</a>, <a href="https://www.konami.com/mg/us/en/">Metal Gear Solid</a>, and <a href="https://store.steampowered.com/app/895870/Project_Wingman/">Project Wingman</a>. Revenant Skies: Argent Knights is an arcade first-person shooter and combat flight simulation hybrid that combines the gameplay of classic Air Combat games and the mechanics of *Titan Fall* and *Battle Field* to create a unique twist on the vehicle combat genre. The game focuses on what are called “Angels.” Skilled pilots who fight both in the cockpit of their airframe as well as alongside it in open air space, jumping from aircraft to aircraft, performing aerial combat and sabotage.</p>

# Prototype 6.4 is out!
<p class="balance">The 6.4 Prototype is now live up on my Itch! Now that I've completed the base setup I need, I can start working on weapons, which I plan to include in the next major update to the game. 😍</p>

<p class="balance">Recent Additions and Updates Include:</p>
<ul>  
	<li>New postprocessing enabled HUD shader</li>
	<li>Added targets that can be selected and tracked by the camera</li>
</ul>

<div align="center" class="responsive-container"> 
	<iframe width="100%" height="auto" src="https://www.youtube.com/embed/psZ4rYWdLCo?si=CkvML_py8Cln9xUP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div> 

# Check out the prototype over on Itch!
<iframe class="dark" frameborder="0" src="https://itch.io/embed/3487616?border_width=0&amp;bg_color=111717&amp;fg_color=ebebec&amp;link_color=5beeff&amp;border_color=111717" width="100%" height="100%"><a href="https://daniel-fiuk.itch.io/project-angels-prototype">Project Angels Prototype by Daniel Fiuk</a></iframe>

<iframe class="light" frameborder="0" src="https://itch.io/embed/3487616?border_width=0&amp;bg_color=faf8f8&amp;link_color=1da6d9" width="100%" height="100%"><a href="https://daniel-fiuk.itch.io/project-angels-prototype">Project Angels Prototype by Daniel Fiuk</a></iframe>

# Come say hi!
<div id="content" style="flex-flow: row wrap">
	<div class="text" style="flex: 5; min-width: 15em">
		Here I have a discord server where I try to regularly post my progress on the game. It's also a place for me to hear from you! Whether you're interested in the project or share my love for arcade air combat games, I'd love for you to come by and say hi!
		<img src="Colored Wing.svg">
	</div>
	<div class="widget" style="flex: 3;  min-width: 20em; min-height: 25em">
		<iframe src="https://discord.com/widget?id=1352041783013675150&theme=dark" width="100%" height="100%" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
	</div>
</div>

# My key pillars to game development.

## Custom Editors and Developer Tools
When designing large, complex models for <a href="http://octopians.ca/">Stellar Octopians</a>, I needed to manipulate many variables to optimize the systems for the best outcomes. I believe that having a flexible, well-organized, and clearly labeled toolset is essential, not only for myself but also for others who may work with my systems or need to modify them. I've found that when certain values become redundant or inactive, using compartmentalization, minimalism, and hiding unused variables can significantly increase my ability to navigate my tools efficiently.

<div align="center" class="responsive-container"> 
	<iframe width="100%" height="auto" src="https://www.youtube.com/embed/gTCNh1u9Tqo?si=vXwNvKlb2ngw-aM-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div> 

Through this project, I am able to experiment and practice making custom Unity Editors, Property Drawers, Windows, and Custom Functions to expedite development. 

## Physics And Game Feel
By following a couple tutorials on how to replicate the physics of an aircraft. I started with base and began implementing my own changes and spin. 

I'm loosely following along with a tutorial series made by <a href = "https://www.youtube.com/@Vazgriz">Vazgriz</a> which you can find <a href = "https://youtu.be/7vAHo2B1zLc?si=Nkk37TVWBEyjC8FT">here</a>. So far, I have only completed a working flight model with my own camera implementation with derived HUD manager.

I have collectively, a few hundred hours on Ace Combat and Project Wingman combined and have fallen in love with how the games make you feel. Despite this however, I wanted to take the arcade nature of the controls and physics and blend in some realism to give this game a unique feel to the aircraft. 

# What else have I worked on?

## Modeling And Animation
Through my time working with blender, I've been able to compile some simple assets that I may later animate and fully implement into my game. Here I've become familiar with the basic workflows with Blender including editing objects and meshes, as well as creating and animating rigs.

<div id="content" style="flex-flow: row wrap align: center">
	<div class="widget" style="flex: 1; min-width: 20em">
		<div class="responsive-container"> <iframe title="My Airbase, Final Diorama for Modeling 1" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/32b7e6c2475245279048e65f7b673635/embed?ui_theme=dark"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/my-airbase-final-diorama-for-modeling-1-32b7e6c2475245279048e65f7b673635?utm_medium=embed&utm_campaign=share-popup&utm_content=32b7e6c2475245279048e65f7b673635" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> My Airbase, Final Diorama for Modeling 1 </a> by <a href="https://sketchfab.com/Daniel.Fiuk?utm_medium=embed&utm_campaign=share-popup&utm_content=32b7e6c2475245279048e65f7b673635" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Daniel Fiuk </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=32b7e6c2475245279048e65f7b673635" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>
	</div>
	<div class="widget" style="flex: 1; min-width: 20em">
		<div class="responsive-container" align="center"> <iframe title="Fighter Jet" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/f170b0cb46964c338373d94166e435d0/embed?transparent=1&ui_theme=dark"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/fighter-jet-f170b0cb46964c338373d94166e435d0?utm_medium=embed&utm_campaign=share-popup&utm_content=f170b0cb46964c338373d94166e435d0" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Fighter Jet </a> by <a href="https://sketchfab.com/Daniel.Fiuk?utm_medium=embed&utm_campaign=share-popup&utm_content=f170b0cb46964c338373d94166e435d0" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Daniel Fiuk </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=f170b0cb46964c338373d94166e435d0" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>
	</div>
	<div class="widget" style="flex: 1; min-width: 20em">
		<div class="responsive-container"> <iframe title="Pilot Head" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/f7293fc5b3304be0ba9664f0810295a3/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/pilot-head-f7293fc5b3304be0ba9664f0810295a3?utm_medium=embed&utm_campaign=share-popup&utm_content=f7293fc5b3304be0ba9664f0810295a3" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Pilot Head </a> by <a href="https://sketchfab.com/Daniel.Fiuk?utm_medium=embed&utm_campaign=share-popup&utm_content=f7293fc5b3304be0ba9664f0810295a3" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Daniel Fiuk </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=f7293fc5b3304be0ba9664f0810295a3" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>
	</div>
</div>

<h2>Check Out My Sketchfab!</h2>
<a align="center" href="https://sketchfab.com/Daniel.Fiuk" target="_blank"><img style="min-width: 7.5em; max-width: 7.5em" src="Sketchfab Button.svg"></a>

# Made With Unity
<p class="dark" align="center"><img src="Unity Logo White.svg"></p>
<p class="light" align="center"><img src="Unity Logo Black.svg"></p>
