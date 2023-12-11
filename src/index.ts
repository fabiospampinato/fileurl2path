
/* IMPORT */

import {IS_WINDOWS} from './constants';
import {castURL} from './utils';

/* MAIN */

const fileurl2path = ( url: URL | string ): string => {

  return IS_WINDOWS ? fileurl2path.win32 ( url ) : fileurl2path.posix ( url );

};

/* UTILITIES */

fileurl2path.posix = ( url: URL | string ): string => {

  let {protocol, hostname, pathname} = castURL ( url );

  if ( protocol !== 'file:' ) throw new Error ( 'Unsupported protocol' );

  if ( hostname !== '' ) throw new Error ( 'Unsupported hostname' );

  if ( /%2f/i.test ( pathname ) ) throw new Error ( 'Unsupported pathname' );

  return decodeURIComponent ( pathname );

};

fileurl2path.win32 = ( url: URL | string ): string => {

  let {protocol, hostname, pathname} = castURL ( url );

  if ( protocol !== 'file:' ) throw new Error ( 'Unsupported protocol' );

  if ( hostname !== '' ) throw new Error ( 'Unsupported hostname' ); //TODO: Support this

  if ( /%2f|%5c/i.test ( pathname ) ) throw new Error ( 'Unsupported pathname' );

  pathname = pathname.replaceAll ( '/', '\\' );
  pathname = decodeURIComponent ( pathname );

  if ( !/^\\[a-z]:/i.test ( pathname ) ) throw new Error ( 'Unsupported pathname' );

  pathname = pathname.slice ( 1 );

  return pathname;

};

/* EXPORT */

export default fileurl2path;
