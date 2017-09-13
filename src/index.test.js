import { expect } from 'chai';
import createMiddleware from './';


describe('middleware', () => {
  it('should return a function', () => {
    const mid = createMiddleware('somepath');
    expect(typeof mid).to.equal('function');
  });
});