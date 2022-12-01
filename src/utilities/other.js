import { Fragment } from "react";

import { customTypeof } from "utility-store/src/classes/CustomTypeof";

const checkErrorCodeIsConnAborted = (errorCode) => errorCode === "ECONNABORTED";

const errorThrower = (condition, error) => {
  if (condition) {
    if (customTypeof.isFunction(error)) throw error();
    throw error;
  }
};

const printCatchError = (error, functionName) => {
  logger.error(`${functionName} catch, error: `);
  logger.error(error);
};

const fixErrorBuilderErrors = (errorObject, extraData = {}) => {
  const { errorKey, ...error } = errorObject;

  return {
    [errorKey]: { ...error, ...extraData },
  };
};

const makeNonBreakSpace = (length) =>
  Array.from({ length }).map((_, i) => <Fragment key={i}>&nbsp;</Fragment>);

const otherUtilities = {
  checkErrorCodeIsConnAborted,
  errorThrower,
  fixErrorBuilderErrors,
  makeNonBreakSpace,
  printCatchError,
};

export { otherUtilities };