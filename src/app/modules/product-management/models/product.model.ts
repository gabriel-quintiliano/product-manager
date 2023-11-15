// export interface IProduct {
// 	sku: ProductProperty<string>;
// 	name: ProductProperty<string>;
// 	costPrice: ProductProperty<number>;
// 	relatedExpenses: ProductProperty<number>;
// 	markup: ProductProperty<number>;
// 	margin: ProductProperty<number>;
// 	sellingPrice: ProductProperty<number>;
// } // Maybe this interface is not really necessary in the end

export type ProductProperty<T> = {
	value: T;
	label: string;
	description: string;
}

export class Product {
	sku: ProductProperty<string>;
	name: ProductProperty<string>;
	costPrice: ProductProperty<number>;
	relatedExpenses: ProductProperty<number>;
	markup: ProductProperty<number>;
	margin: ProductProperty<number>;
	sellingPrice: ProductProperty<number>;

	constructor(sku: string, name: string, costPrice: number, relatedExpenses: number, markup: number, margin: number, sellingPrice: number) {
		this.sku = { value: sku, label: "sku", description: "Código exclusivo de um produto utilizado para identificar o mesmo com base em suas características" };
		this.name = { value: name, label: "nome", description: "Nome do produto que aparecerá no site da loja" };
		this.costPrice = { value: costPrice, label: "preço de custo", description: "Preço pago para adquirir o produto do fornecedor/fabricá-lo" };
		this.relatedExpenses = { value: relatedExpenses, label: "despesas relacionadas", description: "Demais despesas relacionadas ao produto como: transporte, impostos, embalagem..." };
		this.markup = { value: markup, label: "markup", description: "Valor adicionado ao preço de custo e despesas relacionadas - lucro" };
		this.margin = { value: margin, label: "margem", description: "Margem de lucro sobre o preço de venda em porcentagem" };
		this.sellingPrice = { value: sellingPrice, label: "preço de venda", description: "Preço final pelo qual o produto será comercializado" };
	}
}