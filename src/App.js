import React from 'react';
import './App.css';

function App() {
  return (
    <div className="wrapper">
		<h1>Hello World!</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nulla eros, ullamcorper quis accumsan sed, semper a orci. </p>
		<div className="picFrame">
			<img src="/img/temari.jpg" alt="alternative"/>
		</div>
		<p>Duis non eros sem. Praesent hendrerit vel libero ut tempus. Aenean nec tortor efficitur, ultrices sapien non, rutrum urna. Cras tortor augue, lacinia id magna mattis, feugiat imperdiet ex. Etiam in libero nec dolor feugiat sagittis sit amet sed ante. Duis quis nibh lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed et tempor diam. Nullam sit amet suscipit ipsum. Ut ac purus et purus laoreet porttitor. Curabitur interdum lobortis vestibulum. Sed nec magna eu ipsum ultricies vehicula. Proin elementum velit quis est sagittis, condimentum elementum lacus commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc laoreet ornare sapien, eget vehicula tellus vulputate in. Curabitur non erat id metus sodales porta.</p>
		<div>
			<h4>Footer Two</h4>
			{/*wala nang logo*/}
			<p>Copyright 2020, All rights reserved</p>
		</div>
	</div>
  );
}

export default App; 
