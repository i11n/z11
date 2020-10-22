import prevStylus from "stylus";
import { createFile } from "../createFile";
import { join } from 'path';
import { readFile } from 'fs';

export const stylus = (fileName: string, dest: string) => (done: (err?: any) => void) => {
  readFile(fileName, (err: any, data: Buffer) => {
    if (err) return done(err);
    const nmp = join(__dirname, '../../../../node_modules');
    prevStylus(data.toString(), {filename: fileName})
      .include(nmp)
      .render((err: any, css: string) => {
        if (err) return done(err);
        
        createFile(dest, Buffer.from(css), (err: any) => {
          if (err) return done(err);

          done();
        });
      });
  });
};
