import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import { BsFillBriefcaseFill } from 'react-icons/bs'

const TimelineCard = ({ msg, author, date }) => {
  return (
    <>
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date={date}
        icon={<BsFillBriefcaseFill />}
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
        <h3 className='vertical-timeline-element-title'>{author}</h3>
        <p>{msg}</p>
      </VerticalTimelineElement>
    </>
  )
}

export default TimelineCard
