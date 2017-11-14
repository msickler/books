// ES6 Imports
import React, { Component } from 'react';
import Scroll from 'react-scroll'; // Imports all Mixins
import {scroller} from 'react-scroll'; //Imports scroller mixin, can use as scroller.scrollTo()
import './NavBar.css';



// Or Access Link,Element,etc as follows
let Link       = Scroll.Link;
let Element    = Scroll.Element;
let Events     = Scroll.Events;
let scroll     = Scroll.animateScroll;
let scrollSpy  = Scroll.scrollSpy;


var Section = React.createClass({
  componentDidMount: function() {

    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();

  },
  componentWillUnmount: function() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  },
  scrollToTop: function() {
    scroll.scrollToTop();
  },
  scrollToBottom: function() {
    scroll.scrollToBottom();
  },
  scrollTo: function() {
    scroll.scrollTo(100);
  },

  render: function () {
  	return (
      <div>
        <Link className="navBarLink" to="bookForm" spy={true} smooth={true} offset={50} duration={500} >
          Add
        </Link>
        <Link className="navBarLink" to="bookEdit" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
          Edit
        </Link>
        <Link className="navBarLink" to="bookDelete" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
          Delete
        </Link>
        <a className="navBarLink" onClick={this.scrollToTop}>Up</a>
        <a className="navBarLink" onClick={this.scrollToBottom}>Down</a>
        </div>
	);
  }
});

export default Section
