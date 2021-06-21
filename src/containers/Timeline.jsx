import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import requestHistory from '../actions/index'
import TimelineCard from '../components/TimelineCard'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { Box } from '@chakra-ui/react'
import { AiFillStar } from 'react-icons/ai'
import { formatDistanceToNow } from 'date-fns'

const Timeline = () => {
  const dispatch = useDispatch()
  const { history } = useSelector((state) => state.history)

  useEffect(() => {
    dispatch(requestHistory())
  }, [dispatch])

  const displayTimelinCards = () => {
    return history.map((elm) => (
      <TimelineCard
        key={elm.sha}
        msg={elm.commit.message}
        author={elm.commit.committer.name}
        date={formatDistanceToNow(new Date(elm.commit.committer.date), {
          addSuffix: true
        })}
      />
    ))
  }

  return (
    <>
      <Box minH='100vh' p={4}>
        <VerticalTimeline>
          {displayTimelinCards()}
          <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<AiFillStar />}
          />
        </VerticalTimeline>
      </Box>
    </>
  )
}

export default Timeline
