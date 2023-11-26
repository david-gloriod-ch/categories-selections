const articles = [
	{
		name: 'A',
		categories: [1, 2, 3]
	},
	{
		name: 'B',
		categories: [2, 3, 4]
	},
	{
		name: 'C',
		categories: [1, 3, 4]
	}
];

const selected_categories = [2, 3];

console.log('selected_categories:', selected_categories);
console.log();
console.log();

const result = articles.filter(article => {
	console.log('article:', article);
	console.log();
	return selected_categories.every(category => {
		console.log('category:', category);
		console.log('includes:', article.categories.includes(category));
		return article.categories.includes(category)
	});
});

console.log();
console.log('result:');
console.log(result);
