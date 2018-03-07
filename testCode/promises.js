var promise = new Promise( function (resolve,reject) {
	var success = true;

	if (success){
		resolve('promis fulfilled');
	} else{
		reject('promis failed');
	}
});

