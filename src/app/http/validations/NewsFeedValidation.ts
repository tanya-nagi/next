import { body } from "express-validator";
import { stringRegex, dateRegex } from "@app/helpers";

export const AddNewsFeedValidation = [
  body("title")
    .exists()
    .withMessage("Title field is required.")
    .notEmpty()
    .withMessage("Title field is required.")
    .isLength({ max: 300 })
    .withMessage("Title field cannot be greater than 40 words.")
    .matches(stringRegex)
    .withMessage("Title should only contains alphabets and numbers."),

  body("subtitle")
    .exists()
    .withMessage("Subtitle field is required.")
    .notEmpty()
    .withMessage("Subtitle field is required.")
    .isLength({ max: 500 })
    .withMessage("Subtitle field cannot be greater than 100 words.")
    .matches(stringRegex)
    .withMessage("Subtitle should only contains alphabets and numbers."),

  body("content")
    .exists()
    .withMessage("Content field is required.")
    .notEmpty()
    .withMessage("Content field is required.")
    .isLength({ max: 2000 })
    .withMessage("Content field cannot be greater than 13000 words."),

  body("publishedAt")
    .exists()
    .withMessage("Publish date is required.")
    .notEmpty()
    .withMessage("Publish date is required.")
    .isDate()
    .withMessage("Publish date should be a valid date."),
];

export const UpdateNewsFeedValidation = [
  body("title")
    .isLength({ max: 300 })
    .withMessage("Title field cannot be greater than 40 words.")
    .custom((title) => {
      if (title) {
        if (!stringRegex.test(title)) {
          throw new Error();
        }
      }
      return true;
    })
    .withMessage("Title should only contains alphabets and numbers."),

  body("subtitle")
    .isLength({ max: 500 })
    .withMessage("Subtitle field cannot be greater than 100 words.")
    .custom((subtitle) => {
      if (subtitle) {
        if (!stringRegex.test(subtitle)) {
          throw new Error();
        }
      }
      return true;
    })
    .withMessage("Subtitle should only contains alphabets and numbers."),

  body("content")
    .isLength({ max: 2000 })
    .withMessage("Content field cannot be greater than 13000 words.")
    .custom((content) => {
      if (content) {
        if (!stringRegex.test(content)) {
          throw new Error();
        }
      }
      return true;
    })
    .withMessage("Content should only contains alphabets and numbers."),

  body("publishedAt")
  .custom((publishedAt) => {

    if(publishedAt) {
       if(!dateRegex.test(publishedAt)) {
        throw new Error()
       }
    }
    return true
  })
  .withMessage("Publish date should be a valid date."),
];

export const DeleteNewsFeedValidation = [
  body("newsFeedId")
    .exists()
    .withMessage("Please select any news feed.")
    .notEmpty()
    .withMessage("Please select any news feed."),
];
