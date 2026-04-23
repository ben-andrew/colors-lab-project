const { isValidColorName, formatColorName } = require('../../html/js/colorUtils');

describe('isValidColorName', () => {
    test('returns true for a normal color name', () => {
        expect(isValidColorName('red')).toBe(true);
    });

    test('returns true for a multi-word color name', () => {
        expect(isValidColorName('dark blue')).toBe(true);
    });

    test('returns false for an empty string', () => {
        expect(isValidColorName('')).toBe(false);
    });

    test('returns false for a whitespace-only string', () => {
        expect(isValidColorName('   ')).toBe(false);
    });

    test('returns false for null', () => {
        expect(isValidColorName(null)).toBe(false);
    });

    test('returns false for undefined', () => {
        expect(isValidColorName(undefined)).toBe(false);
    });

    test('returns false for a number', () => {
        expect(isValidColorName(42)).toBe(false);
    });
});

describe('formatColorName', () => {
    test('trims leading whitespace', () => {
        expect(formatColorName('  red')).toBe('red');
    });

    test('trims trailing whitespace', () => {
        expect(formatColorName('red  ')).toBe('red');
    });

    test('trims both sides', () => {
        expect(formatColorName('  red  ')).toBe('red');
    });

    test('preserves interior spaces', () => {
        expect(formatColorName('dark blue')).toBe('dark blue');
    });

    test('leaves an already-trimmed string unchanged', () => {
        expect(formatColorName('green')).toBe('green');
    });
});
