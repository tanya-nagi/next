import {
  ValidationChain,
  ResultFactory,
  ValidationError,
} from "express-validator";

const initMiddleware = (
  validationRules: ValidationChain[],
  validationResult: ResultFactory<ValidationError>
) => {
  return async (req: any, res: any, next: (result: any) => void) => {
    await Promise.all(validationRules.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      next("true");
    } else {
      next(errors);
    }
  };
};

export function validation(
  validationRules: ValidationChain[],
  validationResult: ResultFactory<ValidationError>
) {
  const validatedData = initMiddleware(validationRules, validationResult);
  return (req: any, res: any) => {
    return new Promise((resolve, reject) => {
      validatedData(req, res, (result?: any) => {
        if (result?.errors?.length > 0) {
          return reject(result);
        }
        return resolve(result);
      });
    });
  };
}

