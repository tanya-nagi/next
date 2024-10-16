import { body } from "express-validator";

export const DeleteImageValidation = [
    body("imageId")
    .isArray({min: 1}).withMessage("Image id must be array.")
    .custom((value) => {
        if(value.every((id: string) => typeof id === 'string')) {
            return true
        }
        throw new Error()
    })
    .withMessage("Id must be string")
]