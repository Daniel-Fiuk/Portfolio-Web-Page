---
title: "[2024] Starlight"
draft: false
tags:   
  - Game
  - Stellar_Octopians
socialImage: "Starlight Hero.png"
socialDescription: An action rogue-lite game set in a story-rich world filled with magic and mystery.
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

<div align="center"> 
	<img src="Starlight Hero.png">
</div>

> [!about-the-game] 
> Starlight is an action rogue-lite game set in a story-rich world filled with magic and mystery. The game blends nostalgia with modern technology through its unique visual style, a dynamic soundtrack that adapts to every action, emergent combat customization, and sophisticated procedural level generation. Explore ever-changing dungeons, engage in frenetic combat, and adapt to new and hostile environments. Discover thousands of emergent magical spell combinations, uncover secrets, and conquer this perilous world.

>[!team]
> <h2 align="left"><a href="http://octopians.ca/"> Stellar Octopians </a></h2>
> 
> - **Daniel Fiuk** - Gameplay and Systems Programmer and Procedural Level Designer
> - **Constantine Pallas** - Composer and Light Engineer
> - **Mason Desjarlais** - Writer/Narrative Lead
> - **Rylan Dressler** - VFX Artist
> - **Lilian Anderson** - 3D and Texture Artist
> - **Gavin Cole** - Gameplay Programmer

# Game promo

<div align="center" class="responsive-container">
	<iframe width="100%" height="auto" src="https://www.youtube.com/embed/dHh90Qrhep8?si=hwjFB9C0OcFFvVMM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div> 

# Game awards
<h2 align="left">Gamecon</h2>

Gamecon is an event hosted by the Game Development Students' Association and Faculty at Ontario Tech University. It aims to celebrate creativity and innovation within the Game Development program. Each year, groups of students create a game for the end of the year, which is presented at the event.

In 2024, we won Best Overall Third Year Game and Best Tech for my [[Starlight#My Contributions|Wave Function Collapse Level Generator]] and our [[Starlight#My Contributions|Modular Magic System]].

<div id="content" align="center">
	<div class="widget" style="flex: 1">
		<a href="https://www.gamecon.ca/gamecon2024-winners" target="_blank"><img style="min-width: 15em; max-width: 7.5em" src="BestTech2024.png"></a>
	</div>
	<div class="widget" style="flex: 1">
		<a href="https://www.gamecon.ca/gamecon2024-winners" target="_blank"><img style="min-width: 15em; max-width: 7.5em" src="BestThirdYear2024.png"></a>
	</div>
</div>
<h2 align="center" class="balance" style="text-align: center">
	<a href="https://www.gamecon.ca/about">Learn more at Gamecon.ca!</a>
</h2>

# Check the game out!
<iframe class="dark" frameborder="0" src="https://itch.io/embed/2572251?border_width=0&amp;bg_color=111717&amp;fg_color=eeeeee&amp;link_color=5beeff&amp;border_color=363636" width="100%" height="100%"><a href="https://stellaroctopians.itch.io/starlight">Starlight by StellarOctopians, Lilian Anderson, Mason Desjarlais, Rylan Dressler, Daniel Fiuk, Gavin Cole, StellarOctopians</a></iframe>

<iframe class="light" frameborder="0" src="https://itch.io/embed/2572251?border_width=0&amp;bg_color=faf8f8&amp;link_color=1da6d9" width="100%" height="100%"><a href="https://stellaroctopians.itch.io/starlight">Starlight by StellarOctopians, Lilian Anderson, Mason Desjarlais, Rylan Dressler, Daniel Fiuk, Gavin Cole, StellarOctopians</a></iframe>

# My contributions

<h2 align="left"> 3D Wave Function Collapse Level Generation </h1>
I created a level-generation algorithm based on the principles of Wave Function Collapse. It employs a 3D grid of tiles, beginning with a random placement and eliminating any conflicting tiles. The algorithm selects the position with the fewest potential tiles and randomly places one of them, repeating this process until the generation "collapses."

<h3 align="left">Here's A Demo!</h3>
<div align="center" class="responsive-container">
	<iframe width="100%" height="auto" src="https://www.youtube.com/embed/Go-EoTq4d_4?si=xGmBJesnGB9cfb60" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div> 

<h2 align="left"> The Modular Magic System </h1>
The magic system enables players to alter core spells, crafting powerful combinations that can devastate the playing field through experimentation. Modifications are applied sequentially, with each addition enhancing the spell's base effects.

<h2 align="left"> Art and Modeling </h1>
Using Crocotile3D, I created the player and enemy character models and the tile set used in our level generator. I assembled a few simple assets to populate our levels randomly. I also produced various pixel art pieces to display around the walls of the level as they were generated. You can check them out in my Lospec Gallery or look up at the walls to see a few hanging there.

<h2>Check Out My Lospec!</h2>
<a align="center" href="https://lospec.com/daniel-fiuk" target="_blank"><img style="min-width: 7.5em; max-width: 7.5em" src="Lospec Button.svg"></a>

# Made with Unreal Engine
<p class="dark" align="center"><img src="Unreal Engine Logotype Horizontal White.svg"></p>
<p class="light" align="center"><img src="Unreal Engine Logotype Horizontal Black.svg"></p>

# Gallery
<div id="content" style="flex-flow: row wrap align: center">
	<div class="widget" style="flex: 1; min-width: 20em">
		<img src="StarlightScreenshot-01.png">
	</div>
	<div class="widget" style="flex: 1; min-width: 20em">
		<img src="StarlightScreenshot-02.png">
	</div>
</div>