
/* IMPORT */

import {describe} from 'fava';
import fileurl2path from '../dist/index.js';

/* MAIN */

describe ( 'fileurl2path', it => {

  it ( 'supports posix', t => {

    const url = 'file:///Users/fabio/Desktop/fileurl2path/index.js';
    const path = fileurl2path.posix ( url );

    t.is ( path, '/Users/fabio/Desktop/fileurl2path/index.js' );

  });

  it ( 'supports windows', t => {

    const url = 'file:///C:/Users/fabio/Desktop/fileurl2path/index.js';
    const path = fileurl2path.win32 ( url );

    t.is ( path, 'C:\\Users\\fabio\\Desktop\\fileurl2path\\index.js' );

  });

});
