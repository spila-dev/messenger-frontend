import { customTypeof } from "classes/CustomTypeof";

const errorThrower = (condition, error) => {
  if (condition) {
    if (customTypeof.check(error).type.function) throw error();
    throw error;
  }
};

const objectInitializer = (values, props) => {
  try {
    const tempObj = {};

    props.forEach((prop, index) => {
      tempObj[prop] = values[index];
    });

    return tempObj;
  } catch (error) {
    logger.log("objectInitializer catch, error:", error);
  }
};

const getMethodFromRoute = (route) => {
  try {
    const method = route?.method;

    errorThrower(!method, "You need to pass correct route object");

    return method;
  } catch (error) {
    logger.log("getMethodFromRoute catch, error:", error);
  }
};

const skipParams = (count) => {
  return Array.from({ length: count });
};

const getErrorObject = (errorObject, extraData = {}, statusCode) => {
  const { errorKey, ...error } = errorObject;

  return {
    [errorKey]: { ...error, ...extraData },
    statusCode: statusCode || errorObject.statusCode,
  };
};

const objectClarify = (dirtyObject = {}) => {
  const cleanObject = {};

  Object.entries(dirtyObject)?.forEach(([key, value]) => {
    if (!customTypeof.check(value).type.undefined) {
      if (customTypeof.check(dirtyObject[key]).type.object) {
        cleanObject[key] = objectClarify(dirtyObject[key]);

        return;
      }

      cleanObject[key] = value;
    }
  });

  return cleanObject;
};

const getValidatorErrorTypes = (errorArray) => {
  const validatorErrorTypes = {
    array: false,
    arrayContains: false,
    arrayEmpty: false,
    arrayEnum: false,
    arrayLength: false,
    arrayMax: false,
    arrayMin: false,
    arrayUnique: false,
    boolean: false,
    date: false,
    dateMax: false,
    dateMin: false,
    email: false,
    emailEmpty: false,
    emailMax: false,
    emailMin: false,
    enumValue: false,
    equalField: false,
    equalValue: false,
    forbidden: false,
    function: false,
    luhn: false,
    mac: false,
    number: false,
    numberEqual: false,
    numberInteger: false,
    numberMax: false,
    numberMin: false,
    numberNegative: false,
    numberNotEqual: false,
    numberPositive: false,
    object: false,
    objectMaxProps: false,
    objectMinProps: false,
    objectStrict: false,
    required: false,
    string: false,
    stringAlpha: false,
    stringAlphadash: false,
    stringAlphanum: false,
    stringBase64: false,
    stringContains: false,
    stringEmpty: false,
    stringEnum: false,
    stringHex: false,
    stringLength: false,
    stringMax: false,
    stringMin: false,
    stringNumeric: false,
    stringPattern: false,
    stringSingleLine: false,
    tuple: false,
    tupleEmpty: false,
    tupleLength: false,
    url: false,
    uuid: false,
    uuidVersion: false,
  };

  errorArray.forEach((error) => {
    validatorErrorTypes[error.type] = true;
  });

  return validatorErrorTypes;
};

const findByProp = (items = [], value, prop) =>
  items.find((item) => item[prop] === value);

const getHostFromRequest = (request) => request.get("host");

const isUrlMatchWithReqUrl = (url, reqUrl) =>
  (customTypeof.check(url).type.array && url.some((u) => u === reqUrl)) ||
  url === reqUrl;

const versionCalculator = (versions = []) => {
  let [parentMajor, parentMinor, parentPatch] = convertStringArrayToNumberArray(
    "1.0.0".split(".")
  );

  versions.forEach((v) => {
    const [major, minor, patch] = convertStringArrayToNumberArray(v.split("."));

    parentMajor += major - 1;
    parentMinor += minor;
    parentPatch += patch;
  });

  return `${parentMajor}.${parentMinor}.${parentPatch}`;
};

const convertStringArrayToNumberArray = (items) => items.map((item) => +item);

const extractVersions = (object) => {
  return Object.keys(object).map((key) => object[key].version);
};

const isEqualWithTargetCellphone = (cellphone, targetCellphone) => {
  if (
    cellphone.phoneNumber === targetCellphone.phoneNumber &&
    cellphone.countryCode === targetCellphone.countryCode &&
    cellphone.countryName === targetCellphone.countryName
  ) {
    return true;
  }

  return false;
};

const getTokenFromRequest = (request) => {
  const { authorization, Authorization } = request.headers;

  return (authorization || Authorization)?.split("Bearer ")[1];
};

const getObjectLength = (object) => Object.keys(object).length;

const crashServer = (message) => {
  logger.bgRed(message).log();
  process.exit(1);
};

const crashServerWithCondition = (condition, errorObject) => {
  if (condition) {
    crashServer(
      errorObject.reason || errorObject.errorKey || errorObject.message
    );
  }
};

const excludeVersion = (object) => {
  const tempObject = {};

  for (const key in object) {
    const { version, ...childObject } = object[key];

    tempObject[key] = childObject;
  }

  return tempObject;
};

const concatBaseUrlWithUrl = (baseUrlObject, routeObject) =>
  `${baseUrlObject.url}${routeObject.url}`;

const filterObject = (object, filterFields) => {
  const filteredObject = {};

  for (const key in filterFields) {
    if (customTypeof.check(filterFields[key]).type.object) {
      filteredObject[key] = filterObject(object[key], filterFields[key]);
      continue;
    }

    filteredObject[key] = object[key];
  }

  return filteredObject;
};

const cellphoneFinder = (cellphones, targetCellphone) => {
  let cellphoneIndex = -1;

  try {
    const cellphone = cellphones.find((cellphone, index) => {
      cellphoneIndex = index;
      return isEqualWithTargetCellphone(cellphone, targetCellphone);
    });
    return { cellphone, cellphoneIndex };
  } catch (error) {
    errorThrower(error, error);
  }
};

const renameObjectKey = ({ obj, oldKey, newKey }) => {
  if (oldKey !== newKey) {
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];
  }
  return obj;
};

export {
  renameObjectKey,
  cellphoneFinder,
  concatBaseUrlWithUrl,
  convertStringArrayToNumberArray,
  crashServer,
  crashServerWithCondition,
  errorThrower,
  excludeVersion,
  extractVersions,
  filterObject,
  findByProp,
  getErrorObject,
  getHostFromRequest,
  getMethodFromRoute,
  getObjectLength,
  getTokenFromRequest,
  getValidatorErrorTypes,
  isEqualWithTargetCellphone,
  isUrlMatchWithReqUrl,
  objectClarify,
  objectInitializer,
  skipParams,
  versionCalculator,
};