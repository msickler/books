import React from 'react';
import Scroll from 'react-scroll';

let Link       = Scroll.Link;
let Events     = Scroll.Events;
let scroll     = Scroll.animateScroll;
let scrollSpy  = Scroll.scrollSpy;

class Section extends React.Component {

  componentDidMount() {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });
    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });
    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  scrollToBottom() {
    scroll.scrollToBottom();
  }

  scrollTo() {
    scroll.scrollTo(100);
  }

  render() {
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
};

export default Section;
