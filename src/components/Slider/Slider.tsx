import { useEffect, useRef, useState } from 'react';
import './Slider.scss';
import classNames from 'classnames';

const BANNERS = [
  'banner-phones.png',
  'banner-tablets.png',
  'banner-accessories.png',
];

const BUTTONS = [0, 1, 2];
const FIRST_SLIDE_INDEX = 0;
const LAST_SLIDE_INDEX = 2;

export const Slider = () => {
  const [slider, setSlider] = useState(0);
  const [imgWidth, setImgWidth] = useState(0);
  const wrapper = useRef<HTMLDivElement | null>(null);

  function handleSlide(direction: string) {
    const lastSlide = direction === 'left'
      ? LAST_SLIDE_INDEX
      : FIRST_SLIDE_INDEX;

    const toSlide = direction === 'left'
      ? FIRST_SLIDE_INDEX
      : LAST_SLIDE_INDEX;

    if (slider === lastSlide) {
      setSlider(toSlide);

      return;
    }

    if (direction === 'left') {
      setSlider(current => current + 1);
    } else {
      setSlider(current => current - 1);
    }
  }

  function getImgWidth() {
    const width = wrapper.current ? wrapper.current.clientWidth : 200;

    setImgWidth(width);
  }

  useEffect(() => {
    getImgWidth();
    window.addEventListener('resize', getImgWidth);
  }, []);

  return (
    <div className="slider">
      <div className="slider__box">
        <button
          type="button"
          aria-label="slide left"
          className="slider__btn slider__btn--left"
          onClick={() => handleSlide('left')}
        />

        <div className="slider__wrapper" ref={wrapper}>
          <div
            className="slider__items"
            style={{ transform: `translateX(-${slider * imgWidth}px)` }}
          >
            {BANNERS.map(banner => (
              <div
                key={banner}
                className="slider__banner-wr"
              >
                <img
                  style={{ width: `${imgWidth}px` }}
                  src={`_new/img/${banner}`}
                  alt="phones"
                  className="slider__banner"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          aria-label="slide right"
          className="slider__btn slider__btn--right"
          onClick={() => handleSlide('right')}
        />
      </div>

      <nav className="slider__nav">
        {BUTTONS.map(button => (
          <button
            key={button}
            type="button"
            aria-label="next slider"
            className="slider__nav-wrapper"
            onClick={() => setSlider(button)}
          >
            <div
              className={classNames('slider__nav-item', {
                'slider__nav-item--active': slider === button,
              })}
            />
          </button>
        ))}
      </nav>
    </div>
  );
};
