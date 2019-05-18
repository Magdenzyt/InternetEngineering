import React, { Component } from "react";
import style from "./Main.module.css";
import Picture1 from '../../assets/glowna_1.jpg';
import Picture2 from '../../assets/glowna_2.png';
import Picture3 from '../../assets/glowna_3.jpg';
import Picture4 from '../../assets/glowna_4.jpg';
import { Media } from 'reactstrap';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
const items = [
  {
    src: Picture1,
  },
  {
    src: Picture2,
  },
  {
    src: Picture3,
  },
  {
    src: Picture4,
  }
];
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }
  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img class="d-block mx-auto" height = "500" src={item.src} alt={item.altText}/>
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });
    return (
      <div className={style.text}>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
        <br />
        <br />
        <br />
        <center><h2>
        Welcome to the Irish Dance Academy!
        </h2></center>
        <br />
        <p>
        Our fully qualified and registered teachers run classes in Dublin, Ireland.
        </p>
        </div>
    );
  }
}

export default Main;
