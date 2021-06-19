import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import requestHistory from '../actions/index'
import TimelineCard from '../components/TimelineCard'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const Timeline = () => {
  const dispatch = useDispatch()
  const { history } = useSelector((state) => state.history)

  useEffect(() => {
    dispatch(requestHistory())
  }, [dispatch])

  const displayTimelinCards = () => {
    return history.map((elm) => (
      <TimelineCard
        msg={elm.commit.message}
        author={elm.commit.committer.name}
        date={elm.commit.committer.date}
      />
    ))
  }

  return (
    <>
      <div style={{ backgroundColor: 'black' }}>
        <VerticalTimeline>{displayTimelinCards()}</VerticalTimeline>
      </div>
    </>
  )
}

export default Timeline
