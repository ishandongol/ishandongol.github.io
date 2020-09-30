
const TimeLineBoxWrapper:React.FC<{className?:string}> = ({children,className}) => {
  return (
    <div className={`w-full px-2 py-10 ${className || ''}`}>
      {children}
    </div>
  )
}

export default TimeLineBoxWrapper
