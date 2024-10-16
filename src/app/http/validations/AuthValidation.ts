import { body } from "express-validator";
import { passwordRegex } from "@app/helpers";

export const signupValidation = [
  body("fullName")
    .exists({ checkFalsy: true })
    .withMessage("Full name is required.")
    .notEmpty()
    .withMessage("Full name is required.")
    .isString()
    .withMessage("Full name should not contain numbers."),

  body("email")
    .exists({ checkFalsy: true })
    .withMessage("Email is required.")
    .notEmpty()
    .withMessage("Email is required.")
    .isEmail()
    .withMessage("Email is invalid."),

  body("password")
    .exists({ checkFalsy: true })
    .withMessage("Password is required.")
    .notEmpty()
    .withMessage("Password is required.")
    .matches(passwordRegex)
    .withMessage(
      "Password must contain one uppercase character, one lowercase character, one special character and one numeric"
    ),
];

export const signinValidation = [
  body("email")
    .exists({ checkFalsy: true })
    .withMessage("Email is required.")
    .notEmpty()
    .withMessage("Email is required.")
    .isEmail()
    .withMessage("Email is invalid."),

  body("password")
    .exists({ checkFalsy: true })
    .withMessage("Password is required.")
    .notEmpty()
    .withMessage("Password is required.")
    .matches(passwordRegex)
    .withMessage( 
      "Password must contain one uppercase character, one lowercase character, one special character and one numeric"
    ),
];

export const ResetPasswordSendOTPValidation = [
  body("email")
    .exists({ checkFalsy: true })
    .withMessage("Email is required.")
    .notEmpty()
    .withMessage("Email is required.")
    .isEmail()
    .withMessage("Email is invalid.")
];

export const VerifyOTPValidation = [
  body("email")
    .exists({ checkFalsy: true })
    .withMessage("Email is required.")
    .notEmpty()
    .withMessage("Email is required.")
    .isEmail()
    .withMessage("Email is invalid."),

  body("otp")
    .exists({ checkFalsy: true })
    .withMessage("OTP is required")
    .notEmpty()
    .withMessage("OTP is required"),

  body("type")
    .exists()
    .withMessage("OTP type is required")
    .notEmpty()
    .withMessage("OTP type is required"),
];

export const VerifyEmailValidation = [
  body("userId")
    .exists({ checkFalsy: true })
    .withMessage("User id is required")
    .notEmpty()
    .withMessage("User id is required"),
];

export const ChangePasswordValidation = [
  body("email")
    .exists({ checkFalsy: true })
    .withMessage("Email is required.")
    .notEmpty()
    .withMessage("Email is required.")
    .isEmail()
    .withMessage("Email is invalid."),

    body("newPassword")
    .exists({ checkFalsy: true })
    .withMessage("New password is required.")
    .notEmpty()
    .withMessage("New password is required.")
    .matches(passwordRegex)
    .withMessage( 
      "New password must contain one uppercase character, one lowercase character, one special character and one numeric"
    ),

    body("confirmedPassword")
    .exists({ checkFalsy: true })
    .withMessage("Confirm password is required.")
    .notEmpty()
    .withMessage("Confirm password is required.")
    .matches(passwordRegex)
    .withMessage( 
      "Confirm password must contain one uppercase character, one lowercase character, one special character and one numeric"
    ),
]
