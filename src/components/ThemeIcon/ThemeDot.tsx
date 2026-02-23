interface ThemeDotProps {
    color: string
}

export default function ThemeDot({ color }: ThemeDotProps) {
    return(
        <span
            className={`
                h-2.5 w-2.5 
                rounded-full 
                border-gray-300/10
                border
                ${color}
            `} 
        />
    )
}