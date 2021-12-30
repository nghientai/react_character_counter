import { useState } from 'react';
import './App.css';

function App() {
    const [text, setText] = useState('');
    const [mostFrequentCharacter, setMostFrequentCharacter] = useState([]);

    const findFrequentCharacter = (str) => {
        let characterArr = str.split(''),
            charCount = {};

        // Count the number of times each character appears in the string
        // and store in the hash table
        characterArr.map((char) => (charCount[char] = (charCount[char] || 0) + 1));

        // Map the hash table to an array of objects and sort by the count
        let sortedCharCount = Object.keys(charCount)
            .map((key) => ({
                character: key,
                count: charCount[key],
            }))
            .sort((a, b) => b.count - a.count);

        // Return the most frequent character in order of appearance
        return sortedCharCount;
    }

    const handleClick = (e) => {
        e.preventDefault();
        setMostFrequentCharacter(findFrequentCharacter(text));
        console.log(findFrequentCharacter(text));
    }

    return (
        <div className='body-bg min-h-screen pt-6 md:pt-10 pb-6 px-2 md:px-0'>
            <header className='max-w-lg mx-auto'>
                <h1 className='text-4xl font-bold text-white text-center'>Character Counter App</h1>
            </header>
            <main className='max-w-screen-lg mx-auto my-10 bg-transparent w-full grid grid-cols-2 gap-4'>
                {/* The form*/}
                <div className='w-full flex flex-col'>
                    <div className='mb-6 p-3 rounded bg-gray-200'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='inputText'>
                            Input text
                        </label>
                        <textarea
                            onChange={(e) => setText(e.target.value)}
                            className='rounded w-full text-gray-700 focus:outline-none border-1 border-gray-300 focus:border-purple-600 transition duration-500 p-3 pb-3'
                            name='inputText'
                            id='inputText'
                            cols='30'
                            rows='5'></textarea>
                    </div>
                    <button
                        onClick={handleClick}
                        className='bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-1 rounded shadow-lg hover:shadow-xl transition duration-200'>
                        Submit
                    </button>
                </div>
                {/* The statistic */}
                <div className='w-full flex flex-col'>
                    <div className={`mb-6 p-3 rounded bg-gray-200 ${mostFrequentCharacter.length > 0 ? 'h-96 overflow-y-auto' : 'min-h-full'} `}>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='inputText'>
                            Statistics
                        </label>
                        <table class='min-w-full divide-y divide-gray-200'>
                            <thead class='bg-gray-50'>
                                <tr>
                                    <th scope='col' class='p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                        #
                                    </th>
                                    <th scope='col' class='p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                        Character
                                    </th>
                                    <th scope='col' class='p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                        Count
                                    </th>
                                </tr>
                            </thead>
                            <tbody class='bg-white'>
                                {mostFrequentCharacter.length === 0 ? (
                                    <tr>
                                        <td colSpan='3' class='p-4 whitespace-nowrap text-sm font-normal text-gray-900'>
                                            No results
                                        </td>
                                    </tr>
                                ) : (
                                    mostFrequentCharacter.map((char, index) => {
                                        return (
                                            <tr key={index} className={`${index % 2 === 0 ? null : 'bg-gray-50'}`}>
                                                <td class='p-4 whitespace-nowrap text-sm font-normal text-gray-900'>{index + 1}</td>
                                                <td class='p-4 whitespace-nowrap text-sm font-normal text-gray-900'>{char.character}</td>
                                                <td class='p-4 whitespace-nowrap text-sm font-normal text-gray-900'>{char.count}</td>
                                            </tr>
                                        );
                                    })
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
