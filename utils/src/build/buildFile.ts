/**
 * The functions available for interacting with the lines of file data.
 */
export interface IBuildFileCallback {
  /**
   * Adds the `parts` to the current line.
   * 
   * @param parts The parts to add to the current line
   */
  add(...parts: string[]): void;

  /**
   * Adds the `lines` to the file, commiting anything on the current line first.
   * 
   * @param lines The lines to add to the file
   */
  addLine(...lines: (string | string[])[]): void;

  /**
   * Adds the `lines` to the file follwoed by a newline, commiting anything on the current line first. 
   * 
   * @param lines The lines to add to the file
   */
  addNewLine(...lines: (string | string[])[]): void;

  /**
   * Commits the current line to the lines.
   */
  commitLine(): void;
}

/**
 * Assists in creating files. Following the `initialLines` placed into the lines array,
 * the callback is called within which additional lines can be added. Once the callback is complete,
 * the `Buffer` is returned. 
 * 
 * @param initialLines The initial lines to place into the lines array. Often used for placing banner/copyright text.
 * @param callback A callback for writing data to the file. Passed `IBuildFileCallback`.
 */
export const buildFile = (initialLines: (string | string[])[] = [], callback: (func: IBuildFileCallback) => void): Buffer => {
  const fileLines: (string | string[])[] = [...initialLines];
  let currentLine: string[] = [];

  /**
   * Adds the `parts` to the current line.
   * 
   * @param parts The parts to add to the current line
   */
  const add = (...parts: string[]): void => {
    parts.forEach(part => currentLine.push(part));
  };

  /**
   * Adds the `lines` to the file, commiting anything on the current line first.
   * 
   * @param lines The lines to add to the file
   */
  const addLine = (...lines: (string | string[])[]): void => {
    commitLine();
    lines.forEach(line => fileLines.push(line));
  }

  /**
   * Adds the `lines` to the file follwoed by a newline, commiting anything on the current line first. 
   * 
   * @param lines The lines to add to the file
   */
  const addNewLine = (...lines: (string | string[])[]): void => {
    addLine(...lines);

    currentLine = [''];
  };

  /**
   * Commits the current line to the lines.
   */
  const commitLine = (): void => {
    if (currentLine.length) {
      fileLines.push(currentLine);
    }

    currentLine = [];
  };

  callback({add, addLine, addNewLine, commitLine});

  commitLine();

  return Buffer.from(fileLines.map(line => 
    typeof line === 'string' ? line : line.join('')
  ).join(`\n`), 'utf8');
};
