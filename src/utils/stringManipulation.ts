/* Function that is used for trimming string to a given length.
   input : string that need to be trimmed, length
   output : trimmed string
*/
const truncate = (str: string, n: number): string => {
  return str.length > n ? str.substr(0, n - 1) + "..." : str;
};

export { truncate };
