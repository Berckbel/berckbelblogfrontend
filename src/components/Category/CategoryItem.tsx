export const CategoryItem = ({ category }: { category: Category }) => {
    return (
        <option value={category.id}>{category.name}</option>
    )
}