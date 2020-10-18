import { SimpleMap, SimpleCollection } from "../../types";
import { STYLE_BANNER } from "../../constants";
import { buildFile } from "../buildFile";
import { isMap } from "../../util";
import { convertToCssProp } from "../../util/convertToCssProp";

export const createVarWriter = (propConverter: (prefix: string, namespace: string, prop: string, value: string | number) => string) => 
  (prefix: string, namespace: string, data: SimpleMap | SimpleCollection): Buffer => {

  prefix = convertToCssProp(prefix);
  namespace = convertToCssProp(namespace);
  
  return buildFile(STYLE_BANNER, ({addLine}) => {
    if (isMap(data)) {
      Object.keys(data as SimpleMap).forEach(
        key => addLine(propConverter(prefix, namespace, key, (data as SimpleMap)[key]))
      );
    } else {      
      Object.keys(data as SimpleCollection).forEach(collKey => {
        const map = (data as SimpleCollection)[collKey];
  
        Object.keys(map).forEach(
          mapKey => addLine(propConverter(prefix, namespace, `${collKey}-${mapKey}`, map[mapKey]))
        );
      });
    }
  });
};
