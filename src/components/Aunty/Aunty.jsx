import Cousin from "../Cousin/Cousin";


const Aunty = () => {
  return (
    <div>
      <h2>Aunty</h2>
      <section className="flex">
        <Cousin name={'Robin'}></Cousin>
        <Cousin name={'Litu'}></Cousin>
      </section>
    </div>
  );
};

export default Aunty;