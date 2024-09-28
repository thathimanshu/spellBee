export default function randomizeString(str) {
    return str.split('').sort(() => Math.random() - 0.5).join('');
}