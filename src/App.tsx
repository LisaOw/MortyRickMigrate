import React from 'react';
import Header from './Header';
import CharacterList from './CharacterList';

const App: React.FC = () => {
    return (
        <div className="bg-gray-100 py-2">
            <Header />
            <div className="bg-lightBlack bg-cover min-h-screen px-10 py-12 lg:p-20">
                <CharacterList className="w-full container mx-auto" />
            </div>
        </div>
    );
};

export default App;
