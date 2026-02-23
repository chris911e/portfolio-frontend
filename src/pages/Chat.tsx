import { useState } from "react";
import Mac from "../components/Tabbed/Mac";
import Tabbed from "../components/Tabbed/Tabbed";
import { useTheme } from "../context/ThemeContext";

export default function Chat() {
    const {theme} = useTheme()

    const [input, setInput] = useState("");
    
    return(
        <div>
            <Mac link="/">
                <div className="w-full">
                    <Tabbed backgroundColor="primary">
                        <div className="flex gap-2">
                            <span className={`${theme.chat.cmd}`}>
                                ~$
                            </span>
                            <input
                                className={`
                                    bg-transparent
                                    border-none
                                    outline-none
                                    w-full
                                    tracking-wide
                                    ${theme.chat.cmd}
                                    ${theme.chat.caret}
                                `}
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                spellCheck={false}
                                autoFocus
                            />
                        </div>
                    </Tabbed>
                </div>
            </Mac>
        </div>
    )
}