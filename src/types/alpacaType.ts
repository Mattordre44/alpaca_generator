import { Category } from "./category";

export type AlpacaType = {
    [key in Category]: string;
}
