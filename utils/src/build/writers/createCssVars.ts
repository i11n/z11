import { IMap, ICollection } from "../../types";
import { STYLE_BANNER } from "../../constants";
import { buildFile } from "../buildFile";
import { isMap } from "../../author";

export function createCssVars<T extends IMap | ICollection<any>>(data: T): Buffer {
    return buildFile(STYLE_BANNER, ({addLine, addNewLine}) => {
      addLine(':root {');

      if (isMap(data)) {
        let map = data as IMap;

        Object.keys(map).forEach(variantLabel => {
          const { label, value } = (map as any)[variantLabel as keyof T];
    
          addLine(`  --z-${label}: ${value} !default;`);
        });
      } else {
        let collection = data as ICollection<any>;

        Object.keys(collection).forEach(collProp => {
          const map = collection[collProp as keyof T];
    
          Object.keys(map).forEach(mapProp => {
            const { label, value } = (map as any)[mapProp as keyof T];

            addLine(`  --z-${label}: ${value};`);
          });
        });
      }

      addNewLine('}');
    });
}
