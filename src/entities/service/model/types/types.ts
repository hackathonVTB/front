export interface Category {
  id: number;
  name: string;
}

export interface Subcategories {
  id: number;
  name: string;
  category_id: number;
}

export type CategorySelect =
  | 'Кредиты'
  | 'Карты'
  | 'Ипотека'
  | 'Вклады и счета'
  | 'Инвестиции'
  | 'Страхование';
