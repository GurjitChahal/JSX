import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className = "ui container comments" >
        <ApprovalCard> 
            <CommentDetail author = "Sam" 
                date = "Today at 4:45PM" 
                 avatar = "faker.image.avatar"
                content = "woah!"
                avatar = {faker.image.avatar()}
             />
         </ApprovalCard>
         <ApprovalCard> 
        <CommentDetail 
         author = "Jake" 
         date = "Today at 2:45PM" 
         content = "cool post"
         avatar = {faker.image.avatar()}
         />
         </ApprovalCard>
         <ApprovalCard> 
        <CommentDetail 
         author = "Max" 
         date = "Today at 1:45PM"
         content = "cool!"
         avatar = {faker.image.avatar()}
         />
         </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));