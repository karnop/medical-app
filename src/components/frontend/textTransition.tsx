"use client"
import React from 'react';
import TextTransition, { presets } from 'react-text-transition';

function TextTransitionn() {
    const TEXTS = ["Therapist", "Acupuncture", "Massage", "Chiropractor", "Dental", "Cosmetic", "Dietician",
        "Speech Therapist"];
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);
    return (
        <span>
            <TextTransition springConfig={presets.slow} className={"text-blue-500"}>{TEXTS[index % TEXTS.length]}</TextTransition>
        </span>
    );
}

export default TextTransitionn;