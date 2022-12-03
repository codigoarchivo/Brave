import { ICategory, IEntry } from "../interfaces";

export const listDinamic = (categorias: ICategory[], servicios: IEntry[]) => {
    let unite: IEntry[] = [];

    categorias.map(({ type, id }: ICategory) => {
        const fil = servicios.filter(({ cat }) => cat === id) as IEntry[];
        const resp = { type, fil };
        unite.push(resp);
    })

    return unite;
}
