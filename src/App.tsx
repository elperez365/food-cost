import { useState } from "react";
import "./App.css";
import Dialog from "./components/Dialog";

function App() {
  const [total, setTotal] = useState<number>(0);
  const [consumed, setConsumed] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const quantity = (document.getElementById("quantity") as HTMLInputElement)
      .value;
    const pricekg = (document.getElementById("pricekg") as HTMLInputElement)
      .value;
    const stock = (document.getElementById("stock") as HTMLInputElement).value;

    const total = (+quantity * +pricekg) / 1000;
    const consumed = (+stock * +pricekg) / 1000;

    setTotal(total);
    setConsumed(consumed);
    // const costFinal = cost - costStock;

    setShowModal(true);
  };

  const prevResultConditopn = !!total || !!consumed;

  return (
    <>
      <Dialog
        showModal={showModal}
        setShowmodal={setShowModal}
        text1={`
      ${total.toFixed(2)}€ `}
        text2={`
  ${consumed.toFixed(2)}€`}
      />
      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          gap: "1rem",
        }}
      >
        <h1>Food cost</h1>
        {prevResultConditopn && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "lightgray",
              padding: "1rem",
              borderRadius: "0.5rem",
            }}
          >
            <h3>Ultimo calcolo effettuato</h3>
            <p>Il costo totale è {total.toFixed(2)}€</p>
            <p>il costo consumato è {consumed.toFixed(2)}€</p>
          </div>
        )}
        <label htmlFor="quantity">Inserisci la quantità totale in grammi</label>
        <input id="quantity" type="number" />
        <label htmlFor="pricekg">Inserisci il prezzo al chilo</label>
        <input id="pricekg" type="number" step={0.01} required />
        <label htmlFor="stock">Inserisci la quantità consumata in grammi</label>
        <input id="stock" type="number" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {" "}
          <button
            type="submit"
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "blue",
              color: "white",
              border: "none",
              borderRadius: "0.5rem",
            }}
          >
            calcola
          </button>
          <button
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "0.5rem",
              width: "10rem",
            }}
            onClick={() => {
              setTotal(0);
              setConsumed(0);
            }}
            type="reset"
          >
            reset
          </button>
        </div>
      </form>
    </>
  );
}

export default App;
