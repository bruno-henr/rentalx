import { v4 } from 'uuid'
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity("cars_image")
export class CarImage {
    @PrimaryColumn()
    id: string
    @Column()
    car_id: string
    @Column()
    image_name: string
    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = v4();
        }
    }
}