import { describe, expect, it } from 'vitest';
import { parseUciMove } from './stockfish';

describe('parseUciMove', () => {
  it('parses a quiet move', () => {
    expect(parseUciMove('e2e4')).toEqual({ from: 'e2', to: 'e4' });
  });

  it('parses a promotion move', () => {
    expect(parseUciMove('e7e8q')).toEqual({
      from: 'e7',
      to: 'e8',
      promotion: 'q',
    });
  });

  it('returns null for none or invalid tokens', () => {
    expect(parseUciMove('(none)')).toBeNull();
    expect(parseUciMove(null)).toBeNull();
    expect(parseUciMove('e2')).toBeNull();
    expect(parseUciMove('e2e9')).toBeNull();
  });
});
