/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Replaces an element of the array with the new element.
 * The new element cannot already be a member of the array.
 * The array is modified in-place.
 *
 * @function Phaser.Utils.Array.Replace
 * @since 3.4.0
 *
 * @param {array} array - The array to search within.
 * @param {*} oldChild - The element in the array that will be replaced.
 * @param {*} newChild - The element to be inserted into the array at the position of `oldChild`.
 *
 * @return {boolean} Returns true if the oldChild was successfully replaced, otherwise returns false.
 */
const Replace = (array, oldChild, newChild) => {
  const index1 = array.indexOf(oldChild)
  const index2 = array.indexOf(newChild)

  if (index1 !== -1 && index2 === -1) {
    array[index1] = newChild

    return true
  } else {
    return false
  }
}

export { Replace }
