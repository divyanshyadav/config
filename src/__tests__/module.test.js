import { greet } from '../module'

test('returns message that greets user', () => {
    expect(greet('div')).toBe('Hello div!')
})
