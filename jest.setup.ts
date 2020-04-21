const globalObject: any = global;

globalObject.fetch = jest.genMockFromModule('node-fetch');