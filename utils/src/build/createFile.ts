import { writeFile, mkdir } from 'fs';
import { dirname } from 'path';

/**
 * A utility function that take a file and some data, creating the file,
 * and directories if need be, with the data.
 * 
 * @param file The name of the file to create
 * @param data The data to create the file with
 * @param done A callback used to detect and process errors and notify that the file has been written
 */
export const createFile = (file: string, data: Buffer, done: (err?: any) => void) => {
  mkdir(dirname(file), { recursive: true}, err => 
    err ? done(err) : writeFile(file, data, err => err ? done(err) : done())
  );
};
