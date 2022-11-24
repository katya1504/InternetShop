import Filter from "./Filter";

const Allcategories = () => {

    return(
    <div>
        <div className="block_two" >
{['Кресла', 'Барные стулья', 'Стулья', 'Кофейные столы', 'Диваны', 'Качели', 'Столы', 'Декор', 'Сухоцветы', 'Лампы', 'Текстиль','Весь ассортимент'].map(category =>     

<Filter category={category} key={category}/>)}
    </div>
    </div>
    )
    }
    
    export default Allcategories;