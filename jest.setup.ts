const globalObject: any = global;

globalObject.fetch = jest.genMockFromModule('node-fetch');

afterEach(() => (globalObject.fetch as jest.Mock).mockClear());