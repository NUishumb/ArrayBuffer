export default class ArrayBufferConverter {
    load(buffer) {
        this.data = [];
        const bufferView = new Uint16Array(buffer);
        for (let i = 0; i < bufferView.length; i += 1) {
            this.data.push(String.fromCharCode(bufferView[i]));
        }
        return this.data.join('');
    }
}
