import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'zipObjects'
})

/**
 * zipObjects is a pipe that can be used to pair values of two or more objects together to make
 * it possible to use data from different objects all at once inside the same ngFor directive.
 * 
 * This pipe will mainly be useful when the order of the keys doesn't matter.
 * 
 * zipObjects takes an array of objects and returns another array of objects for all the common
 * keys these objects share, containing the key and paired values of all the objects for that keys,
 * the values within the values key are according to the order of the objects in the array receuved
 * by the pipe.
 * 
 * Here is an example:
 * const desc = {name: "person's name", age: "person's age", birthdate: "when person was born"};
 * const person = {name: "Gabriel", age: 20, mom: "Silvia", dad: "Gildo" birthdate: "12/06/2000"}
 * 
 * [person, desc] | zipObjects
 * 
 * // returns the following array:
 * [
 *     {key: "name", values: ["Gabriel", "person's name"]},
 *     {key: "age", values: [20, "person's age"]},
 *     {key: "birthdate", values: ["12/06/2000", "when person was born"]},
 * ]
 */
export class ZipObjectsPipe implements PipeTransform {


	transform(objectsArr: Array<Object>): ZippedObject[] {

		const commonKeys: string[] = [];

		if (!commonKeys.push(...ZipObjectsPipe.getCommonKeys(objectsArr))) {
			throw new Error("zipObjects pipe only works with an array that comprises objects with at least one key in common within")
		}

		const zippedObjectsArray: ZippedObject[] = []

		for (let i = 0; i < commonKeys.length; i++) {
			const key = commonKeys[i]
			zippedObjectsArray[i] = { key, values: [] }

			for (let obj of objectsArr) {
				zippedObjectsArray[i].values.push((obj as { [key: string]: any })[key])
				// without the assertion above we can't access values from 'obj' via bracket notation with strings
			}
		}

		return zippedObjectsArray;
	}


	private static getCommonKeys(objectsArr: Array<Object>): string[] {

		const commonKeys: string[] = [];
		const smallerObj = ZipObjectsPipe.getObjectWithLessKeys(objectsArr); // gets the most "specific" object

		for (let key in smallerObj) {

			let keyAccepted = true

			for (let obj of objectsArr) {
				if (!(key in obj)) {
					keyAccepted = false
					break
				}
			}

			if (keyAccepted) commonKeys.push(key)
		}

		return commonKeys;
	}


	private static getObjectWithLessKeys(objectsArr: Array<Object>) {

		let lesserKeyObj = objectsArr[0]
		let lesserKeyLen = Object.keys(objectsArr[0]).length; // length from 1st array from objectsArr

		for (let obj of objectsArr) {

			const curKeyLen = Object.keys(obj).length

			if (curKeyLen < lesserKeyLen) {
				lesserKeyObj = obj;
				lesserKeyLen = curKeyLen;
			}
		}

		return lesserKeyObj;
	}

}


type ZippedObject = { key: string, values: any[] }