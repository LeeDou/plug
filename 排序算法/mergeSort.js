this.mergeSort = function() {
	array = mergeSortRec(array);
};

var mergeSortRec = function(array) {
	var length = array.length;
	if (length === 1) {
		return array;
	}
	var mid = Math.floor(length/2),
		left = array.slice(0, mid),
		right = array.slice(mid, length);

	return merge(mergeSortRec(left), mergeSortRec(right));	
};

var merge = function (left, right){
	var result = [],
		il = 0,
		ir =0;
	while(il < left.length && ir < right.length){
		if (left[il] < right[ir]) {
			result.push(left[il++]);
		} else{
			result.push(right[ir++]);
		}
	}

	while (il<left.length){
		result.push(left[il++]);
	}

	while (ir<right.length){
		result.push(right[ir++]);
	}	

	return result;
}