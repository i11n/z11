import { createMap } from "../../util";

/**
 * The simple `transition-property` map.
 */
const properties = {
  /**
   * The `none` variant of the `transition-property` variants.
   */
  none: 'none',
  /**
   * The `all` variant of the `transition-property` variants.
   */
  all: 'all',
  /**
   * The `color` variant of the `transition-property` variants.
   */
  color: 'background-color, border-color, color, fill, stroke',
  /**
   * The `visual` variant of the `transition-property` variants.
   */
  visual: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
  /**
   * The `opacity` variant of the `transition-property` variants.
   */
  opacity: 'opacity',
  /**
   * The `depth` variant of the `transition-property` variants.
   */
  depth: 'box-shadow',
  /**
   * The `transform` variant of the `transition-property` variants.
   */
  transform: 'transform'
};

/**
 * The `IMap` of the `transition-property` variants.
 * 
 * > **Note**: Exported for the purpose of creating SASS features, not for 
 * > use in libraries. Use the `property` export of this file instead.
 */
const __map = createMap('property', properties);

/**
 * A readonly copy of the `transition-property` variants.
 */
export const property: Readonly<typeof properties> = Object.assign({}, properties);

//  export individual styles

/**
 * The `none` variant of the `transition-property` variants.
 */
export const none = property.none;

/**
 * The `all` variant of the `transition-property` variants.
 */
export const all = property.all;

/**
 * The `color` variant of the `transition-property` variants.
 */
export const color = property.color;

/**
 * The `visual` variant of the `transition-property` variants.
 */
export const visual = property.visual;

/**
 * The `opacity` variant of the `transition-property` variants.
 */
export const opacity = property.opacity;

/**
 * The `depth` variant of the `transition-property` variants.
 */
export const depth = property.depth;

/**
 * The `transform` variant of the `transition-property` variants.
 */
export const transform = property.transform;

//  export the map so SASS generators can use it.
export default __map;
