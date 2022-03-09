import React from 'react';

function Section1() {
	return(
		<section class="sec_1">
	      <h2>Showcase.</h2>
	      <div>
	        <img src={require("../images/kitchenconcrete.jpg")} />
	        <img src={require("../images/atrium.jpg")} />
	        <img src={require("../images/livingroom.jpg")} />
	        <img src={require("../images/diningroom.jpg")} />
	        <img src={require("../images/bedroom.jpg")} />
	        <img src={require("../images/livingroom2.jpg")} />
	      </div>
	    </section>
	)
}

export default Section1;