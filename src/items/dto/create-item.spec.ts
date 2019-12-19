import { CreateItemDTO } from './create-item';

describe('CreateItem', () => {
  it('should be defined', () => {
    expect(new CreateItemDTO()).toBeDefined();
  });
});
