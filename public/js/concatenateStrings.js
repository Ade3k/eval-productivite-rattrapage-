const concatenateStrings = (string1, string2) => {
    if ('string' === typeof string1 && 'string' === typeof string2) {
      return `${string1} ${string2}`;
    } else {
      throw new Error(
        'Type of parameters do not match required type for arguments string1 and string2'
      );
    }
  };