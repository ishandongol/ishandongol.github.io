
const TimeLineBoxWrapper:React.FC<{className?:string}> = ({children,className}) => {
  return (
    <div className={`w-full lg:px-2 pb-10 lg:py-10 ${className || ''}`}>
      {children}
    </div>
  )
}

export default TimeLineBoxWrapper
