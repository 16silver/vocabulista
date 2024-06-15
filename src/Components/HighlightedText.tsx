import React from 'react';
import styled from 'styled-components';

interface HighlightedTextProps {
    text: string;
    wordsToHighlight: string[];
}

const TextContainer = styled.div`
    font-size: 16px;
    line-height: 1.5;
`;

const HighlightedSpan = styled.span<{ highlighted: boolean }>`
    background-color: ${props => props.highlighted ? 'yellow' : 'transparent'};
    font-weight: ${props => props.highlighted ? 'bold' : 'normal'};
`;

export const HighlightedText: React.FC<HighlightedTextProps> = ({ text, wordsToHighlight }) => {
    const splitText = text.split(/(\s+)/);

    const highlightWords = () => {
        return splitText.map((word, index) => {
            // Check if the current word should be highlighted
            const shouldHighlight = wordsToHighlight.some(targetWord => word.includes(targetWord));

            // Return a styled span with highlighted or normal styles
            return (
                <HighlightedSpan key={index} highlighted={shouldHighlight}>
                    {word}
                </HighlightedSpan>
            );
        });
    };

    return (
        <TextContainer>
            {highlightWords()}
        </TextContainer>
    );
};