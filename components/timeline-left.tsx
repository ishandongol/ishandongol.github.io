import ExperienceData from "../types/experience"
import TimelineBox from "./timeline-box"
import TimeLineBoxWrapper from "./timeline-box-wrapper"
import TimelineLine from "./timeline-line"
import TimelineWrapper from "./timeline-wrapper"

const TimelineLeft = (props: ExperienceData) => {
    return (
        <TimelineWrapper>
            <TimeLineBoxWrapper>
                <TimelineBox
                    title={props.role}
                    subTitle={`${props.org}`}
                    date={`${props.startYear} - ${props.endYear}`}
                    content={props.description}
                />
            </TimeLineBoxWrapper>
            <TimelineLine />
            <TimeLineBoxWrapper className="hidden lg:block" />

        </TimelineWrapper>
    )
}

export default TimelineLeft
