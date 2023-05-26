import { classNames } from './classNames';

describe('classNames', () => {
	test('with only first param', () => {
		expect(classNames('someClass')).toBe('someClass');
	});
	test('with additional class', () => {
		const expected = 'someClass but input';
		expect(classNames('someClass', {}, ['but', 'input'])).toBe(expected);
	});
	test('with mods', () => {
		const expected = 'someClass but input hovered scrollable';
		expect(classNames('someClass', { hovered: true, scrollable: true }, ['but', 'input'])).toBe(
			expected,
		);
	});
	test('with mods', () => {
		const expected = 'someClass but input scrollable';
		expect(classNames('someClass', { hovered: false, scrollable: true }, ['but', 'input'])).toBe(
			expected,
		);
	});
	test('with mods', () => {
		const expected = 'someClass but input hovered';
		expect(
			classNames('someClass', { hovered: true, scrollable: undefined }, ['but', 'input']),
		).toBe(expected);
	});
});
