'use client'
import React, { useState, useRef } from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import MiniProjectCard from '../elements/MiniProjectCard'

export default function ProjectScroller({ show }) {

  const [active, setActive] = useState('1');

  const handleBasicClick = (value) => {
    if (value === active) {
      return;
    }
    setActive(value);
  };

  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  //Slide click
  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };





  return (
    <>
      <div className="mt-2 d-flex align-items-center gap-3">
        <div>
          {scrollX !== 0 && (
            <div className='nav-icon'>
              <BiChevronLeft
                size={25}
                role='button'
                // className="text-light"
                onClick={() => slide(-50)}
              />
            </div>
          )}
        </div>


        <div className='h-scroll gap-4 ' ref={scrl} onScroll={scrollCheck}>

          <MiniProjectCard />
          <MiniProjectCard />
          <MiniProjectCard />
          <MiniProjectCard />

        </div>

        <div>
          {!scrolEnd && (
            <div className='nav-icon'>
              <BiChevronRight
                size={25}
                role='button'
                // className="text-light"
                onClick={() => slide(+50)}
              />
            </div>
          )}
        </div>
      </div>
    </>
  )
}
