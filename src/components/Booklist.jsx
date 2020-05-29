//Booklist.jsx
import React, {useState, useEffect} from 'react';

const Booklist = props => {
    const [bookData,setBookData] = useState(null);
    useEffect(() => {
        const result = props.getData?.(props.language).then(response => setBookData(response));
    },[props])
    console.log(bookData);

    return (
        <div>  
            <ul>
                {
                    bookData === null
                    ? <p>now loading...</p>
                    : bookData.data.items.map((x, index) =>
                            <li key={index}><p>{x.volumeInfo.title}</p><p>著者　{x.volumeInfo.authors}</p><img border="0" src={x.volumeInfo.imageLinks?.smallThumbnail} width="100" height="150" alt="bookイメージ"></img></li>
                        )
                }                
            </ul>
        </div>
    );
}

export default Booklist;