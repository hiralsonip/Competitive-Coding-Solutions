import React, { useEffect, useState } from "react"

const Game = () => {

    const [data, setData] = useState({
        name: "",
        genre: ""
    });
    const [games, setGames] = useState([]);
    const [filteredGerne, setFilteredGerne] = useState("All")

    useEffect(() => {
        const storedGames = JSON.parse(localStorage.getItem("games")) || [];
        setGames(storedGames)
    }, [])

    const handleInput = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedGames = [...games, data];
        setGames(updatedGames);
        localStorage.setItem("games", JSON.stringify(updatedGames))
        setData({ name: "", genre: "" })
    }

    const handleRemove = (index) => {
        const updated = games.filter((_, i) => i !== index);
        setGames(updated);
        localStorage.setItem("games", JSON.stringify(updated))
        console.log(index)
    }

    const handleFilter = (e) => {
        setFilteredGerne(e.target.value)
        console.log(filteredGerne)
    }

    const genres = ["All", ...new Set(games.map((g) => g.genre))];

    const filteredGame = filteredGerne === "All"
        ? games
        : (games.filter((game) => (game.genre === filteredGerne)));

    return (
        <>
            <h2>Game</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    Name : <input
                        type="text"
                        name="name"
                        required
                        value={data.name}
                        onChange={handleInput} />
                </div>

                <div>
                    Genre : <input
                        type="text"
                        name="genre"
                        required
                        value={data.genre}
                        onChange={handleInput} />
                </div>

                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>

            <div>

                <select onChange={handleFilter} value={filteredGerne}>
                    {
                        genres.map((genre, index) => (
                            <option key={index} value={genre}>
                                {genre}
                            </option>
                        ))
                    }
                </select>
                <h3>List Of Games</h3>
                {
                    filteredGame.map((game, index) => (
                        <div key={index}>
                            <li>{game.name} - {game.genre}</li>
                            <button onClick={() => handleRemove(index)}> X
                            </button>
                        </div>
                    ))
                }
            </div>
        </>
    )

}

export default Game