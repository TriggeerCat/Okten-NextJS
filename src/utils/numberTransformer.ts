export const numberTransformer = (number: number): string => {
    let counter = 0; let magnitude = '';
    while (number / 1000 >= 1) {
        number = number / 1000;
        counter++;
    }
    switch (counter) {
        case 1:
            magnitude = ' тис.'
            break;
        case 2:
            magnitude = ' млн.'
            break;
        case 3:
            magnitude = ' млрд.'
            break;
        case 4:
            magnitude = ' трлн.'
            break;
    }

    return number.toFixed(2) + magnitude + ' грн.';
}