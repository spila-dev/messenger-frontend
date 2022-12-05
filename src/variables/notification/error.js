import { notificationBuilder } from "classes/NotificationBuilder";

const ECONNABORTED = notificationBuilder
  .create()
  .notificationCode(4000)
  .notificationReason("ECONNABORTED")
  .message("Connection interrupted!")
  .build();

const INPUT_FIELDS_MISSING = notificationBuilder
  .create()
  .message("INPUT_FIELDS_MISSING")
  .notificationCode(5000)
  .notificationReason("INPUT_FIELDS_MISSING")
  .build();
const INPUT_FIELDS_OVERLOAD = notificationBuilder
  .create()
  .message("INPUT_FIELDS_OVERLOAD")
  .notificationCode(5000)
  .notificationReason("INPUT_FIELDS_OVERLOAD")
  .build();
const INPUT_FIELDS_NOT_DEFINED_ERROR = notificationBuilder
  .create()
  .message("INPUT_FIELDS_NOT_DEFINED_ERROR")
  .notificationCode(5000)
  .notificationReason("INPUT_FIELDS_NOT_DEFINED_ERROR")
  .build();
const INPUT_FILED_TYPE_WRONG = notificationBuilder
  .create()
  .notificationCode(5000)
  .notificationReason("INPUT_FILED_TYPE_WRONG");

const OUTPUT_FIELDS_MISSING = notificationBuilder
  .create()
  .message("OUTPUT_FIELDS_MISSING")
  .notificationCode(5000)
  .notificationReason("OUTPUT_FIELDS_MISSING")
  .build();
const OUTPUT_FIELDS_OVERLOAD = notificationBuilder
  .create()
  .message("OUTPUT_FIELDS_OVERLOAD")
  .notificationCode(5000)
  .notificationReason("OUTPUT_FIELDS_OVERLOAD")
  .build();

const REQUIRED_FIELDS_NOT_DEFINED = notificationBuilder
  .create()
  .message(
    "Required fields is not denied, If you want to check io fields you need to provide required fields."
  )
  .notificationReason("REQUIRED_FIELDS_NOT_DEFINED")
  .build();
const REQUIRED_FIELD_TYPE_WRONG = notificationBuilder
  .create()
  .message("Required field type is wrong")
  .notificationReason("REQUIRED_FIELD_TYPE_WRONG")
  .build();

const REQUIREMENT_ITEM_MISSING = notificationBuilder
  .create()
  .message("Requirement item missing")
  .notificationReason("REQUIREMENT_ITEM_MISSING")
  .build();

const URL_NOT_FOUND = notificationBuilder
  .create()
  .message("Url not found")
  .notificationReason("URL_NOT_FOUND")
  .build();

const VERIFY_TOKEN_NOT_FOUND = notificationBuilder
  .create()
  .notificationCode(4000)
  .notificationReason("VERIFY_TOKEN_NOT_FOUND")
  .message("Verify token not defined")
  .build();

const error = {
  ECONNABORTED,
  INPUT_FIELDS_MISSING,
  INPUT_FIELDS_NOT_DEFINED_ERROR,
  INPUT_FIELDS_OVERLOAD,
  INPUT_FILED_TYPE_WRONG,
  OUTPUT_FIELDS_MISSING,
  OUTPUT_FIELDS_OVERLOAD,
  REQUIRED_FIELD_TYPE_WRONG,
  REQUIRED_FIELDS_NOT_DEFINED,
  REQUIREMENT_ITEM_MISSING,
  URL_NOT_FOUND,
  VERIFY_TOKEN_NOT_FOUND,
};

export { error };
