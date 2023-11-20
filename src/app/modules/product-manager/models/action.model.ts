const Actions = {
	add_product: 'add',
	delete_product: 'delete',
	edit_product: 'edit',
} as const;

type Action = typeof Actions[keyof typeof Actions]

export { Action, Actions }