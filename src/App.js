import Form from "./components/form/Form";
import { useState } from "react";
import List from "./components/list/List";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const sendData = (client) => {
    setData([...data, client]);
  };

  const remove = (client) => {
    setData(data.filter((c) => c !== client));
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <header className="mt-3">
        <h1 className="text-center">List Client</h1>
      </header>
      <main className="container mt-3">
        <Form sendData={sendData} />
        <List clients={data} remove={remove} />
      </main>
    </>
  );
}

export default App;
