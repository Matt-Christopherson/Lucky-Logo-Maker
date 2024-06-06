export function generateSVG(data) {
    const { text, textColor, shape, shapeColor } = data;
    let shapeElement = '';

    switch (shape) {
        case 'circle':
            shapeElement = `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`;
            break;
        case 'triangle':
            shapeElement = `<polygon points="150,20 230,180 70,180" fill="${shapeColor}" />`;
            break;
        case 'square':
            shapeElement = `<rect x="70" y="20" width="160" height="160" fill="${shapeColor}" />`;
            break;
    }

    return `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeElement}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`;
}
