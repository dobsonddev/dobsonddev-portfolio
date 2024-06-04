// DecodedText.tsx

import React from 'react';

interface DecodedTextProps {
    text: string;
}

const DecodedText: React.FC<DecodedTextProps> = ({ text }) => {
    const decodedText = text.replace(/&#x([0-9a-fA-F]+);/g, (match, hex) => {
        return String.fromCodePoint(parseInt(hex, 16));
    });

    return <>{decodedText}</>;
};

export default DecodedText;
