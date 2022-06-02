describe('type check', () => {
    test('should be type string', () => {
        expect(typeof '').toBe('string')
    })

    test('should be type number', () => {
        expect(typeof 10).toBe('number')
    })

    test('should be type boolean', () => {
        expect(typeof true).toBe('boolean')
    })

    test('should be type undefined', () => {
        expect(typeof undefined).toBe('undefined')
    })

    test('should be type object', () => {
        expect(typeof { foo: 'bar' }).toBe('object')
    })

    test('should be type function', () => {
        expect(typeof function() {}).toBe('function')
    })

    test('should be type null', () => {
        expect(typeof null).toBe('object')
    })
})
