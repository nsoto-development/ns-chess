import type { Color } from '../../types';

const pieceUrls = import.meta.glob<string>('./*/*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
});

export function pieceSvgUrl(color: Color, type: string): string | undefined {
  return pieceUrls[`./${color}/${type}.svg`];
}
