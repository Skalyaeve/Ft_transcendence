/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { SafeRange } from './SafeRange'

/**
 * Removes the item within the given range in the array.
 *
 * The array is modified in-place.
 *
 * You can optionally specify a callback to be invoked for the item/s successfully removed from the array.
 *
 * @function Phaser.Utils.Array.RemoveBetween
 * @since 3.4.0
 *
 * @param {array} array - The array to be modified.
 * @param {number} startIndex - The start index to remove from.
 * @param {number} endIndex - The end index to remove to.
 * @param {function} [callback] - A callback to be invoked for the item removed from the array.
 * @param {object} [context] - The context in which the callback is invoked.
 *
 * @return {Array.<*>} An array of items that were removed.
 */
const RemoveBetween = (array, startIndex = 0, endIndex?, callback?, context?) => {
  if (endIndex === undefined) {
    endIndex = array.length
  }
  if (context === undefined) {
    context = array
  }

  if (SafeRange(array, startIndex, endIndex)) {
    const size = endIndex - startIndex

    const removed = array.splice(startIndex, size)

    if (callback) {
      for (let i = 0; i < removed.length; i++) {
        const entry = removed[i]

        callback.call(context, entry)
      }
    }

    return removed
  } else {
    return []
  }
}

export { RemoveBetween }
