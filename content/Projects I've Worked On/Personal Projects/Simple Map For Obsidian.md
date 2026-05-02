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

<img align="center" src="Simple Map Hero.svg">

> [!about-the-plugin] 
> Simple Map is a free plugin for <a href="https://obsidian.md" target="_blank">Obsidian</a> that adds the ability for users to intuitively create custom interactive maps to pin their notes upon. 
> - It was designed specifically with SVG maps in mind for their quality retention at high zoom levels, but is also compatible with PNG, JPG (and JPEG), WEBP, and GIF for animated maps. 
> - Simple Map supports wrapping infinitely in both axis for seamless world maps. 
> - It features interactive pins users can drag and drop around the map with the option to preview their notes from the map. You can even give notes your own custom icons!
> - Provides options to filter what pins appear on which maps with useful search tools to find notes on your maps.
# Why did I make a plugin?
While working on [[Revenant Skies - Argent Knights]], I have been contributing to a unified game design document where I write down my plans for gameplay, art direction, audio design, and most relevant to this plugin, game narrative. For my notes I use <a href="https://obsidian.md" target="_blank">Obsidian</a>, which itself hosts many useful addons and plugins for multitudes of use cases from interactive timelines to file sorting. However, when I checked to see if I could get an interactive map of my game world with pins I could use to visually pin my maps on a map, I couldn't find anything that had both the features I wanted and was easy and intuitive to set up and use. There fore, I set out to make my own plugin. The 1.0.0 build of this plugin has already released and is public, right now!
<a href="https://github.com/Daniel-Fiuk/simple-map/releases/tag/1.0.0" target="_blank"><h2 align="center">Get The Plugin Now!</h2></a>
# How to create your own map
Add the 'simple-map' code block to your note and give it an image for your desired map.
### simple-map code block
````simple-map-code-block
```simple-map
map: world map.svg
```
````
This plugin is explicitly designed for use with SVG files for the best image quality and sharpness at higher zoom levels, but is also compatible with the file types PNG, JPG, JPEG, WEBP, and GIF.
## Panning and zooming
Using the mouse, you can click and drag to pan around your map. By scrolling with the mouse wheel, you can zoom in and out of your map. The toolbar gives you the ability to define how fast you zoom by updating the zoom step increment. Using the toolbar, you can also zoom in and out of the center of your current view and reset your zoom back to its initial position and zoom level.

You can set a default pan and zoom for your map, as well as the zoom range for how far in and out you can zoom by defining these parameters.
### simple-map code block
````simple-map-code-block
```simple-map
map: world map.svg
zoom range: (1, 100)
default zoom increment: 2
default zoom level: 2
default location: (0, 316)
```
````
<div align="center" style="display:flex;flex-wrap:wrap;justify-content:center;gap:12px;">
  <img src="Pan And Zoom.gif" alt="Pan and zoom demo">
</div>

## Infinite wrapping maps
You can set up a repeating map by simply defining a **repeat** parameter for horizontal, vertical, or even both axes wrapping.
### simple-map code block
````simple-map-code-block
```simple-map
map: world map.svg
repeat: x
```
````
<div id="content" align="center">
	<div class="widget" style="flex: 1; min-width: 18em;">
		<img src="Horizontal Scrolling.gif" alt="Horizontal scroll demo">
	</div>
	<div class="widget" style="flex: 1; min-width: 18em;" >
		<img src="Vertical Scrolling.gif" alt="Vertical scroll demo">
	</div>
	<div class="widget" style="flex: 1; min-width: 18em;" >
		<img src="Both Scrolling.gif" alt="Both scroll demo">
	</div>
</div>

## Coordinate Customization
By default the map assumes a default latitude and longitude for your map. (-90, 90) latitude and (0, 360) longitude. This scales with the aspect ratio of your map by default so that a coordinate of (90, 0) would correspond to the very top left corner of your map, and (-90, 360) would map to the very bottom right. You can customize your coordinate space by defining the latitude and longitude ranges, as well as define a custom prime meridian for your worlds. 
### simple-map code block
````simple-map-code-block
```simple-map
map: world map.svg
latitude range: (-90, 90)
longitude range: (0, 360)
prime meridian offset: (0, 222.75)
```
````
## Pins
To add a pin to your map, simply add sm-location to your frontmatter.
### pin note front matter
```note-frontmatter
---
sm-location: (lat, lng)
---
```
## Pin Filters
You can filter for which pins are rendered to a map by defining a map ID. Think of this like a lock and key. A pin will only appear on maps where it has a matching ID.
### simple-map code block
````simple-map-code-block
```simple-map
map: world map.svg
id: My Map ID
```
````
### pin note front matter
```note-frontmatter
---
sm-location: (lat, lng)
sm-id: My Map ID
---
```
## Pin Icon Customization
You can change the pin icons by uploading your own from the vault, same as you would your map.
### pin note front matter
```note-frontmatter
---
sm-location: (lat, lng)
sm-pin-icon: my pin icon.svg
---
```
You can also change the size of the pins that appear on your map by setting the pin size parameter on your map. This parameter utilizes standard css to define the width of your pins, and auto adjusts the height to maintain the aspect ratio.
### simple-map code block
````simple-map-code-block
```simple-map
map: world map.svg
pin size: 24px
```
````
## Preview Notes
You can preview your notes directly from your map with images and functioning links.
<div align="center" style="display:flex;flex-wrap:wrap;justify-content:center;gap:12px;">
	<img src="Previews.gif" alt="Previews demo">
</div>

## Filter using Search
You can search through your pins by simply typing in the search bar. Names, Tags, Alieses, and all other frontmatter properties you create can be used as filters to find specific pins on your map. Using quotation marks and "and / &&" or "or / ||" key words, you can search for multiple filters/queries. (i.e. "fation" or "building", "landmark" and "battle", etc.)
<div align="center" style="display:flex;flex-wrap:wrap;justify-content:center;gap:12px;">
  <img src="Search Bar.gif" alt="Previews demo">
</div>
<a href="https://github.com/Daniel-Fiuk/simple-map/releases/tag/1.0.0" target="_blank"><h2 align="center">Get The Plugin Now!</h2></a>