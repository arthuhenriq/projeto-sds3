import Navbar from "components/navbar";
import Footer from "components/footer";
import DataTable from "components/datatable";

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <h1 className='text-primary'>Olá mundo</h1>
        <DataTable></DataTable>
      </div>
      <Footer />
    </>
  );
}

export default App;
