import { PermissionsGuard } from './permissions.guard';
import { Reflector } from '@nestjs/core';

describe('PermissionsGuard', () => {
  it('should be defined', () => {
    expect(new PermissionsGuard(new Reflector())).toBeDefined();
  });
});
