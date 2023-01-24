import {useState} from 'react';


const TodoBox = () => {

    const [data, setData] = useState([{value: 'Here is empty', id: 1}, {value: 'Here too', id: 2}, {
        value: 'And here',
        id: 3
    }])
    const [note, setNote] = useState('')
    const [currentId, setCurrentId] = useState(4)

    const deleteItem = (event) => {
        const id = +event.currentTarget.getAttribute('data-id');
        setData(data.filter(item => item.id !== id))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (note.length < 3) return;
        setData((data) => [{value: note, id: currentId}, ...data]);
        setCurrentId(currentId + 1);
        setNote('');

    }

    const onValueChange = (e) => {
        setNote(e.target.value)
    }

    const renderList = data.map((item) => (
        <div key={item.id}>
            <div className="row m-3">
                <div className="col-auto">
                    <button type="button" className="btn btn-primary btn-sm"
                            data-id={item.id}
                            onClick={deleteItem}>Delete
                    </button>
                </div>
                <div className="col">{item.value}</div>
            </div>
            <hr/>
        </div>
    ))
    return (
        <div>
            <div className="m-3">
                <form className="d-flex"
                      onSubmit={onSubmit}>
                    <div className="me-3">
                        <input type="text" value={note} required="" className="form-control"
                               placeholder="I am going..."
                               onChange={onValueChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary">add</button>
                </form>
            </div>
            {renderList}
        </div>
    );
}

export default TodoBox;