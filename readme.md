# fileurl2path

A tiny function for converting a file URL to a path.

## Install

```sh
npm install fileurl2path
```

## Usage

```ts
import fileurl2path from 'fileurl2path';

// Let's convert a file URL, automatically detecting the OS

const url = 'file:///Users/fabio/Desktop/fileurl2path/index.js';
const path = fileurl2path ( url ); // => '/Users/fabio/Desktop/fileurl2path/index.js'

// Let's convert a file URL, explicitly using the algorithm for POSIX paths

const url = 'file:///Users/fabio/Desktop/fileurl2path/index.js';
const path = fileurl2path.posix ( url ); // => '/Users/fabio/Desktop/fileurl2path/index.js'

// Let's convert a file URL, explicitly using the algorithm for ~~wrong~~ Windows paths

const url = 'file:///C:/Users/fabio/Desktop/fileurl2path/index.js';
const path = fileurl2path.win32 ( url ); // => 'C:\\Users\\fabio\\Desktop\\fileurl2path\\index.js'
```

## License

MIT © Fabio Spampinato
