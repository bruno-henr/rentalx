import { Repository, getRepository } from 'typeorm'
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "../../../repositories/interfaces/ISpecificationRepository";
import { Specification } from '../entities/Specification';

export class SpecificationRepositories implements ISpecificationRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification)
  }
  async findByIds(ids: string[]): Promise<Specification[]> {
    const specifications = await this.repository.findByIds(ids);
    return specifications
  }

  async findByName(name: string): Promise<Specification> {
      const specification = await this.repository.findOne({name})
      return specification
  }

  async create({ description, name }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = this.repository.create({
      description,
      name
    })

    await this.repository.save(specification)
    return specification
  }
}
