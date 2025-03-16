import MySelect from "../UI/select/MySelect";
import MyInput from "../UI/input/MyInput";

const QrFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                placeholder='Поиск...'
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
            <MySelect
                defaultValue='Сортировка'
                value={filter.sort}
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'date', name: 'По дате создания'}
                ]}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
            />
        </div>
    );
}
export default QrFilter;