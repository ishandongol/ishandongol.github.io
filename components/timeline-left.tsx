import TimelineBox from "./timeline-box"
import TimeLineBoxWrapper from "./timeline-box-wrapper"
import TimelineLine from "./timeline-line"
import TimelineWrapper from "./timeline-wrapper"

const TimelineLeft = () => {
  return (
    <TimelineWrapper>
    <TimeLineBoxWrapper>
      <TimelineBox
      title="Software Engineer"
      subTitle="Present"
      content="I am who i am"
      />
    </TimeLineBoxWrapper>
    <TimelineLine/>
    <TimeLineBoxWrapper/>

    </TimelineWrapper>
  )
}

export default TimelineLeft
