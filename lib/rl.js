export function randInt(s,e){
	return Math.floor(Math.random() * e) + s
}

export function dice(d=1,s=20,m=0){
	let total=0;
	for(let i=0;i<d;i++){
		total+=randInt(1,s)
	}
	return total+m;
}