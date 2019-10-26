import { resetFields } from './App';

import localStorage from './localStorage';

describe('resetFields', () => {
  it('expect to run initialize with default values', () => {
    const formSpy = {
      initialize: jest.fn(),
    };

    const func = resetFields(formSpy);
    func();

    expect(formSpy.initialize).toBeCalledWith(localStorage.initialValues);
  });
});
