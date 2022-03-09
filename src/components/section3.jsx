import React from 'react';

function Section3() {
	return(
		<section>
	      <h2>Designers.</h2>
	      <p>
	        The best team in the world.<br /><br /> We are lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
	      </p>
	      <p class="p2">
	        Our designers are thoughtfully chosen:
	      </p>
	      <div class="people">
	        <div class="box">
	          <img src={require("../images/team2.jpg")} />
	          <div class="about">
	            <h3>John Doe</h3>
	            <h4>CEO & Founder</h4>
	            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
	          </div>
	        </div>
	        <div class="box">
	          <img src={require("../images/team1.jpg")} />
	          <div class="about">
	            <h3>Jane Doe</h3>
	            <h4>Designer</h4>
	            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
	          </div>  
	        </div>
	        <div class="box">
	          <img src={require("../images/team3.jpg")} />
	          <div class="about">
	            <h3>Mike Ross</h3>
	            <h4>Architect</h4>
	            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
	          </div>
	        </div>
	      </div>
	    </section>
	)
}

export default Section3;