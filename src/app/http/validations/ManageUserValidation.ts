import { User } from "@app/database/models/User";
import { body } from "express-validator";

export const addUserValidation = [
  body("email")
    .exists({ checkFalsy: true })
    .withMessage("Email is required.")
    .notEmpty()
    .withMessage("Email is required.")
    .isEmail()
    .withMessage("Email is invalid.")
    .custom(async (value) => {
      const user = await User.findOne({email: value})
      if(user) {
        throw new Error()
      }
      return true
    })
    .withMessage("Email already exists"),
];

export const deleteUserValidation = [
  body("userId")
    .exists({ checkFalsy: true })
    .withMessage("Please select any user.")
    .notEmpty()
    .withMessage("Please select any user."),
];
