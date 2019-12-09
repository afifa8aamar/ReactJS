import React, {useState, useEffect}  from 'react';
import List from './List';
import Form from './Form'


const project = React.memo((props) => {
    const [list, setList] = useState([]);

    useEffect(() => { //ComponentDidUpdate, eshveba pirvelive DidMount-zec
        fetch("http://ug.logos.ge/get.php")
        .then(response => response.json())
        .then(response => {
            console.log(response);
            setList(response.list)
        })
        .catch(error => error)
    }, []);



    const addToList = (title, desc) => {
        fetch(`http://ug.logos.ge/set.php?title=${title}&desc=${desc}`)
        .then(response => response.json())
        .then(response => {
            setList([...list, {title, desc}])
        })
        .catch(error => error)
        //setList([...list, {title, desc}]);
    }

    return (
        <React.Fragment>
            <Form addToList={addToList} />
            <List list={list} />
        </React.Fragment>
    )
})

export default project