
/* MAIN */

const castURL = ( url: URL | string ): URL => {

  return isString ( url ) ? new URL ( url ) : url;

};

const isString = ( value: unknown ): value is string => {

  return typeof value === 'string';

};

/* EXPORT */

export {castURL, isString};
