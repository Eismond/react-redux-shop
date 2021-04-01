import React from 'react';
import BookList from '../book-list';

const HomePage = () => {
    return (<div>
        <BookList books={[{ title: 'Gray', author: 'Me' }]} />
    </div>)
}

export default HomePage;
