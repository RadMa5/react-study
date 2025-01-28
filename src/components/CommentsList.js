import { useState } from 'react';

export function CommentsList() {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ]);

    function deleteCommentary(deleteId) {
        let newArr = comments.toSpliced(deleteId - 1, 1);
        for(let i = deleteId - 1; i < comments.length - 1; i++){
            newArr[i].id = newArr[i].id - 1;
            console.log(newArr[i].id);
        }
        setComments(newArr);
    }

    return comments.map((commentary) => 
        <div key={commentary.id}>
            <p><span>{commentary.id}.</span> {commentary.text}</p>
            <button onClick={() => deleteCommentary(commentary.id)}>Delete</button>
        </div>
    );
}

export default CommentsList;