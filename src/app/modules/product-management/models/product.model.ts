type ProductKeyIdentifier = "sku" | "name" | "costPrice" | "relatedExpenses" | "markup" | "margin" | "sellingPrice"

type ProductDefaultsType = {
	[key in ProductKeyIdentifier]: {
		label: string,
		description: string
	};
}

const ProductDefaults: ProductDefaultsType = {
	sku: { label: "sku", description: "Código exclusivo de um produto utilizado para identificar o mesmo com base em suas características" },
	name: { label: "nome", description: "Nome do produto que aparecerá no site da loja" },
	costPrice: { label: "preço de custo", description: "Preço pago para adquirir o produto do fornecedor/fabricá-lo" },
	relatedExpenses: { label: "despesas relacionadas", description: "Demais despesas relacionadas ao produto como: transporte, impostos, embalagem..." },
	markup: { label: "markup", description: "Valor adicionado ao preço de custo e despesas relacionadas - lucro" },
	margin: { label: "margin", description: "Margem de lucro sobre o preço de venda em porcentagem" },
	sellingPrice: { label: "preço de venda", description: "Preço final pelo qual o produto será comercializado" }
} as const;


type ProductProperty<T> = {
	value: T;
	readonly label: string;
	readonly description: string;
}

class Product {
	sku: ProductProperty<string>;
	name: ProductProperty<string>;
	costPrice: ProductProperty<number>;
	relatedExpenses: ProductProperty<number>;
	markup: ProductProperty<number>;
	margin: ProductProperty<number>;
	sellingPrice: ProductProperty<number>;

	constructor(sku: string, name: string, costPrice: number, relatedExpenses: number, markup: number, margin: number, sellingPrice: number) {
		this.sku = { value: sku, ...ProductDefaults.sku };
		this.name = { value: name, ...ProductDefaults.name };
		this.costPrice = { value: costPrice, ...ProductDefaults.costPrice };
		this.relatedExpenses = { value: relatedExpenses, ...ProductDefaults.relatedExpenses };
		this.markup = { value: markup, ...ProductDefaults.markup };
		this.margin = { value: margin, ...ProductDefaults.margin };
		this.sellingPrice = { value: sellingPrice, ...ProductDefaults.sellingPrice };
	}
}

export { Product, ProductDefaults }