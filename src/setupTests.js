global.matchMedia = jest.fn();
global.matchMedia.mockReturnValue({
  addListener: jest.fn(),
  removeListener: jest.fn(),
});
