import getBuffer from '../buffer';
import ArrayBufferConverter from '../ArrayBufferConverter';

test('should convert data', () => {
    const converter = new ArrayBufferConverter();
    expect(converter.load(getBuffer())).toEqual('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
