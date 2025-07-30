import {getCars} from "@/services/api.service";
import {CarComponent} from "@/components/CarComponent";

const ListPage = async () => {
    const data = await getCars()

    return (
        <ul>
            {data.map(value => <li key={value.id}><CarComponent car={value}/></li>)}
        </ul>
    );
}

export default ListPage;