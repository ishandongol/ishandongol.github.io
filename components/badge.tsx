interface BadgeProps{
    color?:string;
    className?:string;
}
export const Badge:React.FC<BadgeProps> = ({color="bg-gray-300 text-gray-700",children,className}) =>{
    return(
    <span className={`rounded-full px-4 ${color} p-2 text-sm  leading-none  ${className || ''}`}>{children}</span>
    )
}
 