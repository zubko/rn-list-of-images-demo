import { heightsForItems } from '../ImageList';

describe('Calculating list heights', () => {
  test('general case', () => {
    expect(
      heightsForItems({
        data: [
          { width: 100, height: 100 },
          { width: 200, height: 100 },
          { width: 100, height: 200 },
        ],
        componentWidth: 300,
        separatorHeight: 15,
      })
    ).toEqual([
      { index: 0, length: 300, offset: 0 },
      { index: 1, length: 150, offset: 315 },
      { index: 2, length: 600, offset: 480 },
    ]);
  });
});
