export type CourseCards = CourseCard[];

export interface CourseCard {
    title: string;
    image: string;
    category_name: string;
    level_name: string;
    price: number;
    user_name: string;
}