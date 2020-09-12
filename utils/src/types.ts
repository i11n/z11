/**
 * An object describing a variable name and value for SCSS variables/mixins.
 */
export interface IVariant {
  /**
   * The variable/mixin base label name. e.g. "borderRadius0" may become `$z-borderRadius0` or `.z-borderRadius0`.
   */
  label: string;
  /**
   * The variable value.
   */
  value: string;
}

/**
 * A key-value pair where keys a `keyof T` and values are
 * `IVariant`s. Useful for mapping a simple object while not
 * having to define each key. Mainly used to ensure type-checking and 
 * code completion.
 * 
 * **Example**
 * ```ts
 * const exampleMap = {
 *  keyA: 'valueA',
 *  keyB: 'valueB',
 *  keyC: 'valueC',
 * };
 * 
 * const variantList: IVariantMap<typeof exampleMap> = {
 *  ...Object.keys(exampleMap).map(key => ({[key]: {
 *    label: key.toUpperCase(),
 *    value: exampleMap[key],
 *  }))
 * };
 * 
 * // type-checking and code completion is retained. e.g. `variantList.keyA.label`.
 * ```
 * 
 * @typeparam T The typeof object that is being mapped.
 */
export type IMap<T = {[key: string]: IVariant}> = Record<keyof T, IVariant>;

/**
 * A key-value pair where keys a `keyof T` and values are
 * `IVariant`s. Useful for mapping a simple object while not
 * having to define each key. Mainly used to ensure type-checking and 
 * code completion.
 * 
 * **Example**
 * ```ts
 * const exampleMap = {
 *  keyA: 'valueA',
 *  keyB: 'valueB',
 *  keyC: 'valueC',
 * };
 * 
 * const variantList: IVariantMap<typeof exampleMap> = {
 *  ...Object.keys(exampleMap).map(key => ({[key]: {
 *    label: key.toUpperCase(),
 *    value: exampleMap[key],
 *  }))
 * };
 * 
 * // type-checking and code completion is retained. e.g. `variantList.keyA.label`.
 * ```
 * */
export type ICollection<T> = Record<keyof T, IMap>;

/**
 * A simple key/value pair of string keys and string values.
 * 
 * **Example**
 * ```ts
 * const exampleMap: SimpleMap = {
 *  keyA: 'valueA',
 *  keyB: 'valueB',
 *  keyC: 'valueC',
 * };
 * ```
 */
export type SimpleMap = {[key: string]: string};

/**
 * A key/value pair of string keys and `IVariantMap` values.
 * 
 * **Example**
 * ```ts
 * const exampleMap = createVariantMap('example', {
 *  keyA: 'valueA',
 *  keyB: 'valueB',
 *  keyC: 'valueC',
 * });
 * 
 * const exampleCollection: SimpleCollection<tyepof exampleMap> = {
 *    example: exampleMap,
 * };
 * ```
 */
export type SimpleCollection<T> = Record<keyof T, IMap<T[keyof T]>>;
