import { useRef, useState } from "react"
import { themeOptions } from "../constants/theme"
import { useTheme } from "../context/ThemeContext"

export default function ThemeIcon() {
	const { theme, setTheme } = useTheme()
	const [isOpen, setIsOpen] = useState(false)
	const closeTimeoutRef = useRef<number | null>(null)

	const openTooltip = () => {
		if(closeTimeoutRef.current) {
			window.clearTimeout(closeTimeoutRef.current)
			closeTimeoutRef.current = null
		}

		setIsOpen(true)
	}

	const closeTooltip = () => {
		if(closeTimeoutRef.current) {
			window.clearTimeout(closeTimeoutRef.current)
		}

		closeTimeoutRef.current = window.setTimeout(() => {
			setIsOpen(false)
			closeTimeoutRef.current = null
		}, 120)
	}

	return(
		<div
			className="relative"
			onMouseEnter={openTooltip}
			onMouseLeave={closeTooltip}
		>
			<button
				type="button"
				className={`
					${theme.colors.secondary}
					h-6
					w-6
					rounded-full
					border-[1px]
					border-gray-300/10
					hover:border-gray-300/20
					hover:cursor-pointer
					flex
					items-center
					justify-center
					transition-all
					duration-200
					${isOpen ? "scale-105" : "scale-100"}
				`}
				aria-label="Select theme"
			>
				<span className="sr-only">Theme selector</span>
				<img
					src="/icons/theme.svg"
					alt=""
					className="h-4 w-4 opacity-85"
				/>
			</button>

			<div
				className={`
					${theme.colors.secondary}
					absolute
					left-1/2
					bottom-10
					min-w-36
					rounded-lg
					border-[1px]
					border-gray-300/10
					backdrop-blur-md
					p-2
					z-[70]
					transition-all
					duration-200
					origin-bottom
					${isOpen ? "opacity-100 -translate-x-1/2 translate-y-0 scale-100 pointer-events-auto" : "opacity-0 -translate-x-1/2 translate-y-1 scale-95 pointer-events-none"}
				`}
			>
				{themeOptions.map((option) => {
					const isSelected = option.theme.colors.primary === theme.colors.primary

					return(
						<button
							key={option.name}
							type="button"
							className={`
                                cursor-pointer
								w-full
								flex
								items-center
								justify-between
								px-2
								py-1.5
								rounded-md
								text-xs
								hover:bg-gray-300/15
								transition-colors
								duration-150
								${isSelected ? "text-[#f3ede4]" : "text-[#87827B]"}
							`}
							onClick={() => setTheme(option.theme)}
						>
							<span>{option.name}</span>
							<span className="flex items-center gap-1">
								<span className={`h-2 w-2 rounded-full ${option.theme.colors.primary}`} />
								<span className={`h-2 w-2 rounded-full ${option.theme.colors.primary}`} />
							</span>
						</button>
					)
				})}
			</div>
		</div>
	)
}
