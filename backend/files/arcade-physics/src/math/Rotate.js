/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Rotate a given point by a given angle around the origin (0, 0), in an anti-clockwise direction.
 *
 * @function Phaser.Math.Rotate
 * @since 3.0.0
 *
 * @param {(Phaser.Geom.Point|object)} point - The point to be rotated.
 * @param {number} angle - The angle to be rotated by in an anticlockwise direction.
 *
 * @return {Phaser.Geom.Point} The given point, rotated by the given angle in an anticlockwise direction.
 */
const Rotate = (point, angle) => {
  const x = point.x
  const y = point.y

  point.x = x * Math.cos(angle) - y * Math.sin(angle)
  point.y = x * Math.sin(angle) + y * Math.cos(angle)

  return point
}

export default Rotate