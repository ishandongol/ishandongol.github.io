import TimelineBox from "./timeline-box"
import TimeLineBoxWrapper from "./timeline-box-wrapper"
import TimelineLine from "./timeline-line"
import TimelineWrapper from "./timeline-wrapper"

const TimelineRight = () => {
  return (
    <TimelineWrapper>
    <TimeLineBoxWrapper/>
    <TimelineLine/>
    <TimeLineBoxWrapper>
      <TimelineBox
      title="Software Engineer"
      subTitle="Present"
      content="I am who i am"
      />
    </TimeLineBoxWrapper>
    </TimelineWrapper>
  )
}

export default TimelineRight
