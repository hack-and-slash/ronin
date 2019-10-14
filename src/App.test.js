import { resetFields } from './App';

describe('resetFields', () => {
  it('expect to run initialize with empty object', () => {
    const formSpy = {
      initialize: jest.fn(),
    };

    const func = resetFields(formSpy);
    func();

    expect(formSpy.initialize).toBeCalledWith({});
  });
});
