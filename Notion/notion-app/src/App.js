import { useState } from "react";
import DEFAULT_CARDS from "./data";
import { FaFire } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";

const App = () => {
  return (
    <div className="h-screen w-full bg-neutral-900 text-neutral-50">
      {" "}
      <Board />
    </div>
  );
};

const Board = () => {
  const [cards, setCards] = useState(DEFAULT_CARDS);
  return (
    <div className="flex h-screen w-full gap-3 overflow-scroll p-12">
      <Column title="Backlog" column="backlog" headingColor="text-neutral-500" cards={cards} setCards={setCards} />
      <Column title="TODO" column="todo" headingColor="text-yellow-200" cards={cards} setCards={setCards} />
      <Column title="In Progress" column="doing" headingColor="text-blue-200" cards={cards} setCards={setCards} />
      <Column title="Complete" column="done" headingColor="text-emarald-200" cards={cards} setCards={setCards} />
      <RemoveTasks setCards={setCards} />
    </div>
  );
};

const RemoveTasks = ({ setCards }) => {
  const [active, setActive] = useState(false);
  return (
    <div
      className={`mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl ${
        active ? "border-red-800 bg-red-800/20 text-red-500" : "border-neutral-500 bg-neutral-500/20 text-neutral-500"
      }`}
    >
      {active ? <FaFire className="animate-bounce" /> : <FaTrash />}
    </div>
  );
};
const Column = ({ title, headingColor, column, cards, setCards }) => {
  const [active, setActive] = useState(false);
  const filteredCards = cards.filter((c) => c.column === column);
  return (
    <div className="w-56 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <span className="rounded text-sm text-neutral-400">{filteredCards.length}</span>
      </div>
      <div className={`h-full w-full transition-colors ${active ? "bg-neutral-800/50" : "bg-neutral-800/0"} `}>
        {filteredCards.map((c) => {
          return <Card key={c.id} {...c} />;
        })}
        <DropIndicator beforeId="-1" column={column} />
        <AddCard column={column} setCards={setCards} />
      </div>
    </div>
  );
};

const AddCard = ({ column, setCards }) => {
  const [text, setText] = useState("");
  const [adding, setAdding] = useState(false);
  return (
    <>
      {adding ? (
        <form>
          <textarea
            onChange={(e) => setText(e.target.value)}
            autoFocus
            placeholder="Add new Task"
            className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-violet-300 focus:outline-0"
          />
        </form>
      ) : (
        <button
          onClick={() => setAdding(true)}
          className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
        >
          <span>Add Card</span>
          <FiPlus />
        </button>
      )}
    </>
  );
};

const Card = ({ title, id, column }) => {
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <div
        draggable="true"
        className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing"
      >
        <p className="text-sm text-neutral-100">{title}</p>
      </div>
    </>
  );
};

const DropIndicator = ({ beforeId, column }) => {
  return (
    <div
      data-before={beforeId || -1}
      data-column={column}
      className="my-0.5 h-0.5 w-full bg-violet-400 opacity-0 "
    ></div>
  );
};

export default App;
