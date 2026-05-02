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
		 min-width: 10em;
		 max-width: 10em;
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
</style>

<p>Here are the tools, programs, and languages I use on a regular basis and for how long I've been using them.</p>

# Game Engines
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

# Programming Languages
<div id="content" align="center">
	<div class="widget" style="flex: 1;">
		<p  class="yearsDisplay">C Sharp</p>
		<img style="min-width: 10em; max-width: 10em" src="C Sharp Logo.svg" alt="C#">
		<p class="tool-status active">Actively Practiced</p>
		<p class="yearsDisplay"><span class="year-diff" data-start-year="2019"/></p>
	</div>
	<div class="widget" style="flex: 1;">
		<p  class="yearsDisplay">C++</p>
		<img style="min-width: 10em; max-width: 10em" src="C++ Logo.svg" alt="C++">
		<p class="tool-status paused">Practice Paused</p>
		<p class="yearsDisplay"><span class="year-diff" data-start-year="2023"/></p>
	</div>
	<div class="widget" style="flex: 1;">
		<p  class="yearsDisplay">CSS3</p>
		<img style="min-width: 10em; max-width: 10em" src="CSS3 Logo.svg" alt="CSS3">
		<p class="tool-status active">Actively Practiced</p>
		<p class="yearsDisplay"><span class="year-diff" data-start-year="2024"/></p>
	</div>
	<div class="widget" style="flex: 1;">
		<p  class="yearsDisplay">Type Script</p>
		<img style="min-width: 10em; max-width: 10em" src="TypeScript Logo.svg" alt="CSS3">
		<p class="tool-status active">Actively Practiced</p>
		<p class="yearsDisplay"><span class="year-diff" data-start-year="2026"/></p>
	</div>
</div>

# IDEs
<div id="content" align="center">
	<div class="widget" style="flex: 1;">
		<p  class="yearsDisplay">Jet Brains Rider</p>
		<img style="min-width: 10em; max-width: 10em" src="Rider Logo.svg" alt="JetBrains Rider">
		<p class="tool-status active">Actively Practiced</p>
		<p class="yearsDisplay"><span class="year-diff" data-start-year="2024"/></p>
	</div>
	<div class="widget" style="flex: 1;">
		<p  class="yearsDisplay">Visual Studio Community</p>
		<img style="min-width: 10em; max-width: 10em" src="Visual Studio Logo.svg" alt="Visual Studio">
		<p class="tool-status inactive">No Longer In Use</p>
		<p class="yearsDisplay"><span class="year-diff" data-start-year="2019"/></p>
	</div>
	<div class="widget" style="flex: 1;">
		<p  class="yearsDisplay">Visual Studio Code</p>
		<img style="min-width: 10em; max-width: 10em" src="Visual Studio Code Logo.svg" alt="Visual Studio Code">
		<p class="tool-status inactive">No Longer In Use</p>
		<p class="yearsDisplay"><span class="year-diff" data-start-year="2024"/></p>
	</div>
</div>

# Source Control
<div id="content" align="center">
	<div class="widget" style="flex: 1;">
		<p  class="yearsDisplay">GitHub</p>
		<img class="theme-icon-dark" src="GitHub Logo White.svg" alt="GitHub">
		<img class="theme-icon-light" src="GitHub Logo Dark.svg" alt="GitHub">
		<p class="tool-status active">Actively Practiced</p>
		<p class="yearsDisplay"><span class="year-diff" data-start-year="2019"/></p>
	</div>
	<div class="widget" style="flex: 1;">
		<p  class="yearsDisplay">Plastic SCM</p>
		<img style="min-width: 10em; max-width: 10em" src="Plastic SCM Logo.svg" alt="Plastic SCM">
		<p class="tool-status inactive">No Longer In Use</p>
		<p class="yearsDisplay"><span class="year-diff" data-start-year="2024"/></p>
	</div>
</div>

# Art and Design
<div id="content" align="center">
	<div class="widget" style="flex: 1;">
		<p  class="yearsDisplay">Affinity Suite</p>
		<img style="min-width: 10em; max-width: 10em" src="Affinity Logo.svg" alt="Affinity">
		<p class="tool-status active">Actively Practiced</p>
		<p class="yearsDisplay"><span class="year-diff" data-start-year="2024"/></p>
	</div>
	<div class="widget" style="flex: 1;">
		<p  class="yearsDisplay">Aseprite</p>
		<img style="min-width: 10em; max-width: 10em" src="Aseprite Logo.svg" alt="Aseprite">
		<p class="tool-status active">Actively Practiced</p>
		<p class="yearsDisplay"><span class="year-diff" data-start-year="2020"/></p>
	</div>
	<div class="widget" style="flex: 1;">
		<p  class="yearsDisplay">Krita</p>
		<img style="min-width: 10em; max-width: 10em" src="Krita Logo.svg" alt="Krita">
		<p class="tool-status paused">Practice Paused</p>
		<p class="yearsDisplay"><span class="year-diff" data-start-year="2022"/></p>
	</div>
	<div class="widget" style="flex: 1;">
		<p  class="yearsDisplay">Medibang</p>
		<img style="min-width: 10em; max-width: 10em" src="MediBang Paint Logo.svg" alt="MediBang">
		<p class="tool-status paused">Practice Paused</p>
		<p class="yearsDisplay"><span class="year-diff" data-start-year="2026"/></p>
	</div>
</div>

# Modeling
<div id="content" align="center">
	<div class="widget" style="flex: 1;">
		<p  class="yearsDisplay">Blender</p>
		<img style="min-width: 10em; max-width: 10em" src="Blender Logo.svg" alt="Blender">
		<p class="tool-status paused">Practice Paused</p>
		<p class="yearsDisplay"><span class="year-diff" data-start-year="2023"/></p>
	</div>
	<div class="widget" style="flex: 1;">
		<p  class="yearsDisplay">Crocotile 3D</p>
		<img style="min-width: 10em; max-width: 10em" src="Crocotile 3D Logo.png" alt="Crocotile 3D">
		<p class="tool-status paused">Practice Paused</p>
		<p class="yearsDisplay"><span class="year-diff" data-start-year="2023"/></p>
	</div>
	<div class="widget" style="flex: 1;">
		<p  class="yearsDisplay">3DCoat</p>
		<img style="min-width: 10em; max-width: 10em" src="3DCoat Logo.svg" alt="3DCoat">
		<p class="tool-status learning">Actively Learning</p>
		<p class="yearsDisplay"><span class="year-diff" data-start-year="2026"/></p>
	</div>
</div>

# Audio
<div id="content" align="center">
	<div class="widget" style="flex: 1;">
		<p  class="yearsDisplay">Reaper</p>
		<img style="min-width: 10em; max-width: 10em" src="Reaper Logo.svg" alt="Reaper">
		<p class="tool-status learning">Actively Learning</p>
		<p class="yearsDisplay"><span class="year-diff" data-start-year="2023"/></p>
	</div>
	<div class="widget" style="flex: 1;">
		<p  class="yearsDisplay">FLStudio</p>
		<img style="min-width: 10em; max-width: 10em" src="FLStudio Logo.png" alt="FLStudio">
		<p class="tool-status learning">Actively Learning</p>
		<p class="yearsDisplay"><span class="year-diff" data-start-year="2026"/></p>
	</div>
</div>


# Video Editing
<div id="content" align="center">
	<div class="widget" style="flex: 1;">
		<p  class="yearsDisplay">DaVinci Resolve Studio</p>
		<img style="min-width: 10em; max-width: 10em" src="DaVinci Resolve Studio Logo.png" alt="DaVinci Resolve Studio">
		<p class="tool-status learning">Actively Learning</p>
		<p class="yearsDisplay"><span class="year-diff" data-start-year="2025"/></p>
	</div>
	<div class="widget" style="flex: 1;">
		<p  class="yearsDisplay">OBS Studio</p>
		<img style="min-width: 10em; max-width: 10em" src="OBS Studio Logo.png" alt="OBS Studio">
		<p class="tool-status active">Actively Practiced</p>
		<p class="yearsDisplay"><span class="year-diff" data-start-year="2022"/></p>
	</div>
</div>

# Documentation And Project Management
<div id="content" align="center">
	<div class="widget" style="flex: 1;">
		<p  class="yearsDisplay">Obsidian</p>
		<img style="min-width: 10em; max-width: 10em" src="Obsidian Logo.svg" alt="Obsidian">
		<p class="tool-status active">Actively Practiced</p>
		<p class="yearsDisplay"><span class="year-diff" data-start-year="2023"/></p>
	</div>
	<div class="widget" style="flex: 1;">
		<p  class="yearsDisplay">Notion</p>
		<img style="min-width: 10em; max-width: 10em" src="Notion.svg" alt="Notion">
		<p class="tool-status inactive">No Longer In Use</p>
		<p class="yearsDisplay"><span class="year-diff" data-start-year="2024"/></p>
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