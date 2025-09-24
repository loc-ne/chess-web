'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import Board from '@/components/Board';

interface GameMode {
    name: string;
    times: string[];
}

const gameModes: GameMode[] = [
    {
        name: 'Bullet',
        times: ['1+0', '1+1', '2+1'],
    },
    {
        name: 'Blitz',
        times: ['3+0', '3+2', '5+0'],
    },
    {
        name: 'Rapid',
        times: ['10+0', '10+5', '15+10'],
    },
    {
        name: 'Classical',
        times: ['30+0', '30+20'],
    }
];

export default function OnlinePlayPage() {
    const [selectedMode, setSelectedMode] = useState<string | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [isSearching, setIsSearching] = useState(false);

    const handlePlayClick = () => {
        if (selectedMode && selectedTime) {
            setIsSearching(true);
            setTimeout(() => {
                setIsSearching(false);
            }, 3000);
        }
    };

    const handleCancelSearch = () => {
        setIsSearching(false);
    };

    if (isSearching) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl p-8 shadow-lg text-center max-w-sm w-full">
                    <div className="w-12 h-12 border-3 border-gray-200 border-t-blue-500 rounded-full animate-spin mx-auto mb-6"></div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">Finding opponent...</h2>
                    <p className="text-gray-600 text-xl mb-6">{selectedMode} • {selectedTime}</p>
                    <button
                        onClick={handleCancelSearch}
                        className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition-colors"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-4 mt-10">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start justify-center">
                    
                    <div className="flex-shrink-0">
                        <Board
                            playerColor={'white'}
                            initialFen={"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"}
                        />
                    </div>

                    <div className="w-full max-w-md">
                        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">

                            <div className="px-6 pt-6 pb-2">
                                <h2 className="text-lg font-semibold text-gray-900">Game Mode</h2>
                            </div>

                            <div className="p-6 pt-2 border-b border-gray-100">
                                <div className="grid grid-cols-2 gap-3">
                                    {gameModes.map((mode) => (
                                        <button
                                            key={mode.name}
                                            onClick={() => {
                                                setSelectedMode(mode.name);
                                                setSelectedTime(null);
                                            }}
                                            className={`p-4 rounded-2xl border-2 transition-all text-left ${
                                                selectedMode === mode.name
                                                    ? 'border-blue-500 bg-blue-50'
                                                    : 'border-gray-200 hover:border-gray-300 bg-white'
                                            }`}
                                        >
                                            <div className="flex items-center space-x-3">
                                                <div>
                                                    <div className="font-semibold text-gray-900">{mode.name}</div>
                                                    <div className="text-xs text-gray-500">{mode.times.join(', ')}</div>
                                                </div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {selectedMode && (
                                <div className="p-6 border-b border-gray-100">
                                    <h3 className="font-semibold text-gray-900 mb-4">Time Control</h3>
                                    <div className="grid grid-cols-3 gap-2">
                                        {gameModes
                                            .find((mode) => mode.name === selectedMode)
                                            ?.times.map((time) => (
                                                <button
                                                    key={time}
                                                    onClick={() => setSelectedTime(time)}
                                                    className={`py-3 px-2 rounded-xl text-center font-medium transition-all ${
                                                        selectedTime === time
                                                            ? 'bg-blue-500 text-white'
                                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                    }`}
                                                >
                                                    {time}
                                                </button>
                                            ))}
                                    </div>
                                </div>
                            )}

                            <div className="p-6">
                                <button
                                    onClick={handlePlayClick}
                                    disabled={!selectedMode || !selectedTime}
                                    className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all ${
                                        selectedMode && selectedTime
                                            ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-sm'
                                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                    }`}
                                >
                                    <div className="flex items-center justify-center space-x-2">
                                        <Search className="w-5 h-5" />
                                        <span>Find Match</span>
                                    </div>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}