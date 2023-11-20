import { Component, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Action, Actions } from '../../models/action.model'

@Component({
	selector: 'pmg-product-table-actions-bar',
	templateUrl: './product-table-actions-bar.component.html',
	styleUrls: ['./product-table-actions-bar.component.css']
})
export class ProductTableActionsBarComponent {
	actions = Actions; // Just so that it can be used in the html template
	// Used to re-check if the pressed button is disabled and then prevent the
	// actionBtnPressed event to be wrongfully emited
	actionButtonsState!: actionButonState; // Initialized in ngAfterViewInit lifecyle hook
	@Output() actionBtnPressed = new EventEmitter<Action>()
	@Input({ required: true }) numberOfSelectedItems!: number;
	selectionLabel!: string;

	ngOnChanges(change: SimpleChanges) {

		if ('numberOfSelectedItems' in change) {
			if (this.numberOfSelectedItems === 1) {
				this.selectionLabel = "produto selecionado"
			} else {
				this.selectionLabel = "produtos selecionados"
			}
		}

	}

	ngAfterViewInit() {
		const thisInstance = this;
		this.actionButtonsState = {
			add: {
				disabled: false
			},
			edit: {
				get disabled() { return thisInstance.isEditDisabled() }
			},
			delete: {
				get disabled() { return thisInstance.isDeleteDisabled() }
			},
		}
	}

	sendBtnPressed(action: Action) {
		// to prevent action from a disabled button which was "re-enabled" by the user whom's
		// edited the html via dev tool. This button's state is hereby recheck from the instance.
		if (!this.actionButtonsState[action].disabled) {
			this.actionBtnPressed.emit(action);
		}
	}

	isEditDisabled(): boolean {
		return this.numberOfSelectedItems !== 1;
	}

	isDeleteDisabled(): boolean {
		return !this.numberOfSelectedItems;
	}
}

type actionButonState = {
	[key in Action]: {
		disabled: boolean
	}
}