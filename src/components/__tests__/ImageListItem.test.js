import { heightForItem } from '../ImageListItem';

describe('Calculating image height', () => {
  test('simple case', () => {
    expect(
      heightForItem({ width: 500, height: 400, componentWidth: 500 })
    ).toBe(400);
  });

  test('square size', () => {
    expect(
      heightForItem({ width: 100, height: 100, componentWidth: 400 })
    ).toBe(400);
  });

  test('half size', () => {
    expect(
      heightForItem({ width: 500, height: 200, componentWidth: 250 })
    ).toBe(100);
  });

  test('height = 0', () => {
    expect(heightForItem({ width: 500, height: 0, componentWidth: 250 })).toBe(
      0
    );
  });

  test('width = 0', () => {
    expect(heightForItem({ width: 0, height: 100, componentWidth: 250 })).toBe(
      0
    );
  });

  test('no fractions of height', () => {
    expect(heightForItem({ width: 100, height: 33, componentWidth: 250 })).toBe(
      82
    );
  });
});
