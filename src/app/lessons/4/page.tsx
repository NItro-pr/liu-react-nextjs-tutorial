const products = [
  { title: 'りんご', isFruit: true, id: 1 },
  { title: 'キャベツ', isFruit: false, id: 2 },
  { title: 'バナナ', isFruit: true, id: 3 },
];

export default function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'red' : 'green'
      }}
    >
      {product.title}
    </li>
  );

  return <ul>{listItems}</ul>;
}