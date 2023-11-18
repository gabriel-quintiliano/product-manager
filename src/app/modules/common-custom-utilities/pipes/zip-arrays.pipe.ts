import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'zipArrays'
})
export class ZipArraysPipe implements PipeTransform {

	transform(arraysArr: Array<any[]>): Array<any[]> {

		if (!ZipArraysPipe.isSameLength(arraysArr)) {
			throw new Error("zipArrays pipe only works with an array that comprises arrays of the same length within")
		}

		const arraysToMerge = arraysArr.length;
		const arraysLength = arraysArr[0].length

		const zippedArray: Array<any[]> = new Array(arraysLength).fill('').map(() => new Array())

		for (let i = 0; i < arraysToMerge; i++) {

			const curArr = arraysArr[i]

			for (let elem = 0; elem < arraysLength; elem++) {
				zippedArray[elem].push(curArr[elem])
			}
		}

		return zippedArray;
	}


	private static isSameLength(arraysArr: Array<any>[]): boolean {

		let prevArrLen = arraysArr[0].length; // length from 1st array from arraysArr

		for (let arr of arraysArr) {

			if (arr.length != prevArrLen) {
				return false;
			}
			prevArrLen = arr.length;
		}

		return true;
	}

}
