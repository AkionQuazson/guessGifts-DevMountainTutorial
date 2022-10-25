const guessGifts = (list, gifts) => {
    let potential = [];

    for (let l = 0; l < list.length; l++) {
		const item = list[l];
		for (let g = 0; g <gifts.length; g++) {
			const gift = gifts[g];
			
			if (item.size === gift.size){
				if (item.clatters === gift.clatters){
					if (item.weight === gift.weight){
						potential.push(list[l].name);
					}
				}	
			}
		}
	}
	potential = [...new Set(potential)];
	
	return potential;
}

var wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

var presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];

console.log(guessGifts(wishlist, presents)); // must return ["Toy Car", "Mini Puzzle"]