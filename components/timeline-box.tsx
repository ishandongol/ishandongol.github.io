
interface TimelineBoxProps{
  title:string;
  subTitle:string;
  date:string;
  content:string;
}
const TimelineBox: React.FC<TimelineBoxProps> = ({ title,subTitle,content,date }) => {
  return (
      <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
        <div className="text-sajilo mb-2 flex justify-between font-bold text-2xl">
            {title}
        </div>
        <div className="text-sajilo mb-2 flex justify-between text-sm font-bold">
          {subTitle} | {date}
          </div>
        
        <div className="text-sajilo mt-4">
        {content}
        </div>
      </div>
  )
}

export default TimelineBox
