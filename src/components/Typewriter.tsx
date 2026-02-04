import { useState, useEffect } from 'react';

interface TypewriterTextProps {
    words: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseDuration?: number;
}

export default function TypewriterText({
    words,
    typingSpeed = 150,
    deletingSpeed = 100,
    pauseDuration = 2000
}: TypewriterTextProps) {
    const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
    const [currentText, setCurrentText] = useState<string>('');
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    const [showCursor, setShowCursor] = useState<boolean>(true);

    useEffect(() => {
        const currentWord = words[currentWordIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (currentText.length < currentWord.length) {
                    setCurrentText(currentWord.slice(0, currentText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), pauseDuration);
                }
            } else {
                if (currentText.length > 0) {
                    setCurrentText(currentText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setCurrentWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 530);

        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <span className="text-s text-[#909692]">
            {currentText}
            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
        </span>
    );
}