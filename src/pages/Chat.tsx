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
                        <div className="flex flex-col gap-2">
                            <div
                                className="
                                    overflow-y-auto
                                    [@media(min-height:630px)]:h-96
                                    gap-1 p-2 h-48
                                    flex flex-col
                                ">
                                This feature is under construction!
                            </div>
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
                                    placeholder="Ask me a question!"
                                    autoFocus
                                />
                            </div>
                        </div>
                    </Tabbed>
                </div>
            </Mac>
        </div>
    )
}