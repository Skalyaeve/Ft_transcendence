/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Moves the given element to the top of the array.
 * The array is modified in-place.
 *
 * @function Phaser.Utils.Array.BringToTop
 * @since 3.4.0
 *
 * @param {array} array - The array.
 * @param {*} item - The element to move.
 *
 * @return {*} The element that was moved.
 */
export const BringToTop = (array, item) => {
  const currentIndex = array.indexOf(item)

  if (currentIndex !== -1 && currentIndex < array.length) {
    array.splice(currentIndex, 1)
    array.push(item)
  }

  return item
}
