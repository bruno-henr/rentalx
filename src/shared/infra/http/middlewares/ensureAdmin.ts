import { NextFunction, Response, Request } from "express";
import { UserRepository } from "../../../../modules/accounts/infra/typeorm/repositories/UserRepository";

import { AppError } from "../../../errors/AppError";

export async function ensureAdmin(request: Request, response: Response, next: NextFunction) {
    const { id } = request.user;

    const usersRepository = new UserRepository();
    const user = await usersRepository.findById(id);

    if(!user.is_admin) {
        throw new AppError("User isn't admin!");
    }

    return next();
}