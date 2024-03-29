
import { inject, injectable } from 'tsyringe';
import { ICarsImageRepository } from '../../repositories/interfaces/ICarsImageRepository';
interface IRequest {
    car_id: string
    images_name: string[]
}
@injectable()
export class UploadCarImageUseCase {

    constructor(
        @inject("CarsImagesRepository")
        private carsImagesRepository: ICarsImageRepository
    ) {}

    async execute({ car_id, images_name }: IRequest) {
        images_name.map(async (image: any) => {
            await this.carsImagesRepository.create(car_id, image)
        })
    }
}