type IProduct = {
	sku: string,
	name: string,
	costPrice: number,
	relatedExpenses: number,
	markup: number,
	margin: number,
	sellingPrice: number,
}

type ProductFeaturesMetadata = {
	[key in keyof IProduct]: {
		label: string,
		description: string
	};
}

const ProductMetadata: ProductFeaturesMetadata = {
	sku: { label: "sku", description: "Código exclusivo de um produto utilizado para identificar o mesmo com base em suas características" },
	name: { label: "nome", description: "Nome do produto que aparecerá no site da loja" },
	costPrice: { label: "preço de custo", description: "Preço pago para adquirir o produto do fornecedor/fabricá-lo" },
	relatedExpenses: { label: "despesas relacionadas", description: "Demais despesas relacionadas ao produto como: transporte, impostos, embalagem..." },
	markup: { label: "markup", description: "Valor adicionado ao preço de custo e despesas relacionadas - lucro" },
	margin: { label: "margin", description: "Margem de lucro sobre o preço de venda em porcentagem" },
	sellingPrice: { label: "preço de venda", description: "Preço final pelo qual o produto será comercializado" }
} as const;

class Product implements IProduct {
	constructor(
		public sku: string,
		public name: string,
		public costPrice: number,
		public relatedExpenses: number,
		public markup: number,
		public margin: number,
		public sellingPrice: number) {
	}
}

export { Product, ProductMetadata }