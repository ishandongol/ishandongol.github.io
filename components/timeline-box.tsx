
interface TimelineBoxProps{
  title:string;
  subTitle:string;
  content:string;
}
const TimelineBox: React.FC<TimelineBoxProps> = ({ title,subTitle,content }) => {
  return (
      <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
        <div className="text-gray-600 mb-2 flex justify-between">
          <div className="font-bold">
            {title}
          </div>
          {subTitle}
          <div className="flex flex-row">
            <button className="text-blue-500 mr-2 hover:text-blue-300 transition duration-200"><i className="far fa-edit"></i></button>
            <button className="text-red-500 hover:text-red-300 transition duration-200"><i className="far fa-trash-alt"></i></button>
          </div>
        </div>
        <div className="text-gray-600">
        {content}
        </div>
      </div>
  )
}

export default TimelineBox
