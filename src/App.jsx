import React, { useEffect, useState } from "react";
import Container from "./layouts/Container";
import Heading from "./layouts/Heading";
import List from "./layouts/List";
import Flex from "./layouts/Flex";
import ListItems from "./layouts/ListItems";
import { IoIosAddCircle } from "react-icons/io";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  query,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./config/Firebase";

function App() {
  const [toDos, setToDos] = useState([]);
  const [input, setInput] = useState();

  //Create todo
  const createTodo = async (e) => {
    e.preventDefault(e);
    if (input === "") {
      alert("Please enter a valid todo");
      return;
    }
    await addDoc(collection(db, "todos"), {
      text: input,
      completed: false,
    })
    setInput('')
  };

  //Read todo from firebase
  useEffect(() => {
    const data = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(data, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setToDos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  //Update todo in firebase
  const toggleComplete = async (toDo) => {
    await updateDoc(doc(db, "todos", toDo.id), {
      completed: !toDo.completed,
    });
  };

  //Delete todo
  const deleteTodo = async(id) =>{
    await deleteDoc(doc(db, 'todos', id))
  }

  return (
    <>
      <div className=" h-screen w-screen p-10 bg-gradient-to-br from-[#919BFF] to-[#133A94]">
        <Container>
          <Heading title={"To-Do App"} />
          <form onSubmit={createTodo}>
            <Flex className={"justify-between items-center"}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className=" outline-none w-[400px] rounded-xl p-3 border border-[#00A9FF]"
                type="text"
                placeholder="Add To-Do"
              />
              <button>
                <IoIosAddCircle className=" text-4xl text-[#00A9FF] ml-3" />
              </button>
            </Flex>
          </form>
          <List>
            {toDos.map((todo, index) => (
              <ListItems
                key={index}
                toDo={todo}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
              />
            ))}
          </List>
          {toDos.length < 1 ? null : <p className=" text-center p-5 font-light text-sm">
            {`You have ${toDos.length} todos !`}
          </p>}
        </Container>
      </div>
    </>
  );
}

export default App;
