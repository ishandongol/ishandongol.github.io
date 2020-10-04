interface BadgeProps{
    color?:string;
}
export const Badge:React.FC<BadgeProps> = ({color="bg-sajilo text-white",children}) =>{
    return(
    <span className={`rounded-full px-4 ${color} p-2 text-sm  leading-none `}>{children}</span>
    )
}