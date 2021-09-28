export class ArrayModel {
    key: string;
    value: string;
}

export class ProductModel {
    id: number;
    category: string;
    name: string;
    ratings = 0;
    reviewCount = 0;
    discount: number;
    oriRate: number;
    disRate: number;
    feature: string[];
    specification?: ArrayModel[];
    images: string[];
    colorVariant: ArrayModel[];
}

export class FilterObject {
    discountRates: number[];
    maxVal: number;
    minVal: number;
}
