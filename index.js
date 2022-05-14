/**
 * 
 * @param {Object} valueMap 
 * An object containing key value pairs
 * @param {any -> any} transform 
 * a transform to be applied to every value, associating the new value with the existing key.
 * @returns 
 * A mapped object.
 */
export function transformMapWith(valueMap, transform) {

    let g = {};
    
    for (const key in valueMap) {
        const value = valueMap[key];
        g[key] = transform(key, value);
    }

    return g;

}

export function transformMapBy(v, _key) {

    let g = {};
    
    for (const key in v) {
        const v2 = v[key];
        g[key] = v[key][_key];
    }

    return g;

}


export function collectMapValues(values, defaultValue = null) {

    let collected = {};
    for (const key in values[0]) {
        collected[key] = values.map(v => v[key] || defaultValue);
    }
    return collected;
}

export function indexTo(entry, value) {

	const n = {};

	for (const key of entry) {

		n[key] = value;
	}

	return n;
}


export function indexBy(entries, key = null) {

	const n = {};

	for (const entry of entries) {

		const value = (entry && entry[key]) || null;
		n[value] = entry;
	}

	return n;
}

export function indexWith(keys, accessor = () => 0) {

	const n = {};

	for (let i = 0; i < keys.length; i++) {

		const key = keys[i];
		n[key] = accessor(key, i);
	}

	return n;
};

export function invert(collection){
	
	const map = {};
	for (let key in collection) {
		const value = collection[key];
		map[value] = key;
	}
	return map;
}

export function invertCollectionMap(collectionMap) {

	let map = {};
	for (const [index, keys] of Object.entries(collectionMap)) {

		map = { ...map, ...indexTo(keys, index) };

	}

	return map;
}

export function integers(max = 10) {
	let k = [];
	for (let index = 0; index < max; index++) {

		k.push(index);

	};
	return k;
}
